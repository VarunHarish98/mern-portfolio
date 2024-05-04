const router = require('express').Router();
const { Intro, About, Experience, Project, Education, Contact, Others } = require('../models/portfolio')

router.get('/get-portfolio-data', async (req, res) => {
    try {
        const intros = await Intro.find();
        const about = await About.find();
        const exp = await Experience.find()
        const project = await Project.find()
        const education = await Education.find()
        const contact = await Contact.find()
        const others = await Others.find()

        res.status(200).send({
            intros: intros[0], about: about[0], exp: exp, project, education: education, contact: contact[0], others: others[0]
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router