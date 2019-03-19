<template>
  <div class="sasa-header">
    <div class="home-nav c-fix">
      <a href="javascript:void(0)" class="item" title="首页">
        <i class="iconfont icon-fanhui" @click="goback()"></i>
      </a>
      <a class="a-name">{{headNavigation}}</a>
      <a href="javascript:void(0)" class="item" title="首页">
        <i class="iconfont icon-home" @click="gotoHome()"></i>
      </a>
    </div>
  </div>
</template>



<script>
import "./../assets/font_cn2qla3535/iconfont.css";
export default {
  data() {
    return {
      headNavigation: ""
    };
  },
  computed: {
    
  },
  mounted() {
    //console.log(this.$route);
    let navigation = this.$route.name;
    switch (navigation) {
        case "login":
        this.headNavigation = "登录";
        break;
        case "account":
        this.headNavigation = "我的账户";
        break;
        case "register":
        this.headNavigation = "注册";
        break;
        default:
        break;
    }
  },
  methods: {
    gotoHome() {
      this.$router.push('home')
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>



<style lang="scss" scoped>
.sasa-header {
  width: 100%;
  height: 1.36rem;
  overflow: hidden;
  background-color: #ed3f7e;
}
.home-nav {
  margin: 0 auto;
  width: 94%;
  display: flex;
  height: 100%;
  line-height: 1.36rem;
}
.home-nav > a {
  width: 20%;
  font-size: 0.533333rem;
  color: #fff;
  font-style: normal;
}
.home-nav > a:nth-child(1) {
  text-align: left;
}
.home-nav > a:nth-child(3) {
  text-align: right;
}

.home-nav > a.a-name {
  width: 60%;
  text-align: center;
}

.home-nav .item {
  color: white;
  text-align: center;

  box-sizing: content-box;
  color: #fff;
  i {
    font-size: 0.746667rem;
  }
}
</style>