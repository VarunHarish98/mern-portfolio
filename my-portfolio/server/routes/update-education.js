const router = require('express').Router();
const { Education } = require('../models/portfolio')

router.post('/update-education', async (req, res) => {
    try {
        // console.log(req.body)
        const education = await Education.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({ success: true, message: "Education section Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router