const { v4: uuidv4 } = require('uuid');
const express = require('express')
const bodyParser = require('body-parser')
const account = require('./public/source/routes/account.js')
const q1WAFS = require('./public/source/routes/q1WAFS.js')
const q2WAFS = require('./public/source/routes/q2WAFS.js')
const q3WAFS = require('./public/source/routes/q3WAFS.js')
const mongoose = require('mongoose')

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
}, { collection: 'Student'});

const WAFSDataSchema = new Schema({
  uuid: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMarterial: { type: String, required: true},
  explanation: { type: String, required: true},
  ownInsight: { type: String, required: true}
}, { collection: 'WAFS'});

const StudentPersistence = mongoose.model('Student', StudentDataSchema);
const WAFSPersistence = mongoose.model('WAFS', WAFSDataSchema);
//

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

app.get('/send-account/:uuid', (req, res) => {
  try {
    const student = {
      uuid: req.params.uuid,
      studentName: req.query.studentName,
      studentNumber: req.query.studentNumber
    };

    const data = new StudentPersistence(student)
    data.save();

    res.render('./WAFS/q1WAFS', {
      uuid: req.params.uuid
    })
  } catch (err) {
    console.log(err);
  }
});

app.get('/send-q1WAFS/:uuid', (req, res) => {
  try {
    const wafsRating = {
      uuid: req.params.uuid,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMarterial: req.query.lessonMarterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new WAFSPersistence(wafsRating)
    data.save();

    res.render('./CTTR/q1CTTR', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})

// app.get('/send-qCTTR/:uuid', (req, res) => {
//   try {

//   } catch (error) {
//     console.log(error);
//   }
// })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})