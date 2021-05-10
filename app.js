const express = require('express')
const mongoose = require('mongoose')
const { v4: uuidV4 } = require('uuid');
//Config our .env file
require('dotenv').config()

const url = 'mongodb+srv://' + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + '@cluster0.zlqtj.mongodb.net/enquetes?retryWrites=true&w=majority'
mongoose.connect(url, {'useNewUrlParser': true, 'useUnifiedTopology': true, useCreateIndex: true});

//Schemas
const Schema = mongoose.Schema

const surveySchema = new Schema({
  subject: { type: String, required: true, enum: ["WAFS", "CSSTTR", "PWA", "BT", "HCD", "RTW"]},
  teacher: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  lessonMaterial: { type: String, required: true },
  explanation: { type: String, required: true },
  ownInsight: { type: String, required: true }
});

const studentSchema = new Schema({
  uuid: { type: String, required: true, index: true },
  studentName: { type: String, required: true },
  studentNumber: { type: String, required: true },
  surveys: [surveySchema]
});

studentSchema.virtual('filledSurveys').get(function() {
  return this.surveys.map((survey) => survey.subject)
})

studentSchema.virtual('emptySurveys').get(function() {
  const student = this
  return ["WAFS", "CSSTTR", "PWA", "BT", "HCD", "RTW"].filter((subject) => !student.filledSurveys.includes(subject))
})

const Student = mongoose.model('Student', studentSchema)


// Express
const app = express()

  // Settings
    //Templating engine
app.set('views', 'view').set('view engine', 'ejs')
  // bodyparser
app.use(express.urlencoded({extended: true}))

  // Routes
app
  .use('/static', express.static(__dirname + '/public/')) 
  .get('/', (req, res) => res.render('account'))
  .post('/', loginUser)
  .get('/survey/:uuid', renderOverview)
  .get('/survey/:uuid/:subject', renderSurvey)
  .post('/survey/:uuid/:subject', saveSurvey)
  .use((req, res) => res.status(404).send('not found'))
  .use((error, req, res) => {
    console.error(error)
    res.status(500).send(error)
  })

// Starting the server
const port = process.env.PORT || 0
const server = app.listen(port, () => {
  console.log(`Listening at: http://localhost:${server.address().port}`)
})


// Route handlers
function loginUser(req, res, next) {
  const { studentName, studentNumber } = req.body

  return findUserByStudentNameNumber(studentName, studentNumber)
    .then((user) => {
      if(!user) {
        const newUser = new Student({uuid: uuidV4().toString(), studentName, studentNumber})
        newUser.save().then((user) => res.redirect(`/survey/${user.uuid}`))
      } else res.redirect(`/survey/${user.uuid}`)
    })
    .catch(error => next(error))
}


function renderOverview(req, res, next) {
  const { uuid } = req.params

  return findUserByUUID(uuid)
    .then(userDocument => res.render('overview', { user: userDocument.toObject(), filledSurveys: userDocument.filledSurveys, emptySurveys: userDocument.emptySurveys }))
    .catch(error => next(error)) 
}

function renderSurvey(req, res, next) {
  const { uuid, subject } = req.params

  return findUserByUUID(uuid)
    .then((userDocument) => {
      const emptyFormData = {
        teacher: ' ',
        startDate: ' ',
        endDate: ' ',
        lessonMaterial: ' ',
        explanation: ' ',
        ownInsight: ' '
      }
      
      const formData= userDocument.surveys.find((survey) => subject === survey.subject) || emptyFormData

      res.render(subject, {formData, user: userDocument.toObject()})
    })
    .catch(error => next(error))

}

function saveSurvey(req, res, next) {
  const { uuid, subject } = req.params

  return findUserByUUID(uuid)
    .then(userDocument => {
      const surveyIndex = userDocument.surveys.findIndex((survey) => survey.subject === subject )

      if(surveyIndex >= 0) {
        userDocument.surveys[surveyIndex] = {
          subject: subject,
          teacher: req.body.teacher,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          lessonMaterial: req.body.lessonMaterial,
          explanation: req.body.explanation,
          ownInsight: req.body.ownInsight
        }
      } else {
        const survey = userDocument.surveys.create({
          subject: subject,
          teacher: req.body.teacher,
          startDate: req.body.startDate,
          endDate: req.body.endDate,
          lessonMaterial: req.body.lessonMaterial,
          explanation: req.body.explanation,
          ownInsight: req.body.ownInsight
        })

        userDocument.surveys.push(survey)
      }
      return userDocument.save()
      
    })
    .then((userDocument) => {
      res.redirect(`/survey/${userDocument.uuid}`)
    })
    .catch(error => next(error))
}

// Utilities
function findUserByStudentNameNumber(studentName, studentNumber) {
  return Student.findOne({ studentName, studentNumber}, (error, data) => {
    if(error) return Promise.reject(error)
    else return Promise.resolve(data)
  })
}

function findUserByUUID(uuid) {
  return Student.findOne({uuid}, (error, data) => {
    if(error) return Promise.reject(error)
    else if(!data) return Promise.reject(new Error(`No user with ${uuid} found`))
    else return Promise.resolve(data)
  })
}