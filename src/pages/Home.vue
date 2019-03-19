
<template>
  <!-- 首页 -->
  <section class="box">
    <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">释放刷新</span>
        <span v-show="topStatus === 'loading'">
          <mt-spinner type="snake"></mt-spinner>
        </span>
      </div>
      <!-- 头部 -->
      <header>
        <!-- <section class="download">
        <img src="../assets/images/downloadapp.jpg">
        </section>-->
        <!-- logo -->
        <section class="sasa_head">
          <section class="home-nav">
            <a href="javascript:void(0)" class="logo" @click="gotohome">
              <img src="../assets/images/sasa_icon.png" title="莎莎网" alt="莎莎网">
            </a>
            <a href="javascript:void(0)" class="search_action fr" style="text-decoration: none;">
              <i class="iconfont icon-sousuo"></i>
            </a>
          </section>
        </section>
        <!-- banner -->
        <section class="banner">
          <section class="swiper-container" v-if="notload">
            <section class="swiper-wrapper">
              <section
                class="swiper-slide"
                v-for="banners in noreversebanner"
                :key="banners.imgurl"
              >
                <img :src="banners.imgurl" class="autoimg">
              </section>
            </section>
            <!-- <section class="swiper-wrapper" v-if="load">
              <section class="swiper-slide" v-for="banners in reversebanner" :key="banners.imgurl">
                <img :src="banners.imgurl" class="autoimg">
              </section>
            </section>-->
            <!-- 如果需要分页器 -->
            <section class="swiper-pagination"></section>
          </section>

          <section class="swiper-container" v-if="load">
            <!-- <section class="swiper-wrapper">
              <section class="swiper-slide" v-for="banners in banner" :key="banners.imgurl">
                <img :src="banners.imgurl" class="autoimg">
              </section>
            </section>-->
            <section class="swiper-wrapper">
              <section class="swiper-slide" v-for="banners in reversebanner" :key="banners.imgurl">
                <img :src="banners.imgurl" class="autoimg">
              </section>
            </section>
            <!-- 如果需要分页器 -->
            <section class="swiper-pagination"></section>
          </section>
        </section>
        <!-- 正品 -->
        <section class="promise_frame">
          <section class="broadcast_name promise_name">香港莎莎 100%正品海淘</section>
          <img src="../assets/images/icon-promise-20181231.png" style="width:100%; height auto;">
        </section>
        <!-- 分类 -->
        <section class="index_four_buttons">
          <section class="index_four_buttons_item">
            <a href="javascript:void(0)">
              <img src="../assets/images/zhisong.png" class="index_four_btn_img">
              <p>香港特快直送</p>
            </a>
          </section>
          <section class="index_four_buttons_item">
            <a href="javascript:void(0)">
              <img src="../assets/images/baoshui.png" class="index_four_btn_img">
              <p>闪电保税</p>
            </a>
          </section>
          <section class="index_four_buttons_item">
            <a href="javascript:void(0)">
              <img src="../assets/images/sale.png" class="index_four_btn_img">
              <p>限时特卖</p>
            </a>
          </section>
          <section class="index_four_buttons_item">
            <a href="javascript:void(0)">
              <img src="../assets/images/pinpai.png" class="index_four_btn_img">
              <p>所有品牌</p>
            </a>
          </section>
        </section>
        <!-- 公告 -->
        <section class="broadcast">
          <section id="broadcast_name">
            公告
            <span>|</span>
          </section>
          <section class="iconfont icon-laba laba"></section>
          <section class="broadcast_content" style="width: 3.533333rem;">
            <section class="swiper-container2">
              <ul class="swiper-wrapper" style="margin-top: 0px;">
                <li
                  class="broadcast_adv cur swiper-slide"
                  style="opacity: 0.8;"
                  v-for="(advertisements) in advertisement"
                  :key="advertisements.time"
                >
                  <a class="broadcast_adv_link" href="javascript:void(0)">
                    <p class="broadcast_adv_title" style="width:3.533333rem">{{advertisements.time}}</p>
                    <p
                      class="broadcast_adv_content"
                      style="width: 3.533333rem;"
                    >{{advertisements.title}}</p>
                  </a>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </header>
      <!-- main1 -->
      <!-- <section class="main1"> -->
      <section class="promo2m" @click="gotogoodlist()">
        <a href="javascript:void(0)">
          <section
            class="promo2mA"
            style="background: url(../../../assets/images/promo1.jpg)no-repeat right .5rem;
    background-size: 2.7rem auto;border-right:.0625rem solid #eee"
          >
            <section class="promo2m_titleA">葆丽美指定产品</section>
            <section class="promo2m_taglineA">送值千元希思黎面膜</section>
            <section class="promo2_go_btn">立即抢购 GO</section>
          </section>
        </a>
        <a href="javascript:void(0)">
          <section
            class="promo2mA"
            style="background: url(../../../assets/images/promo2.jpg)no-repeat right 1.75em;
    background-size: 2.7rem auto; "
          >
            <section class="promo2m_titleA">莎莎Outlet</section>
            <section class="promo2m_taglineA">尾单专区 底价抢好货</section>
            <section class="promo2_go_btn">立即抢购 GO</section>
          </section>
        </a>
        <a href="javascript:void(0)">
          <section
            class="promo2mC"
            style="
          background:url(../../../assets/images/promo3.jpg)no-repeat center 90%;background-size:65% auto;border-left:none"
          >
            <section class="promo2m_titleB">新人福利专场</section>
            <section class="promo2m_taglineB">领888元见面礼</section>
          </section>
        </a>
        <a href="javascript:void(0)">
          <section
            class="promo2mC"
            style="background:url(../../../assets/images/promo4.jpg)no-repeat center 90%;background-size:65% auto;"
          >
            <section class="promo2m_titleB">会员俱乐部</section>
            <section class="promo2m_taglineB">积分抵现计划</section>
          </section>
        </a>
        <a href="javascript:void(0)">
          <section
            class="promo2mC"
            style="background:url(../../../assets/images/promo5.jpg)no-repeat center 90%;background-size:65% auto;"
          >
            <section class="promo2m_titleB">VIP福利场</section>
            <section class="promo2m_taglineB">3月VIP尊享</section>
          </section>
        </a>
      </section>
      <!-- </section> -->
      <!-- 每日必看 -->
      <section class="sasa_mustcheck_head">
        <img src="../assets/images/must_check.png">
      </section>

      <section class="mustcheck" v-if="notload">
        <section style="opacity: 1; display: block;">
          <section
            class="mustcheck_item"
            style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
            v-for="(mustchecks) in  noreversemustcheck"
            :key="mustchecks.goods_id"
          >
            <a href="javascript:void(0)" target="_blank">
              <img class="mustcheck_lg_img" :src="mustchecks.imgurl">
            </a>
            <section class="mustcheck_title">
              <section class="mustcheck_titName">{{mustchecks.titname}}</section>
              <section class="mustcheck_subtitName">{{mustchecks.subtitname}}</section>
              <section class="mustcheck_date">{{mustchecks.title}}</section>
            </section>
          </section>
        </section>
      </section>

      <section class="mustcheck" v-if="load">
        <section style="opacity: 1; display: block;">
          <section
            class="mustcheck_item"
            style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
            v-for="(mustchecks) in  reversemustcheck"
            :key="mustchecks.goods_id"
          >
            <a href="javascript:void(0)" target="_blank">
              <img class="mustcheck_lg_img" :src="mustchecks.imgurl">
            </a>
            <section class="mustcheck_title">
              <section class="mustcheck_titName">{{mustchecks.titname}}</section>
              <section class="mustcheck_subtitName">{{mustchecks.subtitname}}</section>
              <section class="mustcheck_date">{{mustchecks.title}}</section>
            </section>
          </section>
        </section>
      </section>

      <!-- 限时特卖 -->
      <!--  v-for="goodslists in goodslist" :key="goodslists.goods_id" -->
      <section class="limit_lg_head">
        <img src="../assets/images/limitted_offer.png">
        <section
          class="limit_lg_selected_item"
          v-for="goodslists in goodslist"
          :key="goodslists.goods_id"
          @click.stop="goto(goodslists.goods_id)"
        >
          <img class="limit_lg_selected_bkg" :src="goodslists.product_image">
          <div class="limit_lg_selected_new_icon"></div>

          <div class="limit_lg_selected_right">
            <div class="limit_lg_selected_countdown" style="line-height:.6rem">
              剩余
              <!-- goodslists.promotion_end_time -->
              <!-- {{Daojishi}} -->
              <span
                v-if="Date.parse(new Date(deadline)) <= Date.parse(new Date()) && Date.parse(new Date()) < Date.parse(new Date(start))"
              >待开始</span>
              <span v-else-if="Date.parse(new Date())===Date.parse(new Date(start))">已开始</span>
              <span v-else>{{`${day}天${hr}小时${min}分钟${sec}秒`}}</span>
            </div>
            <div class="limit_lg_selected_intro">
              <b class="yew">{{goodslists.list_tags}}</b>
              {{goodslists.brand_name}}&nbsp;{{goodslists.name}}&nbsp;{{goodslists.productSize}}
            </div>
            <div class="limit_lg_selected_price">
              <div class="limit_lg_selected_discount">
                <span class="limit_lg_selected_discount_num">{{goodslists.saveprice}}</span>
                <!-- <span class="limit_lg_selected_discount_sig">折</span> -->
              </div>
              <p>
                <span class="limit_lg_selected_price_cur">￥{{parseInt(goodslists.price).toFixed(0)}}</span>
                <span class="limit_lg_selected_price_old">
                  <del>￥{{parseFloat(goodslists.mktprice).toFixed(0)}}</del>
                </span>
              </p>
            </div>
            <div class="limit_lg_selected_opt">
              <div class="limit_lg_selected_btn limit_lg_selected_btn_enable">
                <span>立即抢购</span>
              </div>
            </div>
          </div>
        </section>

        <div class="limit_lg_more">
          <!--  :data="moreData"    prop="clickme"-->
          <el-button
            v-loading="loading"
            style="width: 100%"
            class="more"
            v-if="ismore"
            v-on:click="more"
          >点我加载更多</el-button>
          <!-- <a href="javascript:void(0)" class="more" v-show="ismore" v-on:click="more">查看更多特卖</a> -->
          <el-button type="danger" disabled :class="{nomore:nomore}" class="dangerbutton">
            <a href="javascript:void(0)" style="text-decoration: none;">没有数据了 o !</a>
          </el-button>
        </div>
      </section>

      <!-- 护肤排行榜 -->
      <section class="ranking_item">
        <div class="ranking_title">护肤排行榜</div>
        <section class="ranking_productlist">
          <section class="swiper-container3">
            <section class="swiper-wrapper">
              <section class="swiper-slide">
                <a
                  href="javascript:void(0)"
                  class="ranking_product"
                  style="text-decoration: none;"
                  v-for="hufulists in hufulist"
                  :key="hufulists.goods_id"
                  @click="goto(hufulists.goods_id)"
                >
                  <div class="ranking_product_img_wrapper">
                    <img :src="hufulists.product_image">
                  </div>
                  <div
                    class="ranking_product_intro"
                  >{{hufulists.brand_name}}&nbsp;{{hufulists.name}}&nbsp;{{hufulists.productSize}}&nbsp;</div>
                  <p class="ranking_product_price">
                    <span
                      class="ranking_product_price_cur"
                    >￥{{parseInt(hufulists.price).toFixed(0)}}</span>
                    <span class="ranking_product_price_old">
                      <del>￥{{parseInt(hufulists.mktprice).toFixed(0)}}</del>
                    </span>
                  </p>
                </a>
              </section>
            </section>
          </section>
        </section>
      </section>

      <!-- 个护排行榜 -->
      <section class="ranking_item">
        <div class="ranking_title">个护排行榜</div>
        <section class="ranking_productlist">
          <section class="swiper-container3">
            <section class="swiper-wrapper">
              <section class="swiper-slide">
                <a
                  href="javascript:void(0)"
                  class="ranking_product"
                  style="text-decoration: none;"
                  v-for="personals in personal"
                  :key="personals.goods_id"
                  @click="goto(personals.goods_id)"
                >
                  <div class="ranking_product_img_wrapper">
                    <img :src="personals.product_image">
                  </div>
                  <div
                    class="ranking_product_intro"
                  >{{personals.brand_name}}&nbsp;{{personals.name}}&nbsp;{{personals.productSize}}&nbsp;</div>
                  <p class="ranking_product_price">
                    <span
                      class="ranking_product_price_cur"
                    >￥{{parseInt(personals.price).toFixed(0)}}</span>
                    <span class="ranking_product_price_old">
                      <del>￥{{parseInt(personals.mktprice).toFixed(0)}}</del>
                    </span>
                  </p>
                </a>
              </section>
            </section>
          </section>
        </section>
      </section>

      <!-- 彩妆排行榜 -->
      <section class="ranking_item">
        <div class="ranking_title">彩妆排行榜</div>
        <section class="ranking_productlist">
          <section class="swiper-container3">
            <section class="swiper-wrapper">
              <section class="swiper-slide">
                <a
                  href="javascript:void(0)"
                  class="ranking_product"
                  style="text-decoration: none;"
                  v-for="caizhuangs in caizhuang"
                  :key="caizhuangs.goods_id"
                  @click="goto(caizhuangs.goods_id)"
                >
                  <div class="ranking_product_img_wrapper">
                    <img :src="caizhuangs.product_image">
                  </div>
                  <div
                    class="ranking_product_intro"
                  >{{caizhuangs.brand_name}}&nbsp;{{caizhuangs.name}}&nbsp;{{caizhuangs.productSize}}&nbsp;</div>
                  <p class="ranking_product_price">
                    <span
                      class="ranking_product_price_cur"
                    >￥{{parseInt(caizhuangs.price).toFixed(0)}}</span>
                    <span class="ranking_product_price_old">
                      <del>￥{{parseInt(caizhuangs.mktprice).toFixed(0)}}</del>
                    </span>
                  </p>
                </a>
              </section>
            </section>
          </section>
        </section>
        <section class="sasafooter full-screen t-c">
          <div class="footercopy">
            <span>
              <p>Copyright © 2019.1.15 Sa Sa dot Com Limited.</p>
              <p style="line-height: 1em;">All Rights Reserved. 版权所有</p>
              <p style="line-height: 1em;">
                <a
                  href="javascript:void(0)"
                  style="color:white;line-height: 2em; text-decoration: none"
                >Privacy Policy. 隐私政策</a>
              </p>
            </span>
          </div>
        </section>
      </section>
      <!-- 底部 -->
      <footer>
        <nav class="lastlist">
          <li class="active" @click="gotohome">
            <i class="iconfont icon-home"></i>
            <span>首页</span>
          </li>
          <li @click="gotogoodlist">
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
    </mt-loadmore>
  </section>
