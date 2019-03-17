<template>
   <div id="classify">
     <h1>商品分类</h1>
     <div class="main">
       <ul class="main-top">
          <li @click="goto()"><a href="##">面部护肤</a></li>
          <li @click="goto()"><a href="##">彩妆用品</a></li>
          <li @click="goto()"><a href="##">香水用品</a></li>
          <li @click="goto()"><a href="##">健康美肌</a></li>
       </ul>
       <ul class="main-bottom">
          <li @click="goto()"><a href="##">纤体美胸</a></li>
          <li @click="goto()"><a href="##">个人护理</a></li>
          <li @click="goto()"><a href="##">男士专区</a></li>
          <li @click="goto()"><a href="##">婴孕护理</a></li>
       </ul>
       </div>
       <div class="footer">
          <ul>
             <li><a href="">首页</a></li>
             <li><a href="">分类</a></li>
             <li><a href="">购物车</a></li>
             <li><a href="">我的</a></li>
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
       font-size: 1.5625rem;
       height: 4rem;
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
       width: 3.75rem;
       height:3.75rem;
       border: .0625rem solid #ed3f7e;
       border-radius: 50%;
       margin-top: 3.125rem;
       background: #ed3f7e;
       text-align: center;
       line-height:3.75rem;
       float: left;
    }
     .main ul li a{
       font-size: .75rem;
       color:#fff;
    }
     #classify .footer{
         height: 4rem;
     }
       .footer ul{
       border-top: .0625rem solid #ccc;
       height: 4rem;
       background: #ed3f7e;
       display: flex;
       flex-direction: row;
       justify-content: space-around;
       align-items: center;
    }
    .footer ul li a{
       color: #ccc;
    }

</style>