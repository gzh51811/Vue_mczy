const express=require('express');

const app=express();

const Router=require('./api/routers');


let allowOrigin = ['http://localhost:8080','http://localhost:10086','http://www.taobao.com']

//  设置跨域资源共享CORS
app.use((req,res,next)=>{
    let origin = req.get('Origin');
    let idx = allowOrigin.indexOf(origin)
    if(idx>=0){
        res.setHeader('Access-Control-Allow-Origin',allowOrigin[idx]);
        res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
        res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    }
    
    // 跨域请求CORS中的预请求
    if(req.method=="OPTIONS") {
        res.sendStatus(200);/*让options请求快速返回*/
    } else{
        next();
    }
})
//静态服务器
    app.use(express.static('./../src'));

    //路由接口
    app.use('/api',Router);

//监听端口
    app.listen(4399,()=>{
        console.log('服务器启动成功:4399');
    });