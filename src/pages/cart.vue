<template>
  <div id="ydd">
    <header>
      <ul>
        <li>
          <i class="iconfont icon-left" @click="tui()"></i>
        </li>
        <li>购物车</li>
        <li>
          <i class="iconfont icon-home" @click="zhuye()"></i>
        </li>
      </ul>
    </header>
    <main>
      <div class="content">
        <div class="c1">
          <dl class="ui-cart-taxfree-tip">
            <dt>保税仓直送商品结帐提示</dt>
            <dd>1. 保税仓直送商品不可与香港直送商品同时结帐;</dd>
            <dd>2. 保税仓直送商品每张订单总金额不可超过 ¥5000。</dd>
          </dl>
        </div>

        <ul>
          <div class="ui-cart-table-title">
            <label>
              <input type="checkbox" v-model="checkAll" class="allxz">国内保税仓
            </label>
          </div>
          <img
            src="./../assets/empty_cart.png"
            alt
            style="width:100%;display:block;"
            v-show="goodslist.length<=0"
          >
          <span
            style="display:block;width:100%;text-align:center;background:#fff;font-size:19px;line-height:80px;color:#ccc"
            v-show="goodslist.length<=0"
          >别让你的心意空空如也~</span>

          <li v-for="(goods,idx) in goodslist" :key="goods.goods_id">
            <label>
              <input
                type="checkbox"
                v-model="selected"
                class="xzk"
                :value="idx"
                @click.stop="select(idx)"
              >
            </label>
            <div class="ui-cart-product-price">
              <strong
                class="ui-color-pink J-subtotal"
              >￥{{parseFloat(goods.price*goods.qty).toFixed(2)}}</strong>
            </div>
            <div class="ui-cart-product-imgcont">
              <div class="ui-cart-product-img">
                <a href="javascript:;" target="_blank">
                  <img :src="goods.product_image" alt>
                </a>
              </div>
            </div>
            <div class="ui-cart-product-action">
              <a href="javascript:;" class="J-cart-remove" @click="deletegoods(goods.goods_id,idx)">
                <i class="iconfont icon-empty"></i>
              </a>
            </div>
            <div class="ui-cart-product-info">
              <div class="ui-cart-product-name">
                <a href="javascript:;">{{goods.brand_name}} {{goods.goods_name}}</a>
              </div>
              <div class="ui-cart-product-qty J-qty-cont">
                <el-input-number
                  v-model="goods.qty"
                  @change="handleChange(goods.qty,goods.goods_id)"
                  :min="1"
                  :max="99"
                  size="small"
                ></el-input-number>
              </div>
              <!-- 商品促销 -->
              <ul class="ui-cart-product-promotion J-cart-promotion">
                <li>
                  <i class="tipyelbox" style="background-color:#c69a62;color:#ffffff;">直降</i> 直降活动
                </li>
              </ul>
              <!-- 赠品 -->
              <ul class="ui-cart-product-gift J-cart-goodsgift"></ul>
              <div class="bonded_prompt">商品已包税</div>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <footer>
      <div class="ui-cart-total" id="J_cartTotalCont">
        <div class="ui-cart-total-wp c-fix">
          <dl class="ui-cart-total-main">
            <dt>
              共
              <span class="ui-color-pink" id="J_cartTotalProducts">{{moneytotle}}</span> 件商品
            </dt>
            <dd>
              商品应付金额
              <span class="ui-color-pink" id="J_cartTotalPrices">￥{{qtytotle}}</span>
            </dd>
            <dd></dd>
          </dl>
          <div class="ui-cart-checkout-main">
            <a href="javascript:;" class="ui-cart-checkout-btn" id="J_cartCheckout">结帐</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import "./../assets/font_cn2qla3535/iconfont.css";