</template>
   

<script>
import "../js/rem.js";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import Vue from "vue";
import Mint from "mint-ui";
Vue.use(Mint);
import { Loadmore } from "mint-ui";
Vue.component(Loadmore.name, Loadmore);

export default {
  data() {
    return {
      notload: true,
      load: false,
      loading: false, //加载更多
      ismore: true, //判断还有没有数据加载,有则可以继续加载，无则显示没有数据
      nomore: true,
      page: 1, // ajax 发起请求限制
      limit: 8,
      day: 0, //商品抢购倒计时
      hr: 0,
      min: 0,
      sec: 0,
      goodslist: [], //存放 商品列表
      hufulist: [],
      personal: [],
      caizhuang: [],
      list: [],
      allLoaded: false,
      topStatus: "",
      moveTranslate: 0,

      //轮播图
      banner: [
        {
          imgurl: "../assets/images/banner1.jpg"
        },
        {
          imgurl: "../assets/images/banner2.jpg"
        },
        {
          imgurl: "../assets/images/banner3.jpg"
        },
        {
          imgurl: "../assets/images/banner4.jpg"
        },
        {
          imgurl: "../assets/images/banner5.jpg"
        }
      ],

      // 广告轮播
      advertisement: [
        {
          time: "保税仓物流公告 2019.03.12",
          title: "国内保税仓海关盘点通知"
        },
        {
          time: "元宵节 2019.02.28",
          title: "购物赢免单得奖名单"
        },
        {
          time: "元宵节 2019.02.20",
          title: "晒单赢好礼得奖名单"
        },
        {
          time: "香港仓物流公告 2019.01.22",
          title: "2019春节假期通知"
        },
        {
          time: "保税仓物流公告 2019.06.23",
          title: "国内保税仓海关盘点通知"
        }
      ],

      // 每日必看
      mustcheck: [
        {
          imgurl: "../assets/images/mustcheck1.jpg",
          titname: "美白淡斑神器",
          subtitname: "OLAY 淡斑小白瓶275元",
          title: "让你美到发光"
        },
        {
          imgurl: "../assets/images/mustcheck2.jpg",
          titname: "敏感肌救星",
          subtitname: "悦木之源菌菇水259 get!",
          title: "舒缓肌肤敏感"
        },
        {
          imgurl: "../assets/images/mustcheck3.jpg",
          titname: "OMG显白口红",
          subtitname: "娇兰亲亲唇膏231元！",
          title: "网红必BUY推荐"
        },
        {
          imgurl: "../assets/images/mustcheck4.jpg",
          titname: "人气时尚彩妆品牌",
          subtitname: "CYBER COLORS",
          title: "控油清爽粉饼98元必抢！"
        }
        // {
        //   imgurl: "../assets/images/mustcheck5.jpg",
        //   titname: "美白淡斑神器",
        //   subtitname: "OLAY 淡斑小白瓶666元",
        //   title: "让你美到发光2"
        // }
      ]
    };
  },
  computed: {
    noreversebanner() {
      return this.banner.reverse();
    },
    reversebanner() {
      return this.banner.reverse();
    },
    noreversemustcheck() {
      return this.mustcheck.reverse();
    },
    reversemustcheck() {
      return this.mustcheck.reverse();
    }
  },

  //组件传参
  props: ["deadline", "start"],

  created() {
    this.$axios
      .get("http://localhost:4399/api/home", {
        params: {
          page: this.page,
          limit: this.limit
        }
      })
      .then(res => {
        // console.log(res);
        let data = res.data;
        // console.log(data);
        this.goodslist = data;
        // console.log(this.goodslist);
      });
    this.$axios.get("http://localhost:4399/api/home", {}).then(res => {
      // console.log(res);
      let data = res.data;
      // console.log(data);
      // this.goodslist = data;
      // console.log(this.goodslist);
      this.hufulist = data.slice(40, 46);
      this.personal = data.slice(50, 56);
      this.caizhuang = data.slice(60, 66);
    });
  },

  mounted() {
    // 轮播图
    let mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
    //广告轮播
    let mySwiper2 = new Swiper(".swiper-container2", {
      direction: "vertical",
      // slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      autoplay: true
    });

    // 排行榜
    let mySwiper3 = new Swiper(".swiper-container3", {
      // slidesPerView: 5,
      slidesOffsetAfter: 400,
      // loop: true,
      // loop: true,
      // loopAdditionalSlides: 3,
      centerInsufficientSlides: true,
      width: 5000
    });

    this.countdown();
  },

  methods: {
    //倒计时 ，因为爬取的数据的时间戳 全部倒计时时间已过，所有设置了一个时间
    countdown: function() {
      const end = Date.parse(new Date("2019-04-20"));
      const now = Date.parse(new Date());
      const msec = end - now;
      let day = parseInt(msec / 1000 / 60 / 60 / 24);
      let hr = parseInt((msec / 1000 / 60 / 60) % 24);
      let min = parseInt((msec / 1000 / 60) % 60);
      let sec = parseInt((msec / 1000) % 60);
      this.day = day;
      this.hr = hr > 9 ? hr : "0" + hr;
      this.min = min > 9 ? min : "0" + min;
      this.sec = sec > 9 ? sec : "0" + sec;
      const that = this;
      setTimeout(function() {
        that.countdown();
      }, 1000);
    },

    //点击加载更多
    more() {
      // console.log(this.page++);
      // console.log(this.limit);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
      this.limit;
      // this.page++;
      this.page++;
      this.$axios
        .get("http://localhost:4399/api/home", {
          params: {
            page: this.page,
            limit: this.limit
          }
        })
        .then(res => {
          // console.log(res);
          let data = res.data;
          // console.log(data);
          // this.goodslist = data;
          // this.goodslist.push(data);
          // console.log(this.goodslist);
          if (data.length) {
            // 研究concat方法
            // this.goodslis = this.goodslist.concat(data);
            // console.log(this.goodslist);
            for (var i = 0; i < data.length; i++) {
              // console.log(data[i]);
              this.goodslist.push(data[i]);
            }
          } else {
            // alert("没有数据了");
            this.ismore = false;
            this.nomore = false;
          }
        });
    },

    handleBottomChange(status) {
      this.bottomStatus = status;
    },

    handleTopChange(status) {
      this.moveTranslate = 1;
      this.topStatus = status;
    },

    loadTop() {
      setTimeout(() => {
        this.$refs.loadmore.onTopLoaded();
        if (this.notload == true && this.load == false) {
          // console.log(1);
          this.notload = false;
          this.load = true;
        } else if (this.notload == false && this.load == true) {
          // console.log(2);
          this.notload = true;
          this.load = false;
        }
        this.$forceUpdate();
      }, 1500);
    },

    //传参给详情页
    goto(id) {
      // console.log(id);
      // params传参，不支持path跳转
      this.$router.push({ name: "goods", query: { id }, params: { id } });
      //   this.$router.push({path:'/goods/'+id})
      //   this.$router.push({'/goods/'+id)
    },

    //跳转到列表页
    gotogoodlist() {
      this.$router.push({ name: "list" });
    },
    // gotogoods(id) {
    //   this.$router.push({ name: "goods", query: { id }, params: { id } });
    // }

    //跳转到首页
    gotohome() {
      this.$router.push({ name: "Home" });
    },

    //跳转到购物车也
    gotocart() {
      this.$router.push({ name: "cart" });
    },

    //跳转到我的中心页面
    gotomy() {
      this.$router.push({ name: "account" });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/home.css";
@import "../assets/iconfont/iconfont.css";
</style>
