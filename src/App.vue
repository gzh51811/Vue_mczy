<template>
  <div class="container">
    <router-view></router-view>
    <BackTop>
      <BackTop :height="100" :bottom="60">
        <div class="backtop">
          <i class="iconfont icon-huidaodingbu"></i>
        </div>
      </BackTop>
    </BackTop>
  </div>
</template>

<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/css/base.css";
import axios from "axios";
import rem from "./js/rem.js";
// import "./assets/css/base.css";
import iView from "iview";
// import "iview/dist/styles/iview.css";
// import Mint from "mint-ui";
// import "mint-ui/lib/style.css";
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);
Vue.use(iView);
// Vue.use(Mint);

// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;

export default {};
</script>
 
<style>
@import "../src/assets/css/home.css";
.container {
  height: 100%;
}
</style>




