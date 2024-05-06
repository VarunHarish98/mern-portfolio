const express = require('express')
const app = express()
const port = process.env.port || 3001
const dbConfig = require('./config/dbConfig')
const cors = require("cors");
app.use(cors())

const getPortfolioDataRoute = require("./routes/get-portfolio-data")
const postUpdateIntroRoute = require("./routes/update-intro")
const postAboutRoute = require('./routes/update-about')
const postContactRoute = require('./routes/update-contact')
const postEducationRoute = require('./routes/update-education')
const postOthersRoute = require('./routes/update-others')
const postProjectRoute = require('./routes/update-project')
const postExperienceRoute = require('./routes/update-experience')
const addProjectExperienceRoute = require('./routes/add-project')
const addExperienceRoute = require('./routes/add-experience')
const addEducationRoute = require('./routes/add-education')


app.use(express.json())

app.use('/api/v1/portfolio', getPortfolioDataRoute)
app.use('/api/v1/portfolio', postUpdateIntroRoute)
app.use('/api/v1/portfolio', postAboutRoute)
app.use('/api/v1/portfolio', postExperienceRoute)
app.use('/api/v1/portfolio', postEducationRoute)
app.use('/api/v1/portfolio', postProjectRoute)
app.use('/api/v1/portfolio', postContactRoute)
app.use('/api/v1/portfolio', postOthersRoute)
app.use('/api/v1/portfolio', addProjectExperienceRoute)
app.use('/api/v1/portfolio', addExperienceRoute)
app.use('/api/v1/portfolio', addEducationRoute)



app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
})