const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.mongo_url)
const connection = mongoose.connection;

connection.on('error', () => {
    console.log('Error connecting to DB')
})

connection.on('connected', () => {
    console.log('Connected to DB');
})

module.exports = connection