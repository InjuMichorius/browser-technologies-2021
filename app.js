const express = require('express')
const bodyParser = require('body-parser')
const assert = require('assert')
const app = express()
const router = express.Router()
const port = 3000
const mongo = require('./public/source/mongo')
const enquete = require('./public/source/routes/enquete.js')
const resultSchema = require('./public/schemas/result-schema')

//Config our .env file
require('dotenv').config()

//Connecting to database
const connectToMongoDB = async () => {
  await mongo().then(async (mongoose) => {
    try {
      console.log('Connected to mongoDB')

      const result = {
        email: 'inju@inju.nl',
        username: 'Inju',
        password: 'magjenieweten1!'
      }

      await new resultSchema(result).save()
    } finally {
      mongoose.connection.close()
    }
  })
}
connectToMongoDB()

//Identifying default path
app.use(express.static(__dirname + '/public/'));

//Templating engine
app.set('views', 'view')
app.set('view engine', 'ejs')

//Routes
app.get('/', enquete)

//Server check
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})