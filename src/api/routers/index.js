const express = require('express');
const Router = express.Router();


const loginRouter = require('./login'); //登录路由
const goodsRouter = require('./goods');
const cartRouter = require('./cart');
const homeRouter = require("./home");
//使用路由
Router.use('/cart', cartRouter)
Router.use('/goods', goodsRouter)

Router.use('/login', loginRouter);
Router.use("/home", homeRouter);

module.exports = Router;