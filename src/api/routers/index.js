const express = require("express");
const Router = express.Router();
const homeRouter = require("./home");

Router.use("/home", homeRouter);    
module.exports = Router;