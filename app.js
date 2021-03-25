const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const port = 3000
const account = require('./public/source/routes/account.js')
const q1WAFS = require('./public/source/routes/q1WAFS.js')
const q2WAFS = require('./public/source/routes/q2WAFS.js')
const q3WAFS = require('./public/source/routes/q3WAFS.js')
const mongo = require('mongodb')
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb')


//Config our .env file
require('dotenv').config()

//Defining db
let db

//Connect to database
const url = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.zlqtj.mongodb.net/enquetes?retryWrites=true&w=majority'

mongo.MongoClient.connect(url, {useUnifiedTopology: true}, function(err, client) {
  if(err) {
    throw err
  }
  db = client.db(process.env.DB_NAME)


  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
})

app.use(bodyParser.urlencoded({
  extended: true,
}));



//Insert data to the database
app.post('/send-account', user)

function user(req, res, next) {
  db.collection('users').insertOne({
    studentName: req.body.studentName,
    studentNumber: req.body.studentNumber
  }, done)
  function done(err) {
    if (err) {
      next(err)
    } else {
      res.redirect('/q1WAFS')
    }
  }
}
// console.log(db.collection('users').find({studentName: "Inju Michorius"}))
//Insert data to the database
app.post('/send-q1WAFS', teacher)

function teacher(req, res, next) {
  db.collection('users').find({
    studentNumber: '500804843'
  }, done)
  function done(err) {
    if (err) {
      next(err)
    } else {
      res.redirect('/q2WAFS')
    }
  }
}


//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', account)
app.get('/q1WAFS', q1WAFS)
app.get('/q2WAFS', q2WAFS)
app.get('/q3WAFS', q3WAFS)