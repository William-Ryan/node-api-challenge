const express = require('express');
const helmet = require('helmet')

const projectRouter = require("./projects/projectRouter.js")
const actionRouter = require("./actions/actionRouter")

const server = express();

server.use(express.json());
server.use(helmet());
server.use("/api/projects", projectRouter)
server.use("/api/actions", actionRouter)

server.get('/', logger, (req, res) => {
    res.send(`<h1>Let's Do This!!!</h1>`)
});

function logger(req, res, next) {
    const method = req.method;
    const endpoint = req.originalUrl;
  
    console.log(`${method} to ${endpoint}`);
  
    next();
}

module.exports = server;