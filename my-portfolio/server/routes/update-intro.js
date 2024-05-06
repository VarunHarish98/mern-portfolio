const router = require('express').Router();
const { Intro } = require('../models/portfolio')

router.post('/update-intro', async (req, res) => {
    try {
        // console.log(req.body)
        const intro = await Intro.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({ success: true, message: "Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router