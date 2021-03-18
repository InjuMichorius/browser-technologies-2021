const enquete = require('./public/source/routes/enquete.js')
const express = require('express')
const app = express()
const port = 3000

require('dotenv').config()

// const url = "mongodb+srv://" + process.env.DB_USERNAME + ':' + process.env.DB_PASSWORD + "KEY"
console.log(process.env.TEST)


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