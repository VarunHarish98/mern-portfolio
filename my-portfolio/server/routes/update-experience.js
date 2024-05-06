const router = require('express').Router();
const { Experience } = require('../models/portfolio')

router.post('/update-experience', async (req, res) => {
    try {
        // console.log(req.body)
        const experience = await Experience.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({ success: true, message: "Experience section Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router