const express = require('express');
const Router = express.Router();

const goodslistRouter = require('./goodslist');  //商品列表页路由


Router.use('/goodslist', goodslistRouter);   //使用路由



module.exports = Router;