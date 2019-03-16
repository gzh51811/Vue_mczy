const express = require('express');
const Router = express.Router();
var md5 = require('md5');
const bodyParser = require('body-parser');
const { create } = require('./token');
const { verify } = require('./token');

//引入数据库
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();


Router.post('/', urlencodedParser, jsonParser, (req, res) => {

    let { m } = req.body;  //解构  
  

    MongoClient.connect("mongodb://localhost:27017", async function (err, client) {
        if (err) throw err;

        let db = client.db('ssw'); //连接数据库
        // 使用某个集合
        let collecton = db.collection('user');

        // collecton.insertOne({ username,  password: md5(password) }, (err, data) => {
        //     console.log(data);
        // });
        if (m == 'login') {
            let {username,password} = req.body;
            let data = await collecton.find({ $and:[{ username},{password:md5(password)}]}).toArray();

            if (data.length > 0) {
                let _token = create(username);
                let _username = username;
                res.send({
                    msg: '登录成功',
                    _token,
                    _username,
                    code: 1
                });
            }else {
                res.send({
                    msg: '登录失败',
                    code: 0
                });
            }
        }
        
        //验证token
        if (m == 'token') {
            let { data: token } = req.body;
            let res1 = verify(token);
            // console.log(res1)

            if (res1) {
                res.send('200')
            } else {
                res.send('404')
            }
        }

    });
});



module.exports = Router;