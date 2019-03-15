
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
            <section class="swiper-slide">Slide 1</section>
            <section class="swiper-slide">Slide 2</section>
            <section class="swiper-slide">Slide 3</section>
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
    <section class="main1">
      <section></section>
    </section>
  </section>
</template>
   

<script>
import "../js/rem.js";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
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
      slidesPerView: 3,
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
