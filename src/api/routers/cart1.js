const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    //删除操作
    let { params } = req.body;
    let { id } = params;
    let data = await db.delete('cart', { 'goods_id': id });
    // console.log(data);
    res.send(data)

});


module.exports = Router;