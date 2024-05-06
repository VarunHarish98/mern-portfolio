const router = require('express').Router();
const { About } = require('../models/portfolio')

router.post('/update-about', async (req, res) => {
    try {
        // console.log(req.body)
        const about = await About.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({ success: true, message: "About section Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router