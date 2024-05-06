const router = require('express').Router();
const { Contact } = require('../models/portfolio')

router.post('/update-project', async (req, res) => {
    try {
        // console.log(req.body)
        const contact = await Contact.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({ success: true, message: "Contact section Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router