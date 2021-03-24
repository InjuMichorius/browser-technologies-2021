const mongoose = require('mongoose')

require('dotenv').config()

const url = 'mongodb+srv://' + process.env.NAME + ':' + process.env.DB_PASSWORD + '@cluster0.zlqtj.mongodb.net/' + process.env.DB_NAME + '?retryWrites=true&w=majority'

module.exports = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}