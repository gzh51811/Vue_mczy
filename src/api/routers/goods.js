const express = require('express');
const Router = express.Router();
const bodyParser = require('body-parser');
const db = require('../db');
var ObjectId = require('mongodb').ObjectId;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();

Router.get('/', urlencodedParser, jsonParser, async (req, res) => {
    // console.log(666);
    let { id } = req.query;
    // console.log(id);
    let data = await db.find('goods', { goods_id: id });
    // console.log(data);
    res.send(data)
});
Router.post('/', urlencodedParser, jsonParser, async (req, res) => {
    // console.log(666);
    // console.log(req.body);
    let { params } = req.body;
    let { id, num } = params;
    // console.log(id, num);
    let data = await db.find('cart', { goods_id: id });
    let data0 = await db.find('goods', { goods_id: id });
    // console.log(data0[0])
    // console.log(data);
    //判断是否购物车存在商品
    if (data.length > 0) {

        //有，更新数量
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;

            let db = client.db('ssw'); //连接数据库
            // 使用某个集合
            let collecton = db.collection('cart');
            let data1 = await collecton.update({ "goods_id": id }, { "$inc": { "qty": num } })
            res.send(data1)
        });
    } else {
        //无，插入数据库
        // console.log(666)
        let data2 = data0[0];
        let data1 = await db.insert('cart', { ...data2, qty: num })
        res.send(data1)
    }
    // res.send(data)
});


module.exports = Router;