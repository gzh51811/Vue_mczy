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
    <main v-for="goods in goodsinfo" :key="goods.goods_id">
      <div class="show_pic swipe" id="J_pt_slider" style="visibility: visible;">
        <!--<div class="" id="page_outer2" title="遮罩层"></div>-->
        <!-- 分享图标弹出层 end -->
        <!-- 商品图片 begin -->
        <ul class="show_piclist swipe-wrap banners J_pic-list" style="width: 1987.19px;">
          <li class="J_pic-item" data-index="0" style="width: 397.438px; left: 0px;">
            <img :src="goods.product_image" style=" width:100%;">
          </li>
        </ul>
        <!-- 商品图片 end -->
        <!-- 商品标签 begin -->
        <!-- 商品标签 end -->
        <span class="new_topbj">
          <!-- 收藏按钮 begin -->
          <a href="###">
            <i class="iconfont icon-xihuan-xianxing"></i>
          </a>
          <!-- 收藏按钮 end -->
          <!-- 分享按钮 begin -->
          <a href="###">
            <i class="iconfont icon-share_fill"></i>
          </a>
          <!-- 分享按钮 end -->
        </span>
      </div>
      <div class="show_money">
        <div class="show_bar">
          <!-- 市场价及折扣 begin -->
          <span class="show_money_other J_change_mktprice">
            <i class="deline">市场价¥{{parseFloat(goods.org_price).toFixed(0)}}</i>
            {{goods.saveprice}}
          </span>
          <!-- 市场价及折扣 end -->
          <b class="show_money_new J_show_money_new">¥{{parseFloat(goods.price).toFixed(0)}}</b>
          <!-- 销售价 -->
          <i class="icon66">香港特快直送</i>
          <i class="icon66">零扣关</i>
          <i class="icon66">包税</i>

          <!-- 会员价 begin -->
          <span class="action-memberprice"></span>
          <!-- 会员价 end -->
        </div>
      </div>
      <div class="show_money">
        <div class="show_bar">
          <p class="show_tit">
            <b class="djbq bonded_words_show">{{goods.list_tags}}</b>
            <b>{{goods.brand_name}}</b>
            {{goods.goods_name}}
            {{goods.productSize}}
          </p>
        </div>
      </div>
      <div class="show_hd">
        <div class="show_bar">
          <!-- 商品促销标签 -->
          <p class="p-show">
            <span class="fr t-l">已优惠</span>
            <b class="show_hddz" style="background-color:#c69a62;color:#ffffff;">直降</b>
          </p>

          <!-- 送赠品 begin -->
          <!-- 送赠品 end -->
          <!-- 订单促销标签 -->
          <p class="p-show">
            <span class="fr t-l">香港特快直送商品满￥144减运费￥45</span>
            <b class="show_hddz" style="background-color:#71D2C3;color:#FFFFFF;">订单促销</b>
          </p>
          <p class="p-show">
            <span class="fr t-l">香港特快直送商品满￥288 免邮</span>
            <b class="show_hddz" style="background-color:#71D2C3;color:#FFFFFF;">订单促销</b>
          </p>
        </div>
      </div>
      <div class="show_class">
        <div class="show_classname">数 量</div>
        <el-input-number v-model="num1" @change="handleChange" :min="1" :max="99"></el-input-number>
      </div>
      <div class="show_money">
        <div class="show_bar">
          <div class="show_classname">评 分</div>
          <!--五角星开始-->
          <div class="wap_pfen">
            <div class="wap_pfen_zhen">
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
            </div>
            <div class="per-ping">(999+人评价)</div>
          </div>
        </div>
      </div>
      <div class="ruleWrap">
        <ul class="dispatching" id="J-dispatching">
          <li>
            <div class="one">配送</div>
            <div class="two">香港发货，香港直送时间为3-10个工作天</div>
          </li>
          <li>
            <div class="one">运费</div>
            <div class="two pro-rule">
              <span id="J-rule1" class="pulldown js-rule">满￥288免运费</span>
            </div>
            <i class="iconfont show_jtright icon-jiantouyou"></i>
          </li>
          <li>
            <div class="one">税费</div>
            <div class="two pro-rule">
              <font style="color:#EC3E7C;">本商品包税，无需再额外缴纳。</font>
              如有疑问，请联系客服咨询。
            </div>
          </li>
          <li>
            <div class="one">服务</div>
            <div class="two service">
              <span class="icon67">30日退换保证</span>
              <span class="icon67">正品保障</span>
              <span class="icon67">价格承诺</span>
            </div>
            <i class="iconfont show_jtright icon-jiantouyou"></i>
          </li>
        </ul>
      </div>
      <div class="show_cli">
        <!-- 商品详情二级页面 begin -->
        <ul class="show_cliul">
          <li class="show_cliulli">
            <a href="###">
              <b>商品参数</b>
              <i class="iconfont icon-jiantouyou show_jtright"></i>
            </a>
          </li>
          <li class="show_cliulli">
            <a href="###">
              <b>商品详情</b>
              <i class="iconfont icon-jiantouyou show_jtright"></i>
            </a>
          </li>
          <li class="show_cliulli">
            <a href="###">
              <b>用户评价</b>
              <i class="iconfont icon-jiantouyou show_jtright"></i>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <footer v-for="goods in goodsinfo" :key="goods.goods_id+1">
      <div class="show_foot_gwc">
        <div
          id="J_cart_box"
          style="display:block;position:absolute;bottom:20px;left:20px; width:30px;height:30px;"
        ></div>
        <i class="iconfont icon-caigou-xianxing"></i>
        <i class="show_foot_Already" id="J_product_cartnum">0</i>
      </div>
      <span class="show_red">
        <b class="font_money J_cart_price">¥{{parseFloat(goods.price).toFixed(0)}}</b>
      </span>
      <span id="show_addcart">
        <a href="###" class="show_addgwc" id="J_buy_btn" @click="add2cart">加入购物车</a>
        <!-- 加入购物车按钮 -->
      </span>
    </footer>
  </div>
