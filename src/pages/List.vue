<template>
   <div id="classify">
     <h1>商品分类</h1>
     <div class="main">
       <ul class="main-top">
          <li @click="goto()"><a href="javascript:void(0)">面部护肤</a></li>
          <li @click="goto()"><a href="javascript:void(0)">彩妆用品</a></li>
          <li @click="goto()"><a href="javascript:void(0)">香水用品</a></li>
          <li @click="goto()"><a href="javascript:void(0)">健康美肌</a></li>
       </ul>
       <ul class="main-bottom">
          <li @click="goto()"><a href="javascript:void(0)">纤体美胸</a></li>
          <li @click="goto()"><a href="javascript:void(0)">个人护理</a></li>
          <li @click="goto()"><a href="javascript:void(0)">男士专区</a></li>
          <li @click="goto()"><a href="javascript:void(0)">婴孕护理</a></li>
       </ul>
       </div>
       </div>
</template>
<script>
// import goodslist from './goodslist.vue';
export default {
    methods:{
       goto(){
          this.$router.push('/goodslist?id=1')
       }
    }
}
</script>
<style lang="scss" scoped>
  body,html{
     width: 100%;
     height: 100%;
   }
   #classify{
      width: 100%;
      height: 100%;
      display: flex;
       background: #f2f2f2;
      flex-direction: column;
   }
   #classify h1{
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       font-size: .613333rem;
       height:2.666667rem;
       background: #ed3f7e;
    }
    #classify .main{
       flex: 1;
    }
    .main ul{
       display: flex;
       justify-content:space-around;
       align-items: center;
    }
    .main ul li{
       width: 2.666667rem;
       height:2.666667rem;
       border: .0625rem solid #ed3f7e;
       border-radius: 50%;
       margin-top: 1.333333rem;
       background: #ed3f7e;
       text-align: center;
       line-height:2.666667rem;
       float: left;
    }
     .main ul li a{
       font-size: .426667rem;
       color:#fff;
    }

</style>