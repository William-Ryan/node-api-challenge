const express = require('express');

const Actions = require("../data/helpers/actionModel.js")
const router = express.Router();

router.get("/", (req, res) => {
    Actions.get()
    .then(action => res.json(action))
    .catch(err => {
        console.log("Error: ", err);
        res.status(500).json({
            message: "The Actions could not be displayed"
        })
    })
})

module.exports = router