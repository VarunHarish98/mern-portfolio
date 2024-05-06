const router = require('express').Router();
const { Project } = require('../models/portfolio')

router.post('/add-project', async (req, res) => {
    try {
        const about = await Project.insertMany(req.body.values)
        res.status(200).send({ success: true, message: "Project section saved Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router