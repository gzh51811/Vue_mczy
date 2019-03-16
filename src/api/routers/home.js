
const express = require("express");
const bodyParser = require("body-parser");
const Router = express.Router();
const db = require("../db/index.js");

// const mongodb = require('mongodb');  
// const MongoClient = mongodb.MongoClient;

let urlencodeParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.get("/", urlencodeParser, jsonParser, async (req, res) => {
    let data = await db.find("goods");
    console.log(data);
    res.send(data);
});

module.exports = Router;
