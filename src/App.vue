<template>
  <div class="container">
<<<<<<< HEAD
    <!-- <h1>共同</h1> -->
=======
>>>>>>> 0f88ddeb69f6f5c0a130dc44dc8485c94c9a8231
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
<<<<<<< HEAD
import './assets/css/base.css';
// import axios from "axios";

=======
import axios from "axios";
import rem from "./js/rem.js";
>>>>>>> 0f88ddeb69f6f5c0a130dc44dc8485c94c9a8231
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
// Vue.prototype.$axios = axios;
export default {};
</script>
<<<<<<< HEAD
  
<style>
.container {
    height: 100%;
  }
</style>
=======
<style lang="scss">
.container {
  height: 100%;
}
</style>
>>>>>>> 0f88ddeb69f6f5c0a130dc44dc8485c94c9a8231
