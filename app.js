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
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'WAFS' });

const CSSTTRDataSchema = new Schema({
  uuid: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'CSSTTR' });

const PWADataSchema = new Schema({
  uuid: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'PWA' });

const BTDataSchema = new Schema({
  uuid: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'BT' });

const RTWDataSchema = new Schema({
  uuid: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'RTW' });

const HCDDataSchema = new Schema({
  uuid: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'HCD' });

const Student = mongoose.model('Student', StudentDataSchema);
const WAFS = mongoose.model('WAFS', WAFSDataSchema);
const CSSTTR = mongoose.model('CSSTTR', CSSTTRDataSchema);
const PWA = mongoose.model('PWA', PWADataSchema);
const BT = mongoose.model('BT', BTDataSchema);
const RTW = mongoose.model('RTW', RTWDataSchema);
const HCD = mongoose.model('HCD', HCDDataSchema);

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
  res.render('WAFS', {
    uuid: req.params.uuid,
    studentName: req.query.studentName
  })
});

app.get('/send-WAFS/:uuid', (req, res) => {
  try {
    const wafsRating = {
      uuid: req.params.uuid,
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

app.get('/send-CSSTTR/:uuid', (req, res) => {
  try {
    const cssttrRating = {
      uuid: req.params.uuid,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMaterial: req.query.lessonMaterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new CSSTTR(cssttrRating)
    data.save();

    res.render('./PWA', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})

app.get('/send-PWA/:uuid', (req, res) => {
  try {
    const pwaRating = {
      uuid: req.params.uuid,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMaterial: req.query.lessonMaterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new PWA(pwaRating)
    data.save();

    res.render('./BT', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})

app.get('/send-BT/:uuid', (req, res) => {
  try {
    const btRating = {
      uuid: req.params.uuid,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMaterial: req.query.lessonMaterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new BT(btRating)
    data.save();

    res.render('./RTW', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})

app.get('/send-RTW/:uuid', (req, res) => {
  try {
    const rtwRating = {
      uuid: req.params.uuid,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMaterial: req.query.lessonMaterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new RTW(rtwRating)
    data.save();

    res.render('./HCD', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})

app.get('/send-HCD/:uuid', (req, res) => {
  try {
    const hcdRating = {
      uuid: req.params.uuid,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
      lessonMaterial: req.query.lessonMaterial,
      explanation: req.query.explanation,
      ownInsight: req.query.ownInsight,
    };

    const data = new HCD(hcdRating)
    data.save();

    res.render('./succes', {
      uuid: req.params.uuid
    })
  } catch (error) {
    console.log(error);
  }
})



app.get('/send-account/:uuid', (req, res) => {
  //Checks if user input matches DB
  Student.find({studentName: req.query.studentName, studentNumber: req.query.studentNumber}, (err, data) => {
    if(err) {
      //Logging any errors occuring while searching
      console.log(err)
    } else {
      //If the user doesn't exist, it returns an empty array.
      if(data.length === 0) {
        console.log('No match')
      } else {
        //User exists
        console.log(data)
        console.log(data[0].uuid)
        console.log(req.params.uuid)

        

        res.render('./overview', {
          uuid:req.params.uuid,
          studentName:req.query.studentName
        })
      }
    }
  })
})

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


app.listen(port, () => {
  console.log(`Example app listening at: http://localhost:${port}`)
})