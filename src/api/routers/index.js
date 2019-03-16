const express = require('express');
const Router = express.Router();


const loginRouter = require('./login'); //登录路由



//使用路由
Router.use('/login', loginRouter);





module.exports = Router;