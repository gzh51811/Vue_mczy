import Vue from 'vue';
import VueRouter from 'vue-router';
<<<<<<< HEAD
import Cart from './../pages/cart.vue';
import NotFound from './../pages/NotFound.vue';
import Account from './../pages/Account.vue';
import Login from './../pages/Login.vue';
=======
import Cart from 'page/Cart';
import Goods from 'page/goods'
>>>>>>> 0f88ddeb69f6f5c0a130dc44dc8485c94c9a8231

Vue.use(VueRouter);

let router = new VueRouter({
    // mode:'history',
    routes: [
        // 首页:当浏览器地址为path路径是时，自动渲染component对应组件
        {
            path: '/',   //重定向：当浏览器url地址为/,自动跳转到/home
            redirect: '/home'
        },
        {
            name: 'Cart',
            path: '/cart',
            component: Cart,
            // meta: {
            //     requiresAuth: true
            // }
        },
<<<<<<< HEAD
        {
            name: 'account',
            path: '/account',
            component: Account,
            // meta: {
            //     requiresAuth: true
            // }
        },
         {
            name: 'login',
            path: '/login',
            component: Login,
           
        },
        // 404
=======
>>>>>>> 0f88ddeb69f6f5c0a130dc44dc8485c94c9a8231
        {
            name: 'Goods',
            path: '/goods',
            component: Goods,
            // meta: {
            //     requiresAuth: true
            // }
        }
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