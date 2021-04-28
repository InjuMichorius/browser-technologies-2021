const { v4: uuidv4 } = require('uuid');
const express = require('express')
const bodyParser = require('body-parser')
const account = require('./public/source/routes/account.js')
const mongoose = require('mongoose')
const path = require('path');
const { Db } = require('mongodb');
const { render } = require('ejs');

//Config our .env file
require('dotenv').config()

//Connect to database
const url = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.zlqtj.mongodb.net/enquetes?retryWrites=true&w=majority'

// verhuizen naar een mongoose service
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
mongoose.connect(url);
const Schema = mongoose.Schema;


//Schemas
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

const CSSTTRDataSchema = new Schema({
  uuid: { type: String, required: true },
  teacher: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
}, { collection: 'CSSTTR' });

const Student = mongoose.model('Student', StudentDataSchema);
const WAFS = mongoose.model('WAFS', WAFSDataSchema);
const CSSTTR = mongoose.model('CSSTTR', CSSTTRDataSchema);

const app = express()
const port = 3000

let emptyEnquete = []
let filledEnquete = []

//Function removes one item from array
function removeA(arr) {
  var what, a = arguments, L = a.length, ax;
  while (L > 1 && arr.length) {
    what = a[--L];
    while ((ax = arr.indexOf(what)) !== -1) {
      arr.splice(ax, 1);
    }
  }
  return arr;
}

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true,
}));

//Routes
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
          teacher: ' ',
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
          teacher: data[0].teacher,
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

app.get('/CSSTTR/:uuid', (req, res) => {

  CSSTTR.find({ uuid: req.params.uuid }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      if (data.length === 0) {
        console.log('User has no form data')

        const emptyFormData = {
          uuid: req.params.uuid,
          teacher: ' ',
          startDate: ' ',
          endDate: ' ',
          lessonMaterial: ' ',
          explanation: ' ',
          ownInsight: ' '
        }

        res.render('CSSTTR', emptyFormData)
      } else {
        const formData = {
          uuid: req.params.uuid,
          teacher: data[0].teacher,
          startDate: data[0].startDate,
          endDate: data[0].endDate,
          lessonMaterial: data[0].lessonMaterial,
          explanation: data[0].explanation,
          ownInsight: data[0].ownInsight
        }
        res.render('CSSTTR', formData)
      }
    }
  })
});

app.get('/send-CSSTTR/:uuid', (req, res) => {
  CSSTTR.find({ uuid: req.params.uuid }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      CSSTTR.findOne({ uuid: req.params.uuid }, function (err, foundObject) {
        if (err) {
          console.log(err)
        } else {
          if (!foundObject) {
            //user has not filled in form
            const cssttrRating = {
              uuid: req.params.uuid,
              teacher: req.query.teacher,
              startDate: req.query.startDate,
              endDate: req.query.endDate,
              lessonMaterial: req.query.lessonMaterial,
              explanation: req.query.explanation,
              ownInsight: req.query.ownInsight,
            }

            const data = new CSSTTR(cssttrRating)
            data.save();
            console.log(data)
          } else {
            if (req.query.teacher) {
              foundObject.teacher = req.query.teacher
            }
            if (req.query.startDate) {
              foundObject.startDate = req.query.startDate
            }
            if (req.query.endDate) {
              foundObject.endDate = req.query.endDate
            }
            if (req.query.lessonMaterial) {
              foundObject.lessonMaterial = req.query.lessonMaterial
            }
            if (req.query.Explanation) {
              foundObject.Explanation = req.query.Explanation
            }
            if (req.query.ownInsight) {
              foundObject.ownInsight = req.query.ownInsight
            }
            foundObject.save(function (err, updatedObject) {
              if (err) {
                console.log(err)
              }
            })
          }
        }
      })
    }
  })
  let userId = req.params.uuid

  function renderOverview() {
    res.render('./overview', {
      uuid: userId,
      empty: emptyEnquete,
      filled: filledEnquete
    })
  }

  //Finds CSSTTR enquete user
  CSSTTR.find({ uuid: userId }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      //User has filled in the enquete
      if (data.length > 0) {
        //Check if array already contains CSSTTR
        if (filledEnquete.includes("CSSTTR") === false) {
          removeA(emptyEnquete, "CSSTTR")
          filledEnquete.push("CSSTTR")
        }
        renderOverview()

        //User has not filled in enquete
      } else {
        //Check if array already contains CSSTTR
        if (emptyEnquete.includes("CSSTTR") === false) {
          console.log(filledEnquete)
          removeA(filledEnquete, "CSSTTR")
          console.log(filledEnquete)
          emptyEnquete.push("CSSTTR")
        }
        renderOverview()

      }
    }
  })
})

