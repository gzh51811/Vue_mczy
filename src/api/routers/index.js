const express = require('express');
const Router = express.Router();

const goodslistRouter = require('./goodslist');  //商品列表页路由


Router.use('/goodslist', goodslistRouter);   //使用路由

const loginRouter = require('./login'); //登录路由
const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const cart1Router = require('./cart1');
const homeRouter = require("./home");
//使用路由
Router.use('/cart', cartRouter)
Router.use('/cart1', cart1Router)
Router.use('/goods', goodsRouter)

Router.use('/login', loginRouter);
Router.use("/home", homeRouter);

module.exports = Router;