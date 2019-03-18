<template>
  <div id="account">
    <!-- 头部 -->
    <HeadNavigation></HeadNavigation>

    <!--内容  -->
    <div class="full-screen" style="min-height:619px">
      <div class="mem-info">
        <div class="mem-avatar">
          <i class="iconfont user icon-user"></i>
        </div>
        <div class="mem-base">
          <span id="mem_name">{{username}}</span>
          <div class="mem-level">
            <i class="iconfont money icon-money"></i>
            <span>0积分</span>
          </div>
        </div>
        <div class="mem-experience">
          <a @click="exit">
            <i class="iconfont"></i>退出
          </a>
        </div>
      </div>

      <ul class="mem-menu">
        <li v-for="(item,idx) in iconfont_1" :key="idx">
          <a href="javascript:void(0)">
            <i class="iconfont" :class="item.icon"></i>
            {{item.text}}
          </a>
        </li>
      </ul>

      <ul class="mem-menu">
        <li v-for="(item,idx) in iconfont_2" :key="idx">
          <a href="javascript:void(0)">
            <i class="iconfont" :class="item.icon"></i>
            {{item.text}}
          </a>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <footer id="account_footer">
      <p>Copyright © 2000-2019 Sa Sa dot Com Limited.</p>
      <p style="line-height: 1em;">All Rights Reserved. 版权所有</p>
      <p style="line-height: 1em;">
        <a href="javascript:void(0)" style="color:white;line-height: 2em;">Privacy Policy. 隐私政策</a>
      </p>
    </footer>
  </div>
</template>




<script>
//引入rem.js
import "./../js/rem.js";
import "./../assets/font_nh0ryqkzbi/iconfont.css";
import axios from "axios";

import Vue from "vue";
import HeadNavigation from "./../components/HeadNavigation.vue";
import MintUI from "mint-ui";
import { MessageBox } from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);
export default {
  data() {
    return {
      username: "",
      user: {},
      iconfont_1: [
        { icon: "icon-fenlei", text: "我的订单" },
        { icon: "icon-faxian", text: "我的收藏" },
        { icon: "icon-weishiyong", text: "已付款" },
        { icon: "icon-zhuanru", text: "待评价" },
        { icon: "icon-faxianjihuo", text: "我的优惠券" },
        { icon: "icon-bianji", text: "我的评价" },
        { icon: "icon-jichuguanli", text: "我的帮助" },
        { icon: "icon-yishouquan", text: "到货通知" },
        { icon: "icon-peiwangyindao", text: "联系我们" }
      ],
      iconfont_2: [
        { icon: "icon-renjijiaohu", text: "浏览记录" },
        { icon: "icon-shiyongwendang", text: "帮助中心" },
        { icon: "icon-shebeikaifa", text: "门店搜查" },
        { icon: "icon-jishufuwu", text: "在线客服" }
      ]
    };
  },
  components: {
    HeadNavigation
  },
  mounted() {
    this.user.token = localStorage.getItem("token");

    if (this.user.token) {
      //判断本地是否有token
      console.log(this.user.token);
      this.username = localStorage.getItem("username");
      axios.post("http://localhost:4399/api/login", {
        m: "token",
        data: this.user.token
      });
    }
  },
  methods: {
    exit() {
      if (this.user.token) {
        localStorage.removeItem("token");
        //console.log(res)
        localStorage.removeItem("username");
        MessageBox("提示", "退出成功");
        this.user.token = "";
      }
    }
  }
};
</script>



<style  lang="scss">
//内容

.full-screen {
  display: flex;
  flex-direction: column;
  .mem-info {
    display: flex;
    height: 1.733333rem;
    padding: 0.32rem 0.2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #404040;
    .mem-avatar {
      width: 20%;
      i {
        width: 1.733333rem;
        display: block;
        font-size: 0.866667rem;
        height: 1.733333rem;
        color: #c69a62;
        margin-top: 0.533333rem;
      }
    }
    .mem-experience {
      width: 20%;
      height: 100%;
      margin-top: 1.6rem;
      text-align: right;
      a,
      i {
        color: #fff;
      }
    }
    .mem-base {
      flex: 1;
      text-align: left;
      color: #fff;
      display: flex;
      height: 100%;
      flex-direction: column;
      margin-top: 0.4rem;
      > span {
        font-size: 0.4rem;
        margin-bottom: 0.133333rem;
      }
      .mem-point {
        color: #c69a62;
      }
      .mem-level {
        i,
        span {
          color: #c69a62;
        }
      }
    }

    #mem-name {
      font-size: 0.506667rem;
    }
  }
}
.mem-menu {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.4rem;
  background: #fff;
  li {
    padding: 0 4%;
    height: 1.253333rem;
    line-height: 1.253333rem;
    border-bottom: 1px solid #e0e1e0;
    a {
      font-size: 0.4rem;
      color: rgb(51, 51, 51);
      display: block;
      height: 100%;
      i {
        color: #c69a62;
        margin-right: 0.066667rem;
        display: inline-block;
        width: 0.64rem;
        font-size: 0.6rem;
      }
    }
  }
}
#account {
  background: #f2f2f2;
}
#account_footer {
  height: 1.44rem;
  background: #404042;
  color: #fff;
  text-align: center;
}
</style>


