<template>
  <div id="goodslist">
    <div class="header">
      <!-- <div class="header-img"><img src="../assets/images/list-logo.jpg" alt=""></div> -->
      <div class="header-bottom">
        <img src="../assets/images/fanhui1.png" @click="list()" alt>
        <div class="title">洁面</div>
        <ul class="icon">
          <li @click="shengxu()" :data="data">
            <img src="../assets/images/shengxu.png" alt>
          </li>
          <li>
            <img src="../assets/images/classify.png" alt>
          </li>
          <li>
            <img src="../assets/images/home.png" @click="home()" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="result">{{goodslist.length}}个商品结果</div>
      <ul class="goods">
        <li v-for="goods in goodslist" :key="goods.id" @click="det(goods.goods_id)">
          <div class="tupian">
            <img :src="goods.product_image" alt>
            <img src="../assets/images/8.png" alt>
          </div>
          <div class="message">
            <h3>
              <i>{{goods.saveprice}}</i>
              <b>{{goods.list_tags}}</b>
              <span>{{goods.name}}</span>
            </h3>
            <p>{{goods.productSize}}</p>
            <div class="time">
              <img src="../assets/images/time.png" alt>
              尚余
              <span>{{goods.timer}}</span>
            </div>
            <div class="price">
              <span>{{xianshudiao(goods.price)}}</span>
              <span>{{xianshudiao(goods.mktprice)}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer" :class="{load:load}">
      <el-table
        v-loading="loading2"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
      ></el-table>
    </div>
  </div>
</template>
<script>
import { formatDate } from "../js/date.js";
import Vue from "vue";
//时间
function Time(time) {
  // console.log(5555)

  var t =
    time * 1 -
    new Date().getTime() +
    60 * 60 * 24 * 17900 * 60 * 60 -
    46480 * 24 * 60 * 60 * 1000;
  t -= 1000;
  // console.log(t);

  // let day,hr,min,sec = 0;
  // 计算时分秒数
  let day = parseInt(t / 1000 / 60 / 60 / 24);
  let hr = parseInt((t / 1000 / 60 / 60) % 24);
  let min = parseInt((t / 1000 / 60) % 60);
  let sec = parseInt((t / 1000) % 60);
  // 个位数前补零
  day = day;
  hr = hr > 9 ? hr : "0" + hr;
  min = min > 9 ? min : "0" + min;
  sec = sec > 9 ? sec : "0" + sec;
  // 控制台打印

  var date = `${day}天 ${hr}小时 ${min}分钟 ${sec}秒`;
  // console.log(date)
  return date;
}

export default {
  data() {
    return {
      data: "asc",
      goodslist: [],
      page: 1,
      length: 10,
      loading: true,
      loading2: true,
      load: true
      // timer:''
    };
  },

  created() {
    //发起ajax请求初始化渲染
    // let { id: id } = this.$route.query;
    this.$axios
      .get("http://localhost:4399/api/goodslist", {
        params: {
          m: "xuanran"
        }
      })
      .then(res => {
        // console.log(res);不能这样写，先别动
        let arr = res.data;

        //倒计时
        arr.map((obj, index) => {
          this.$forceUpdate();
          this.$set(
            // obj,"timer",Time(obj.promotion_end_time-obj.promotion_start_time)
            obj,
            "timer",
            Time(obj.promotion_end_time)
          );
        });
        this.goodslist = arr;
        // })
        // console.log(this.goodslist);
      });
    //  this.shijian;
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
      //  window.addEventListener("goodslist.timer", this.countdown);
    });

    setInterval(() => {
      for (var i in this.goodslist) {
        //  var t=this.goodslist[i].promotion_end_time-this.goodslist[i].promotion_start_time;
        var t =
          this.goodslist[i].promotion_end_time * 1 -
          new Date().getTime() +
          60 * 60 * 24 * 17900 * 60 * 60 -
          46480 * 24 * 60 * 60 * 1000;
        // console.log(t);
        // console.log(this.goodslist[i].promotion_end_time,new Date().getTime())
        t -= 1000;
        // 计算时分秒数
        let day = parseInt(t / 1000 / 60 / 60 / 24);
        let hr = parseInt((t / 1000 / 60 / 60) % 24);
        let min = parseInt((t / 1000 / 60) % 60);
        let sec = parseInt((t / 1000) % 60);
        // 个位数前补零

        day = day;
        hr = hr > 9 ? hr : "0" + hr;
        min = min > 9 ? min : "0" + min;
        sec = sec > 9 ? sec : "0" + sec;
        // // 控制台打印

        var date = `${day}天 ${hr}小时 ${min}分钟 ${sec}秒`;

        // this.$set(this.goodslist,"timer",date);
        this.goodslist[i]["timer"] = date;
        // return date;

        this.$forceUpdate();
      }
    }, 1000);
  },

  methods: {
    //点击跳到详情页
    det(id) {
      // console.log(id);
      this.$router.push("/goods" + "?id=" + id);
    },

    //点击跳到首页
    home() {
      // console.log(id);
      this.$router.push("/home");
    },

    //点击跳到首页
    list() {
      // console.log(id);
      this.$router.push("/list");
    },

    //价格保留一位小数
    xianshudiao(price) {
      //    console.log(price)
      let prices = (price * 1).toFixed(1);
      return prices;
    },

    //排序
    shengxu() {
      //判断属性的值来判断是升序还是降序
      if (this.data == "asc") {
        this.$axios
          .get("http://localhost:4399/api/goodslist", {
            params: {
              m: "paixu"
            }
          })
          .then(res => {
            // console.log(res);
            let arr = res.data;
            // this.goodslist=[];
            this.goodslist = arr;
            // console.log(this.goodslist)
          });
      } else {
        this.$axios
          .get("http://localhost:4399/api/goodslist", {
            params: {
              m: "jiangxu"
            }
          })
          .then(res => {
            // console.log(res);
            let arr = res.data;
            // this.goodslist=[];
            this.goodslist = arr;
            // console.log(this.goodslist)
          });
      }
      //改变属性
      if (this.data == "asc") {
        this.data = "des";
      } else {
        this.data = "asc";
      }
    },

    //懒加载
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    },
    // 获取当前可视范围的高度
    getClientHeight() {
      var clientHeight = 0;
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      } else {
        clientHeight = Math.max(
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
      }
      return clientHeight;
    },

    // 获取文档完整的高度
    getScrollHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      );
    },
    // 滚动事件触发下拉加载
    async onScroll() {
      // console.log(111111)
      if (
        this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() <=
        1
      ) {
        // console.log(this.length)
        this.load = false;
        if (this.loading) {
          let res = await this.$axios
            .get("http://localhost:4399/api/goodslist", {
              params: {
                m: "lanjiazai",
                page: ++this.page,
                length: this.length
              }
            })
            .then(res => {
              // console.log(res)
              let arr = res.data;
              // console.log(arr)
              // console.log(this.goodslist)
              setTimeout(() => {
                for (var i = 0; i < arr.length; i++) {
                  this.goodslist.push(arr[i]);
                }
              }, 2000);
              this.load = true;
            });
          // console.log(res)
        }
      }
    }

    //      countdown (time,len) {
    //   // // 目标日期时间戳
    //   // const end = Date.parse(new Date('2017-12-01'))
    //   // // 当前时间戳
    //   // const now = Date.parse(new Date())
    //   // 相差的毫秒数

    //   // this.timer = date;
    //   //能打印时间，就是不能返到页面上//哪里减
    //   // 一秒后递归

    //   let msec = time;
    //   let that = this;

    // }
  }
};
</script>






<style lang="scss" scoped>
body,
html {
  width: 100%;
  height: 100%;
}
#goodslist {
  width: 100%;
  display: flex;
  flex-direction: column;
}
#goodslist .header {
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
}
.header .header-bottom {
  // width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 1.333333rem;
  background: #ed3f7e;
}
.header .header-bottom img {
  width: 0.613333rem;
  margin-left: 0.613333rem;
}
.title {
  font-size: 0.64rem;
  color: #fff;
}
.header .header-bottom .icon {
  // width:.613333rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
#goodslist .main {
  flex: 1;
  background: #f2f2f2;
  margin-top: 1.333333rem;
}
.main .result {
  width: 100%;
  height: 0.853333rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.266667rem;
  font-size: 0.373333rem;
  background: #f2f2f2;
}
.main .goods {
  display: flex;
  flex-direction: column;
}
.main .goods li {
  margin: 0.170667rem;
  background: #fff;
  display: flex;
  // width: 22rem;
  height: 2.96rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.main .goods .tupian {
  position: relative;
  width: 2.933333rem;
  height: 2.933333rem;
}

.main .goods li img {
  width: 2.933333rem;
  height: 2.933333rem;
}
.main .goods li img:nth-child(2) {
  width: 0.746667rem;
  height: 0.746667rem;
  position: absolute;
  right: 0.026667rem;
  top: 0.026667rem;
}
.message {
  //   width:11.875rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  // height: 1.466667rem;
  padding-left: 0.16rem;
  margin-right: 0.133333rem;
  border-left: 0.013333rem solid #ccc;
}
.message h3 {
  height: 0.933333rem;
  font-size: 0.346667rem;
}
i {
  color: #ed3f7e;
}
b {
  color: #e99f40;
}
.main .goods .message h3 span {
  color: #999;
}
p {
  font-size: 0.373333rem;
  height: 0.586667rem;
  line-height: 0.586667rem;
  color: #ccc;
}
.price span:nth-child(1) {
  font-size: 0.373333rem;
  color: #ed3f7e;
}
.price span:nth-child(2) {
  font-size: 0.346667rem;
  color: #ccc;
  text-decoration: line-through;
}
.main .goods .message .time {
  height: 0.613333rem;
  background: #bf9a5e;
  line-height: 0.613333rem;
  font-size: 0.373333rem;
  color: #fff;
}
.main .goods .message .time img {
  width: 0.48rem;
  height: 0.586667rem;
}
.main .goods .message .price {
  margin-top: 0.24rem;
}
// .top-img{
//     // width: 12.5rem;
//     // height: 12.5rem;
//     position: fixed;
//     right: 0;
//     top: 80%;
// }
.load {
  display: none;
}
</style>