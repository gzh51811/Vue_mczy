const express = require('express');
const Router = express.Router();

const goodslistRouter = require('./goodslist');  //商品列表页路由


Router.use('/goodslist', goodslistRouter);   //使用路由

const loginRouter = require('./login'); //登录路由
const goodsRouter = require('./goods');
const cartRouter = require('./cart');


Router.use('/cart', cartRouter)
Router.use('/goods', goodsRouter)


//使用路由
Router.use('/login', loginRouter);





module.exports = Router;