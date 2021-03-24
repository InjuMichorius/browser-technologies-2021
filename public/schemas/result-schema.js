const mongoose = require('mongoose')
const resultSchema = mongoose.Schema({
    email: String,
    username: String,
    password: String
})

module.exports = mongoose.model('results', resultSchema)