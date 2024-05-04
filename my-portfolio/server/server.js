const express = require('express')
const app = express()
const port = process.env.port || 3001
const dbConfig = require('./config/dbConfig')
const cors = require("cors");
app.use(cors())

const portfolioRoute = require("./routes/get-portfolio-data")

app.use(express.json())

app.use('/api/v1/portfolio', portfolioRoute)
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})