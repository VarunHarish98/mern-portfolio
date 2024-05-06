const router = require('express').Router();
const { Project } = require('../models/portfolio')

router.post('/update-project', async (req, res) => {
    try {
        console.log(req.body)
        const project = await Project.updateOne({ _id: req.body._id }, req.body)
        res.status(200).send({success: true, message: "Project section Updated Successfully" });
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports = router