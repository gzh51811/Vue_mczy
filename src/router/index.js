import Vue from 'vue';

// 1.引入vue-router
import VueRouter from 'vue-router';

import Home from "../pages/Home.vue";

// 2、使用vue-router
Vue.use(VueRouter);


// 3、实例化并且配置
let router = new VueRouter({
    // mode:'history',
    routes: [
        // 首页:当浏览器地址为path为home路径是时，自动渲染component对应组件
        {
            name: 'Home',
            path: '/home',
            component: Home,
        },

    ]
});


export default router;