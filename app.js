const { v4: uuidv4 } = require('uuid');
const express = require('express')
const bodyParser = require('body-parser')
const account = require('./public/source/routes/account.js')
const mongoose = require('mongoose')
const path = require('path');
const { Db } = require('mongodb');

//Config our .env file
require('dotenv').config()

//Connect to database
const url = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.zlqtj.mongodb.net/enquetes?retryWrites=true&w=majority'

// verhuizen naar een mongoose service
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(url);
const Schema = mongoose.Schema;

const StudentDataSchema = new Schema({
  uuid: { type: String, required: true },
  studentName: { type: String, required: true },
  studentNumber: { type: String, required: true },
}, { collection: 'Student' });

const WAFSDataSchema = new Schema({
  uuid: { type: String, required: true },
  teacher: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'WAFS' });

const Student = mongoose.model('Student', StudentDataSchema);
const WAFS = mongoose.model('WAFS', WAFSDataSchema);

const app = express()
const router = express.Router()
const port = 3000

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.get('/', (req, res) => {
  res.render('account', {
    uuid: uuidv4().toString()
  })
});

app.get('/WAFS/:uuid', (req, res) => {

  WAFS.find({ uuid: req.params.uuid }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      if (data.length === 0) {
        console.log('User has no form data')

        const emptyFormData = {
          uuid: req.params.uuid,
          startDate: ' ',
          endDate: ' ',
          lessonMaterial: ' ',
          explanation: ' ',
          ownInsight: ' '
        }

        res.render('WAFS', emptyFormData)
      } else {
        const formData = {
          uuid: req.params.uuid,
          startDate: data[0].startDate,
          endDate: data[0].endDate,
          lessonMaterial: data[0].lessonMaterial,
          explanation: data[0].explanation,
          ownInsight: data[0].ownInsight
        }
        res.render('WAFS', formData)
      }
    }
  })
});

app.get('/send-WAFS/:uuid', (req, res) => {
  try {
    
    const wafsRating = {
      uuid: req.params.uuid,
      teacher: req.query.teacher,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMaterial: req.query.lessonMaterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new WAFS(wafsRating)
    data.save();
    res.render('./overview', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})

app.get('/send-account/:uuid', (req, res) => {
  //Checks if user input matches DB
  Student.find({ studentName: req.query.studentName, studentNumber: req.query.studentNumber }, (err, data) => {
    if (err) {
      //Logging any errors occuring while searching
      console.log(err)
    } else {
      //If the user doesn't exist, it returns an empty array.
      if (data.length === 0) {
        console.log('No match')

        // app.get('/send-account/:uuid', (req, res) => {
        //   try {
        //     const student = {
        //       uuid: req.params.uuid,
        //       studentName: req.query.studentName,
        //       studentNumber: req.query.studentNumber
        //     };

        //     const data = new Student(student)
        //     data.save();


        //     res.render('./WAFS', {
        //       uuid: req.params.uuid
        //     })
        //   } catch (err) {
        //     console.log(err);
        //   }
        // });

      } else {
        //User exists, change generated UUID to use uuid
        let userId = data[0].uuid

        res.render('./overview', {
          uuid: userId
        })
      }
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at: http://localhost:${port}`)
})