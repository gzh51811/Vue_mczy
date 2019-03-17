const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    let data = await db.find('cart');
    console.log(data);
    res.send(data)
});



module.exports = Router;