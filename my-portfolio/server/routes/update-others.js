const router = require('express').Router();
const { Others } = require('../models/portfolio')

router.post('/update-others', async (req, res) => {
    try {
        // console.log(req.body)
        const others = await Others.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({ success: true, message: "Others section Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router