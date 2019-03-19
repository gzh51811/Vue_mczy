<template>
  <div>
    <h1 class="hh">404</h1>
    <img src="./../assets/timg.jpg" alt style="width:100%;heigth:100%" class="i1">
    <div class="d1" @click="ref()">返回上一页</div>
    <div class="d2" @click="gotoh()">返回首页</div>
  </div>
</template>




<script>
export default {
  methods: {
    ref() {
      this.$router.go(-1);
    },
    gotoh() {
      this.$router.push("/home");
    }
  }
};
</script>


<style lang="scss" scope>
html,
body {
  height: 100%;
  width: 100%;
}
.hh {
  display: block;
  width: 100%;
  height: 0.666667 * 2rem;
  font-size: 0.4 * 3rem;
  line-height: 0.666667 * 2rem;
  text-align: center;
  padding-top: 0.4 * 2rem;
  font-weight: bold;
}
.i1 {
  margin-top: 0.4 * 2rem;
}
.d1 {
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.266667 * 2rem;
  color: #fff;
  margin: 0 auto;
  margin-top: 0.4 * 2rem;
  width: 6rem;
  height: 1.2rem;
  background: pink;
  border-radius: 0.133333 * 2rem;
}
.d2 {
  text-align: center;
  line-height: 1.2rem;
  font-size: 0.266667 * 2rem;
  color: #fff;
  margin: 0 auto;
  margin-top: 0.4 * 2rem;
  width: 6rem;
  height: 1.2rem;
  background: pink;
  border-radius: 0.133333 * 2rem;
}
</style>
