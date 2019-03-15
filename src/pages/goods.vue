<template>
  <div id="ydd1">
    <header>
      <ul>
        <li>
          <i class="iconfont icon-left"></i>
        </li>
        <li>商品详情</li>
        <li>
          <i class="iconfont icon-home"></i>
        </li>
      </ul>
    </header>
    <main></main>
    <footer>
      <div class="show_foot_gwc">
        <div
          id="J_cart_box"
          style="display:block;position:absolute;bottom:20px;left:20px; width:30px;height:30px;"
        ></div>
        <i class="iconfont icon-caigou-xianxing"></i>
        <i class="show_foot_Already" id="J_product_cartnum">0</i>
      </div>
      <span class="show_red">
        <b class="font_money J_cart_price">¥12.0</b>
      </span>
      <span id="show_addcart">
        <a href="###" class="show_addgwc" id="J_buy_btn">加入购物车</a>
        <!-- 加入购物车按钮 -->
      </span>
    </footer>
  </div>
</template>

<script>
import "./../assets/font_dkp7fcx0qj6/iconfont.css";
export default {};
</script>
<style lang="scss" scope>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: none;
}
html,
body {
  height: 100%;
}
#ydd1 {
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    height: 0.746667 * 2rem;
    display: flex;
    background: #ed3f7e;
    ul {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      li {
        display: block;
        font-size: 0.266667 * 2rem;
        color: #fff;
        text-align: center;
        .iconfont {
          font-size: 0.666667rem;
        }
      }
      li:nth-child(1) {
        flex: 1;
        align-self: center;
      }
      li:nth-child(2) {
        flex: 4.5;
        align-self: center;
      }
      li:nth-child(3) {
        flex: 1;
        align-self: center;
      }
    }
  }
  main {
    flex: 1;
    overflow: auto;
  }
  footer {
    height: 0.92 * 2rem;
    border-top: 1px solid #ccc;
    .show_foot_gwc {
      width: 0.8 * 2rem;
      height: 0.8 * 2rem;
      text-align: center;
      color: #ee3e7e;
      position: relative;
      float: left;
      position: relative;
      z-index: 500000;
      .iconfont {
        font-size: 0.4 * 2rem;
        position: absolute;
        top: 0.466667rem;
        left: 0.466667rem;
      }
      .show_foot_Already {
        font-size: 12px;
        position: absolute;
        top: 8px;
        left: 10px;
        display: block;
        height: 20px;
        line-height: 20px;
        color: #fff;
        padding: 0px 6px;
        background: #cc1567;
        -moz-border-radius: 20px;
        -webkit-border-radius: 20px;
        border-radius: 20px;
      }
      .lsgwc {
        font-size: 24px;
      }
      .new_copin {
        color: #dc3d7e;
        margin-right: 0.066667 * 2rem;
      }
    }
    .show_red {
      color: #ed3f7e;
      .font_money {
        font-size: 0.333333 * 2rem;
        letter-spacing: -1px;
        line-height: 0.92 * 2rem;
      }
    }
    .show_addgwc {
      height: 0.466667 * 2rem;
      line-height: 0.466667 * 2rem;
      font-size: 0.213333 * 2rem;
      text-align: center;
      color: #fff;
      background: #ee3e7e;
      display: inline-block;
      width: 40%;
      float: right;
      margin-right: 0.2 * 2rem;
      position: relative;
      top: 0.2 * 2rem;
      border-radius: 0.04 * 2rem;
      max-width: 4 * 2rem;
      z-index: 500000;
    }
  }
}
</style>