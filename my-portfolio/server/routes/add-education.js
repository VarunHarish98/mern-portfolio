const router = require('express').Router();
const { Education } = require('../models/portfolio')

router.post('/add-education', async (req, res) => {
    try {
        const education = await Education.insertMany(req.body.values)
        res.status(200).send({ success: true, message: "Education section saved Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router