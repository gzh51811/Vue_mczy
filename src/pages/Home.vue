
<template>
  <!-- 首页 -->
  <section class="box">
    <!-- 头部 -->
    <header>
      <section class="download">
        <img src="../assets/images/downloadapp.jpg">
      </section>
      <!-- logo -->
      <section class="sasa_head">
        <section class="home-nav">
          <a href="javascript:void(0)" class="logo">
            <img src="../assets/images/sasa_icon.png" title="莎莎网" alt="莎莎网">
          </a>
          <a href="javascript:void(0)" class="search_action fr">
            <i class="iconfont icon-sousuo"></i>
          </a>
        </section>
      </section>
      <!-- banner -->
      <section class="banner">
        <section class="swiper-container">
          <section class="swiper-wrapper">
            <section class="swiper-slide" v-for="banners in banner" :key="banners.imgurl">
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
    <section class="promo2m">
      <a href="javascript:void(0)">
        <section
          class="promo2mA"
          style="background: url(../../../assets/images/promo1.jpg)no-repeat right 1.75em;
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
          background:url(../../../assets/images/promo3.jpg)no-repeat center 54px;background-size:65% auto;border-left:none"
        >
          <section class="promo2m_titleB">新人福利专场</section>
          <section class="promo2m_taglineB">领888元见面礼</section>
        </section>
      </a>
      <a href="javascript:void(0)">
        <section
          class="promo2mC"
          style="background:url(../../../assets/images/promo4.jpg)no-repeat center 54px;background-size:65% auto;"
        >
          <section class="promo2m_titleB">会员俱乐部</section>
          <section class="promo2m_taglineB">积分抵现计划</section>
        </section>
      </a>
      <a href="javascript:void(0)">
        <section
          class="promo2mC"
          style="background:url(../../../assets/images/promo5.jpg)no-repeat center 54px;background-size:65% auto;"
        >
          <section class="promo2m_titleB">VIP福利场</section>
          <section class="promo2m_taglineB">3月VIP尊享</section>
        </section>
      </a>
    </section>
    <!-- </section> -->
    <!-- 每日必看 -->
    <div class="sasa_mustcheck_head">
      <img src="../assets/images/must_check.png">
    </div>

    <div class="mustcheck">
      <div style="opacity: 1; display: block;">
        <div
          class="mustcheck_item"
          style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
          v-for="(mustchecks) in  mustcheck"
          :key="mustchecks.title"
        >
          <a href="javascript:void(0)" target="_blank">
            <img class="mustcheck_lg_img" :src="mustchecks.imgurl">
          </a>
          <div class="mustcheck_title">
            <div class="mustcheck_titName">{{mustchecks.titname}}</div>
            <div class="mustcheck_subtitName">{{mustchecks.subtitname}}</div>
            <div class="mustcheck_date">{{mustchecks.title}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 限时特卖 -->
    <div class="limit_lg_head">
      <img src="../assets/images/limitted_offer.png">
    </div>
  </section>
</template>
   

<script>
import "../js/rem.js";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
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
        },
        {
          imgurl: "../assets/images/mustcheck5.jpg",
          titname: "美白淡斑神器",
          subtitname: "OLAY 淡斑小白瓶666元",
          title: "让你美到发光2"
        }
      ]
    };
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
    let mySwiper3 = new Swiper(".swiper-container2", {
      direction: "vertical",
      // slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      autoplay: true
    });
  }
};
</script>

<style scoped>
@import "../assets/css/home.css";
@import "../assets/iconfont/iconfont.css";
</style>
