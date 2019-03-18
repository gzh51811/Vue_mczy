const express = require('express');
const bodyParser = require('body-parser');
const Router = express.Router();
// const db=require('../db')
// const db = require("./../db/index");//封装好的数据库操作方法

//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

//格式
let urlencodedParser = bodyParser.urlencoded({ extended: false });
let jsonParser = bodyParser.json();


Router.get('/', urlencodedParser, jsonParser,async (req, res) => {
    let {m}=req.query;
   
    if(m=='xuanran'){
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;
    
            let db = client.db('ssw'); //连接数据库
           
            // 使用某个集合
            // let num=10;
            let collecton = db.collection('goods');
            let data=await collecton.find().limit(10).toArray();
        // let data= await db.find('list');
             client.close();

        //查全部返回长度
        // console.log(data)
        res.send(data)
    })
    }

    if(m=='lanjiazai'){
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;
    
            let db = client.db('ssw'); //连接数据库
           
            // 使用某个集合
            let {length,page}=req.query;
            console.log(length,page)
            let collecton = db.collection('goods');
            let data=await collecton.find().skip(page*length).limit(10).toArray();
        // let data= await db.find('list');
            //  client.close();

        //查全部返回长度
        console.log(data)
        res.send(data)
    })
    }
    //升序
    if(m=='paixu'){
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;
    
            let db = client.db('ssw'); //连接数据库
    
    
            // 使用某个集合
            let collecton = db.collection('goods');
            let data=await collecton.find().sort({price:1}).toArray();
            res.send(data);
    })
       
    }
 //降序
    if(m=='jiangxu'){
        MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
            if (err) throw err;
    
            let db = client.db('ssw'); //连接数据库
    
    
            // 使用某个集合
            let collecton = db.collection('goods');
            let data=await collecton.find().sort({price:-1}).toArray();
            res.send(data);
    })
       
    }
    
        // res.send(
        //     data
        //     // data,
        //     // len,
        //     // qty,
        //     // page
        // );

    // });




});
module.exports=Router;