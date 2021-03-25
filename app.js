const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const port = 3000
const enquete = require('./public/source/routes/enquete.js')
const succes = require('./public/source/routes/succes.js')
const mongo = require('mongodb')
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
// app.post('/send-enquete', register)

// function register(req, res, next) {
//   db.collection('enquete').insertOne({
//     studentName: req.body.studentName,
//     studentNumber: req.body.studentNumber
//   }, done)
//   function done(err) {
//     if (err) {
//       next(err)
//     } else {
//       res.redirect('/succes')
//     }
//   }
// }

function userInput(req, res, next) {
  req.body.studentName
  console.log(studentName.value())
}
userInput()

// app.post('/send-enquete', user)

// function user(req, res, next) {
//     db.collection('enquete').findOne(studentName)
//     console.log(studentName)

// }


//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', enquete)
app.get('/succes', succes)