</template>

<script>
import "./../assets/font_17z3eh9wblg/iconfont.css";
export default {
  data() {
    return {
      num1: 1,
      goodsinfo: []
    };
  },
  watch: {
    $route(to, from) {
      // console.log("watch:", to, from);
      this.getData();
    }
  },
  computed: {},
  methods: {
    handleChange(value) {
      console.log(value);
    },
    async getData() {
      let { id: id } = this.$route.query;

      this.$axios
        .get("http://localhost:4399/api/goods", {
          params: {
            id
          }
        })
        .then(res => {
          // console.log(res);
          let arr = res.data;
          this.goodsinfo = arr;

          console.log(this.goodsinfo);
        });
    }
  },
  add2cart() {
    let res = this.goodsinfo;
    let { id: id } = this.$route.query;

    // 获取购物车商品信息
    let currentGoods = this.$store.state.cartlist.filter(
      item => item.goods_id === goods_id
    )[0];

    // 判断当前商品是否添加过到购物车
    if (currentGoods) {
      // 已添加：数量+1
      this.$store.commit("changeQty", { goods_id, qty: currentGoods.qty + 1 });
    } else {
      // 未添加过：添加商品
      this.$store.commit("addCartList", {
        goods_pic_url,
        goods_title,
        oprice,
        sprice,
        goods_id,
        qty: 1
      });
    }
  },
  mounted() {
    this.getData();
  }
};
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
i {
  font-style: normal;
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
    .show_pic {
      width: 100%;
      margin: auto;
      position: relative;
      overflow: hidden;
      min-height: 3.333333 * 2rem;

      .swipe {
        overflow: hidden;
        position: relative;
        .swipe-wrap {
          position: relative;
          z-index: 5;
          .swipe-wrap > li {
            float: left;
            width: 100%;
            position: relative;
          }
        }
      }
      .new_topbj {
        position: absolute;
        top: 0.133333 * 2rem;
        right: 0.133333 * 2rem;
        font-size: 0.44 * 2rem;
        z-index: 10;
        a {
          color: #404042;
          text-decoration: none;
          .iconfont {
            font-size: 0.666667rem;
          }
          .icon-xihuan-xianxing {
            color: #dc3d7e;
            margin-right: 0.066667 * 2rem;
          }
          .icon-share_fill {
            color: #565d67;
            margin-left: 0.133333 * 2rem;
          }
        }
      }
    }
    .show_money {
      width: 100%;
      margin: auto;
      padding: 0.133333 * 2rem 0px;
      overflow: hidden;
      border-bottom: 1px solid #c0c1c3;
      color: #565e67;
      .show_bar {
        width: 94%;
        margin: auto;
        overflow: hidden;
        position: relative;
        padding-bottom: 0.28 * 2rem;
        .show_money_other {
          font-size: 1em;
          color: #cd9b6a;
          position: absolute;
          right: 0;
          bottom: 0;
          .deline {
            text-decoration: line-through;
            color: #a1a2a4;
            margin-right: 0.133333 * 2rem;
            font-size: 0.213333rem;
          }
        }
        .show_money_new {
          color: #ed3d7d;
          font-size: 0.32 * 2rem;
          line-height: 1em;
          float: left;
          white-space: nowrap;
        }
        .icon66 {
          font-size: 0.186667 * 2rem;
          color: #fff;
          background: #ec3e7c;
          margin-left: 0.133333rem;
          display: inline-block;
          border-radius: 2px;
          padding: 0 0.106667 * 2rem;
          float: left;
        }
        .show_tit {
          width: 100%;
          color: #565d67;
          font-size: 0.186667 * 2rem;
          text-align: left;
          text-indent: 0px;
          .djbq {
            color: #e99f40;
            font-size: 0.186667 * 2rem;
          }
        }
        p {
          clear: both;
          margin-bottom: 0.066667 * 2rem;
          overflow: hidden;
          line-height: 0.266667 * 2rem /*详情页标签活动行距*/;
        }
        .show_classname {
          width: 18%;
          text-align: left;
          float: left;
          font-size: 0.213333 * 2rem;
          margin-top: 0.053333 * 2rem;
        }
        .wap_pfen {
          position: relative;
          float: left;
          height: 0.293333 * 2rem;
          color: #ccc;
          .wap_pfen_zhen {
            position: absolute;
            top: 0.04 * 2rem;
            left: 0px;
            padding: 0px;
            margin: 0px;
            color: #cc9964;
            overflow: hidden;
            white-space: nowrap;
          }
          .per-ping {
            position: absolute;
            top: 0.053333 * 2rem;
            left: 1.4 * 2rem;
            color: #999;
            width: 1.2 * 2rem;
          }
        }
      }
    }
    .show_hd {
      width: 100%;
      padding: 0.2 * 2rem 0px;
      line-height: 0.266667 * 2rem;
      font-size: 0.16 * 2rem;
      color: #555d68;
      position: relative /*弹出赠品*/;
      .show_bar {
        width: 94%;
        margin: auto;
        overflow: hidden;
        position: relative;
        padding-bottom: 0.28 * 2rem;
        p {
          clear: both;
          margin-bottom: 0.066667 * 2rem;
          overflow: hidden;
          line-height: 0.266667 * 2rem /*详情页标签活动行距*/;
          .fr {
            width: 75%;
            display: inline-block;
          }
          .t-l {
            text-align: left;
          }

          .fr {
            float: right;
          }
          b {
            border-radius: 0.04 * 2rem;
            padding: 0.026667 * 2rem 0.066667 * 2rem;
          }
        }
      }
    }
    .show_class {
      border: 10px solid #f2f2f2;
      border-width: 0.133333 * 2rem 0px;
      font-size: 0.213333 * 2rem;
      line-height: 40px;
      padding: 0.133333 * 2rem 0px;
      padding-left: 0.2 * 2rem;
      color: #565c68;
      .show_classname {
        width: 18%;
        text-align: left;
        float: left;
        margin-top: 0.053333 * 2rem;
      }
    }
    .ruleWrap {
      border-top: 0.2 * 2rem solid #f2f2f2;
      .dispatching {
        font-size: 0.213333 * 2rem;
        color: #333;
        width: 92%;
        margin: 0 4%;
        float: left;
        li > div {
          display: inline-block;
          float: left;
        }
        li {
          float: left;
          width: 100%;
          line-height: 0.24 * 2rem;
          position: relative;
          .show_jtright {
            font-size: 0.186667 * 2rem;
            float: right;
            padding-right: 0.133333 * 2rem;
            color: #818286;
          }
          .one {
            width: 20%;
            max-width: 3.2em;
            letter-spacing: 0.2em;
            color: #959595;
            padding: 0.12 * 2rem 0;
          }
          .two {
            width: 72%;
            padding: 0.12 * 2rem 0;
            padding-right: 8%;
            .icon67:before {
              content: "";
              width: 0.186667 * 2rem;
              height: 0.186667 * 2rem;
              display: inline-block;
              background: url(./../assets/correct.png) center center no-repeat;
              overflow: hidden;
              margin-right: 0.04 * 2rem;
              margin-bottom: -0.026667 * 2rem;
              background-size: 100%;
            }
          }
        }
      }
    }
    .show_cli {
      width: 100%;
      background: #fff;
      padding: 0.133333 * 2rem 0 1.066667 * 2rem 0;
      overflow: hidden;
      .show_cliul {
        width: 100%;
        background: #fff;
        border-bottom: 1px solid #c0c1c3;
        .show_cliulli {
          height: 0.6 * 2rem;
          line-height: 0.6 * 2rem;
          border-top: 1px solid #c0c1c3;
          text-indent: 0.133333 * 2rem;
          color: #555e67;
          font-size: 0.213333 * 2rem;
          a {
            display: block;
            color: #565e67;
            .show_jtright {
              font-size: 0.213333 * 2rem;
              float: right;
              padding-right: 0.266667 * 2rem;
              color: #818286;
            }
          }
        }
      }
    }
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