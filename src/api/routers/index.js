const express = require('express');
const Router = express.Router();


const loginRouter = require('./login'); //登录路由
const goodsRouter = require('./goods');
const cartRouter = require('./cart');


Router.use('/cart', cartRouter)
Router.use('/goods', goodsRouter)


//使用路由
Router.use('/login', loginRouter);





module.exports = Router;