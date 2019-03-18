const express = require('express');
const Router = express.Router();
// const bodyParser = require('body-parser');
const db = require('../db');
// var ObjectId = require('mongodb').ObjectId;

const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// let urlencodedParser = bodyParser.urlencoded({ extended: false });
// let jsonParser = bodyParser.json();

Router.get('/', async (req, res) => {
    let { id } = req.query;
    //  console.log(id);
    let data = await db.find('goods', { goods_id: id });
    console.log(data);
    res.send(data)
});



module.exports = Router;