app.get('/send-WAFS/:uuid', (req, res) => {
  WAFS.find({ uuid: req.params.uuid }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      WAFS.findOne({ uuid: req.params.uuid }, function (err, foundObject) {
        if (err) {
          console.log(err)
        } else {
          if (!foundObject) {
            //user has not filled in form
            const wafsRating = {
              uuid: req.params.uuid,
              teacher: req.query.teacher,
              startDate: req.query.startDate,
              endDate: req.query.endDate,
              lessonMaterial: req.query.lessonMaterial,
              explanation: req.query.explanation,
              ownInsight: req.query.ownInsight,
            }

            const data = new WAFS(wafsRating)
            data.save();
            console.log(data)
          } else {
            if (req.query.teacher) {
              foundObject.teacher = req.query.teacher
            }
            if (req.query.startDate) {
              foundObject.startDate = req.query.startDate
            }
            if (req.query.endDate) {
              foundObject.endDate = req.query.endDate
            }
            if (req.query.lessonMaterial) {
              foundObject.lessonMaterial = req.query.lessonMaterial
            }
            if (req.query.Explanation) {
              foundObject.Explanation = req.query.Explanation
            }
            if (req.query.ownInsight) {
              foundObject.ownInsight = req.query.ownInsight
            }
            foundObject.save(function (err, updatedObject) {
              if (err) {
                console.log(err)
              }
            })
          }
        }
      })
    }
  })
  function renderOverview() {
    res.render('./overview', {
      uuid: userId,
      empty: emptyEnquete,
      filled: filledEnquete
    })
  }

  //Finds WAFS enquete user
  WAFS.find({ uuid: userId }, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      //User has filled in the enquete
      if (data.length > 0) {
        //Check if array already contains WAFS
        if (filledEnquete.includes("WAFS") === false) {
          removeA(emptyEnquete, "WAFS")
          filledEnquete.push("WAFS")
        }
        renderOverview()

        //User has not filled in enquete
      } else {
        //Check if array already contains WAFS
        if (emptyEnquete.includes("WAFS") === false) {
          console.log(filledEnquete)
          removeA(filledEnquete, "WAFS")
          console.log(filledEnquete)
          emptyEnquete.push("WAFS")
        }
        renderOverview()
      }
    }
  })
})

let user = "user"

app.get('/send-account/:uuid', (req, res) => {
  //Checks if user input matches DB
  Student.find({ studentName: req.query.studentName, studentNumber: req.query.studentNumber }, (err, data) => {
    if (err) {
      //Logging any errors occuring while searching
      console.log(err)
    } else {
      //If the user doesn't exist, it returns an empty array.
      if (data.length === 0) {
        console.log('No match, creating new user')
        const student = {
          uuid: req.params.uuid,
          studentName: req.query.studentName,
          studentNumber: req.query.studentNumber
        };

        user = student.studentName

        const data = new Student(student)
        data.save();
      }
      //If user exists, change generated UUID to user's uuid
      let userId = data[0].uuid

      function renderOverview() {
        res.render('./overview', {
          uuid: userId,
          empty: emptyEnquete,
          filled: filledEnquete
        })
      }

      const enquetes = [WAFS]

      //Finds WAFS enquete user
      enquetes[0].find({ uuid: userId }, (error, data) => {
        if (error) {
          console.log(error);
        } else {
          //User has filled in the enquete
          if (data.length > 0) {
            //Check if array already contains WAFS
            if (filledEnquete.includes("WAFS") === false) {
              removeA(emptyEnquete, "WAFS")
              filledEnquete.push("WAFS")
            }
            renderOverview()

            //User has not filled in enquete
          } else {
            //Check if array already contains WAFS
            if (emptyEnquete.includes("WAFS") === false) {
              console.log(filledEnquete)
              removeA(filledEnquete, "WAFS")
              console.log(filledEnquete)
              emptyEnquete.push("WAFS")
            }
            renderOverview()
          }
        }
      })
    }
  })
})

app.listen(port, () => {
  console.log(`Example app listening at: http://localhost:${port}`)
})