<template>
  <div class="container">

    <router-view></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import './assets/css/base.css';
// import axios from "axios";

import axios from "axios";
import rem from "./js/rem.js";

// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
// Vue.prototype.$axios = axios;
export default {};
</script>

  
<style>
.container {
    height: 100%;
  }
</style>

<style lang="scss">
.container {
  height: 100%;
}
</style>

