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
});

router.post("/", (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "Error adding the Project" })
    })
});

router.delete("/:id", (req, res) => {
    Projects.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: "The Project has been removed"})
    })
    .catch(err => {
        console.log("Error: ", err)
        res.status(500).json({
            message: "The Project could not be removed"
        })
    })    
})

router.put("/:id", (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(() => {
        res.status(200).json({ message: "Project has been updated" })
    })
    .catch(err => {
        console.log("Error: ", err)
        res.status(500).json({
            message: "The Project could not be updated"
        })
    })
})

router.get("/:id/actions", (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        console.log("Error: ", err)
        res.status(500).json({
            message: "The Project Actions could not be retrieved"
        })
    })
})

module.exports = router