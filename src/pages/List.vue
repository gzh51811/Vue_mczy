<template>
  <div id="classify">
    <div>
      <img src="../assets/images/fanhui1.png" @click="lista()" alt>
      <h1>商品分类</h1>
    </div>
    <div class="main">
      <ul class="main-top">
        <li @click="gotos()" v-for="liste in list" :key="liste.id">
          <a href="javascript:void(0)">{{liste.name}}</a>
        </li>
      </ul>
      <ul class="main-bottom">
        <li @click="gotos()" v-for="listss in lists" :key="listss.id">
          <a href="javascript:void(0)">{{listss.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <footer>
      <nav class="lastlist">
        <li @click="gotohome">
          <i class="iconfont icon-home"></i>
          <span>首页</span>
        </li>
        <li @click="gotogoodlist" class="active">
          <i class="iconfont icon-fenlei"></i>
          <span>分类</span>
        </li>
        <li @click="gotocart">
          <i class="iconfont icon-gouwuche"></i>
          <span>购物车</span>
        </li>
        <li @click="gotomy">
          <i class="iconfont icon-weibiaoti2fuzhi12"></i>
          <span>我的</span>
        </li>
      </nav>
    </footer>
  </div>
</template>
<script>
// import goodslist from './goodslist.vue';
export default {
  data() {
    return {
      list: [
        { name: "面部护肤" },
        { name: "彩妆用品" },
        { name: "香水用品" },
        { name: "健康美肌" }
        //  name:['面部护肤','彩妆用品','香水用品','健康美肌'],
      ],
      lists: [
        { name: "纤体美胸" },
        { name: "个人护理" },
        { name: "男士专区" },
        { name: "婴孕护理" }
      ]
    };
  },
  methods: {
    //返回上一层
    lista() {
      this.$router.go(-1);
    },
    //列表页
    gotos() {
      this.$router.push("/goodslist");
    },
    goto(id) {
      console.log(id);
      // params传参，不支持path跳转
      this.$router.push({ name: "goods", query: { id }, params: { id } });
      //   this.$router.push({path:'/goods/'+id})
      //   this.$router.push({'/goods/'+id)
    },
    //去到分类，首页，购物车，我的
    gotogoodlist() {
      this.$router.push({ name: "list" });
    },
    // gotogoods(id) {
    //   this.$router.push({ name: "goods", query: { id }, params: { id } });
    // }
    gotohome() {
      this.$router.push({ name: "home" });
    },
    gotocart() {
      this.$router.push({ name: "cart" });
    },
    gotomy() {
      this.$router.push({ name: "account" });
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "../assets/css/home.css";
// @import "../assets/iconfont/iconfont.css";
body,
html {
  width: 100%;
  height: 100%;
}
#classify {
  width: 100%;
  height: 100%;
  display: flex;
  background: #f2f2f2;
  flex-direction: column;
  position: relative;
}
img {
  position: absolute;
  top: 0.266667rem;
  left: 0.266667rem;
  width: 0.613333rem;
}
#classify h1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 0.533333rem;
  height: 1.093333rem;
  background: #ed3f7e;
  color: #fff;
}
#classify .main {
  flex: 1;
}
.main ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.main ul li {
  width: 1.6rem;
  height: 1.6rem;
  border: 0.0625rem solid #ed3f7e;
  border-radius: 50%;
  margin-top: 1.333333rem;
  background: #ed3f7e;
  text-align: center;
  line-height: 1.6rem;
  float: left;
}
.main ul li a {
  font-size: 0.32rem;
  color: #fff;
}

footer .lastlist {
  display: flex;
  /* height: 100%; */
  flex: 1;
}

footer .lastlist li {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.active {
  color: #dc3f7e;
}

.top {
  padding: 0.2rem;
  background: white;
  opacity: 0.8;
  /* color: black; */
  text-align: center;
  border-radius: 0.3125rem;
  box-shadow: 0px 0px 0.5em 0.15em #ddd;
}
.ivu-back-top {
  z-index: 999;
  position: fixed;
  cursor: pointer;
  display: none;
}
.ivu-back-top.ivu-back-top-show {
  display: block;
}
.ivu-back-top-inner {
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 0.125rem;
  -webkit-box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.2);
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.ivu-back-top-inner:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.ivu-back-top i {
  color: black;
  font-size: 1rem;
  padding: 0.2rem;
}
.top i {
  font-size: 0.5rem;
}
</style>