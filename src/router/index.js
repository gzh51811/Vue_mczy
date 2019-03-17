import Vue from 'vue';
import VueRouter from 'vue-router';
// import Cart from 'page/Cart'
import List from '../pages/List.vue';
import goodslist from '../pages/goodslist.vue';

Vue.use(VueRouter);

let router = new VueRouter({
    // mode:'history',
    routes: [
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path: '/',   //重定向：当浏览器url地址为/,自动跳转到/home
            redirect: '/list'
        },
        {
            name: 'List',
            path: '/list',
            component: List,
        },
        {
            name: 'goodslist',
            path: '/goodslist',
            component: goodslist,
        },
        // {
        //     name: 'Cart',
        //     path: '/cart',
        //     component: Cart,
        //     // meta: {
        //     //     requiresAuth: true
        //     // }
        // },
        
        // 404
        // {
        //     path: '*',
        //     component: NotFound
        // }
    ]
});


// router.beforeEach((to,from,next)=>{
//     console.log('beforeEach',to,from,next)

//     if(to.meta.requiresAuth){
//         // 需要登录的模块，判断是否已登录
//         let username = localStorage.getItem('username');
//         if(username){
//             next();
//         }else{
//             // 重定向到登录页面
//             next({
//                 name:'Login',
//                 params:{from:to.fullPath}
//             })
//         }
//     }else{
//         next();
//     }


// });

export default router;