export default {
  data() {
    return {
      goodslist: [],
      selected: []
    };
  },
  computed: {
    // computed中的属性为getter&setter
    // 默认为getter
    // checkAll(){
    //     // 返回true:所有的索引值都存在seleted中
    //     // 返回false:只要有一个索引值不在selected中
    // }
    qtytotle() {
      console.log(this.selected);
      let totleqty = 0;
      this.selected.forEach(item => {
        totleqty += this.goodslist[item].qty * this.goodslist[item].price;
        // console.log(this.goodslist[item]);
      });
      return totleqty;
    },
    moneytotle() {
      let totlemoney = 0;
      this.selected.forEach(item => {
        totlemoney += this.goodslist[item].qty;
      });
      return totlemoney;
    },
    checkAll: {
      get() {
        // console.log(this.goodslist);
        return this.goodslist.every((goods, idx) =>
          this.selected.includes(idx)
        );
      },
      set(checked) {
        this.selected = checked ? this.goodslist.map((item, idx) => idx) : [];
      }
    }
  },
  methods: {
    deletegoods(id, idx) {
      this.goodslist.splice(idx, 1);
      this.$axios
        .post("http://localhost:4399/api/cart1", {
          params: {
            id
          }
        })
        .then(res => {});
    },
    select(idx) {
      // 获取idx在数组中的位置
      let index = this.selected.indexOf(idx);
      if (index >= 0) {
        // 如果当前已勾选，则取消勾选
        this.selected.splice(index, 1);
      } else {
        this.selected.push(idx);
      }
    },
    tui() {
      this.$router.go(-1);
    },
    zhuye() {
      this.$router.push("/home");
    },
    handleChange(value, idx) {
      // console.log(value);
      // console.log(idx);
      this.$axios
        .post("http://localhost:4399/api/cart", {
          params: {
            value,
            idx
          }
        })
        .then(res => {});
    }
  },

  created() {
    let { id: id } = this.$route.query;
    this.$axios
      .get("http://localhost:4399/api/cart", {
        params: {
          id
        }
      })
      .then(res => {
        // console.log(res);
        let arr = res.data;
        this.goodslist = arr;
      });
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
#ydd {
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
  .ui-cart-table-title {
    padding-left: 0.253333 * 2rem;
    color: #404041;
    background-color: #f2f2f2;
    height: 0.56 * 2rem;
    line-height: 0.56 * 2rem;
    position: relative;
    font-size: 0.226667 * 2rem;
    input[type="checkbox"] {
      vertical-align: 1px;
      margin-right: 0.133333 * 2rem;
      font-size: 1.6rem;
    }
    :after {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      border-left: 0.053333 * 2rem solid #c69a62;
      height: 100%;
    }
    .el-checkbox {
      color: #606266;
      font-weight: 500;
      font-size: 14px;
      user-select: none;
      margin-right: 5px;
    }
  }
  main {
    flex: 1;
    overflow: auto;
    .content {
      .c1 {
        display: flex;
        height: 1.12 * 2rem;
        background: #ffab2e;
        color: #fff;
        padding: 0.146667 * 2rem 0 0.146667 * 2rem 0.213333 * 2rem;
      }
      ul {
        background: #f2f2f2;
        flex: 1;
        li {
          height: 2.533333 * 2rem;
          // height: 2.773333 * 2rem;
          margin-top: 0.04 * 2rem;
          background: #fff;
          padding: 0.253333 * 2rem;
          border-bottom: 1px solid #ddd;
          position: relative;
          .xzk {
            vertical-align: top;
            font-size: 0.173333 * 2rem;
            float: left;
          }
          .ui-cart-product-price {
            float: right;
            .ui-color-pink {
              color: #ec3e7d !important;
            }
          }
          .ui-cart-product-imgcont {
            float: left;
            overflow: hidden;
            width: 1.493333 * 2rem;
            height: 1.12rem * 2;
            padding: 0 0.186667 * 2rem;
            .ui-cart-product-img {
              width: 100%;
              height: 0;
              padding-top: 100%;
              overflow: hidden;
              position: relative;
              img {
                position: absolute;
                width: 1.12 * 2rem;
                height: 1.12 * 2rem;
                top: 0;
                left: 0;
              }
            }
          }
          .ui-cart-product-action {
            font-size: 0.306667 * 2rem;
            width: 0.306667 * 2rem;
            height: 0.306667 * 2rem;
            text-align: right;
            line-height: 1;
            position: absolute;
            bottom: 0.266667 * 2rem;
            right: 0.266667 * 2rem;
            .iconfont {
              font-size: 0.333333 * 2rem;
            }
          }
          .ui-cart-product-info {
            overflow: hidden;
            padding-right: 0.28 * 2rem;
            .ui-cart-product-name {
              overflow: hidden;
              word-break: break-all;
              a {
                color: #000;
              }
            }
          }

          .ui-cart-product-promotion {
            width: 1.96 * 2rem;
            height: 0.333333 * 2rem;
            margin-top: 0.333333rem;
            font-size: 0.186667 * 2rem;
            li {
              width: 1.96 * 2rem;
              height: 0.333333 * 2rem;
              border-bottom: none;
              padding: 0;
            }
            .tipyelbox {
              background: #ffa41f;
              display: inline-block;
              color: #fff;
              padding: 2px 4px;
              border-radius: 5px;
            }
          }
          .bonded_prompt {
            margin-top: 0.266667rem;
            font-size: 0.2 * 2rem;
            color: #666666;
          }
        }
      }
    }
  }
  footer {
    height: 1.293333 * 2rem;
    .ui-cart-total {
      padding-top: 0.293333 * 2rem;
      .ui-cart-total-wp {
        padding: 0.186667 * 2rem;
        background-color: #fff;
        .ui-cart-total-main {
          text-align: left;
          float: left;
          line-height: 0.253333 * 2rem;
          font-size: 0.213333 * 2rem;
          .ui-color-pink {
            color: #ec3e7d !important;
          }
        }
        .ui-cart-checkout-main {
          overflow: hidden;
          text-align: right;
          .ui-cart-checkout-btn {
            position: absolute;
            right: 0.133333 * 3rem;
            display: inline-block;
            width: 1.68 * 2rem;
            height: 0.56 * 2rem;
            background-color: #ed3f7e;
            line-height: 0.56 * 2rem;
            text-align: center;
            font-size: 0.253333 * 2rem;
            border-radius: 2px;
            color: #fff;
            font-weight: 700;
          }
        }
        .c-fix:after {
          content: "\0020";
          display: block;
          visibility: hidden;
          clear: both;
        }
      }
    }
  }
}
</style>