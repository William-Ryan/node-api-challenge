const express = require('express');

const Projects = require("../data/helpers/projectModel")
const router = express.Router();

router.get("/", (req, res) => {
    Projects.get()
    .then(project => res.json(project))
    .catch(err => {
        console.log("Error: ", err);
        res.status(500).json({
            message: "The Projects could not be displayed"
        })
    })
})

module.exports = router