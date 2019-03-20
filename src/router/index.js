import Vue from 'vue';

// 1.引入vue-router
import VueRouter from 'vue-router';
// import Cart from 'page/Cart'
import List from '../pages/list.vue';
import Goodslist from '../pages/goodslist.vue';
import Cart from './../pages/cart.vue';
import NotFound from './../pages/NotFound.vue';
import Account from './../pages/Account.vue';
import Login from './../pages/Login.vue';
import Register from './../pages/Register.vue'
import Goods from './../pages/goods.vue'
import Home from "../pages/Home.vue";
import Advertisement from "../pages/Advertisement.vue";

// 2、使用vue-router
Vue.use(VueRouter);


// 3、实例化并且配置
let router = new VueRouter({
    // mode:'history',
    routes: [
        // 首页:当浏览器地址为path为home路径是时，自动渲染component对应组件
        {
            name: 'advertisement',
            path: '/',
            component: Advertisement,
        },

        {
            name: 'register',
            path: '/register',
            component: Register
        },
        {
            name: 'home',
            path: '/home',
            component: Home,
        },
        {
            name: 'list',
            path: '/list',
            component: List,
        },
        {
            name: 'cart',
            path: '/cart',
            component: Cart,
            meta: {
                requiresAuth: true
            }
        },
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

        {
            name: 'goods',
            path: '/goods',
            component: Goods,
            // meta: {
            //     requiresAuth: true
            // }
        },
        {
            name: 'goodslist',
            path: '/goodslist',
            component: Goodslist,
        },
        // 404
        {
            path: '*',
            component: NotFound
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

//路由拦截
router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
        let token = localStorage.getItem('token');
        if (token) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})


export default router;