const router = require('express').Router();
const { Experience } = require('../models/portfolio')

router.post('/add-experience', async (req, res) => {
    try {
        const experience = await Experience.insertMany(req.body.values)
        res.status(200).send({ success: true, message: "Experience section saved Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router