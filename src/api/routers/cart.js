const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    //获取数据渲染
    let data = await db.find('cart');
    // console.log(data);
    res.send(data)
});

Router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    // console.log(666);
    //修改数量
    let { params } = req.body;
    let { idx, value } = params;
    MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
        if (err) throw err;

        let db = client.db('ssw'); //连接数据库
        // 使用某个集合
        let collecton = db.collection('cart');
        let data = await collecton.update({ "goods_id": idx }, { "$set": { "qty": value } })
        res.send(data)
    });
});


module.exports = Router;