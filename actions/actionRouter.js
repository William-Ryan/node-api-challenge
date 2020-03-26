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

router.post("/", (req, res) => {
    Actions.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(err => {
        console.log("Error: ", err);
        res.status(500).json({ message: "Error adding the action" })
    })
})

router.delete("/:id", (req, res) => {
    Actions.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: "Action has been removed" })
    })
    .catch(err => {
        console.log("Error: ", err);
        res.status(500).json({ 
            message: "The Action could not be removed"
        })
    })
})

router.put("/:id", (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(() => {
        res.status(200).json({
            message: "The Action has been updated"
        })
    })
    .catch(err => {
        console.log("Error: ", err)
        res.status(500).json({ 
            message: "The Action could not be updated"
        })
    })
})

module.exports = router