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
          <span id="mem_name">明明</span>
          <div class="mem-level">
            <i class="iconfont money icon-money"></i>
            <span>0积分</span>
          </div>
        </div>
        <div class="mem-experience">
          <a href="javascript:void(0)">
            <i class="iconfont"></i>退出
          </a>
        </div>
      </div>

      <ul class="mem-menu">
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont icon-fenlei"></i>我的订单
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>我的优惠券
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>我的站内信
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>我的收藏
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>到货通知
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>我的评价
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>收货地址管理
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>VIP贵宾卡绑定
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="gifticon iconfont icon-yanchurili"></i> 积分中心
          </a>
        </li>
      </ul>

      <ul class="mem-menu">
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>浏览记录
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>帮助中心
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>门店搜查
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="iconfont"></i>在线客服
          </a>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
  <footer>
      <p>Copyright © 2000-2019 Sa Sa dot Com Limited.</p>
      <p style="line-height: 1em;"> All Rights Reserved. 版权所有 </p>
      <p style="line-height: 1em;"> <a href="javascript:void(0)" style="color:white;line-height: 2em;">Privacy Policy. 隐私政策</a></p>
  </footer>
  </div>

  
</template>




<script>
//引入rem.js
import "./../js/rem.js";
import "./../assets/font_nh0ryqkzbi/iconfont.css";


import HeadNavigation from './../components/HeadNavigation.vue';
export default {
    data() {
        return{

        }
    },
    components: {
        HeadNavigation
    }
};
</script>



<style scoped  lang="scss">

//内容
.full-screen {
  display: flex;
  flex-direction: column;
  .mem-info,
  .mem-menu {
  }
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
   margin-bottom: .4rem;
   background: #fff;
    li {
         padding: 0 4%;
        height: 1.253333rem;
        line-height: 1.253333rem;
        border-bottom: 1px solid #e0e1e0;
        a {
            font-size: .4rem;
            color: rgb(51, 51, 51);
            display: block;
            height: 100%;
            i {
                color: #c69a62;
               margin-right: .066667rem;
                display: inline-block;
                width: .64rem;
                font-size: .6rem;
               
            }
        }
    }
}
#account {
    background: #f2f2f2;
}
footer {
    height: 1.44rem;
    background: #404042;
    color: #fff;
    text-align: center;
    
}
</style>


