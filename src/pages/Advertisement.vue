<template>
  <section class="advertisement">
    <img src="../assets/images/advertisement.png">
    <el-button type="info" class="info" @click="skip">
      <span id="time">{{time}}&nbsp;</span>
      秒跳过
    </el-button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      time: 5
    };
  },
  created() {
    // console.log(this.time);
    var timer = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        clearInterval(timer);
        this.$router.push({ name: "Home" });
        return timer;
      }
    }, 1000);
  },
  methods: {
    skip() {
      // clearInterval(timer);
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.advertisement {
  width: 100%;
  height: 100%;
  position: relative;
}
.advertisement img {
  width: 100%;
  height: 100%;
}
.info {
  position: absolute;
  bottom: 1rem;
  right: 0.3125rem;
  border-radius: 0.625rem;
  opacity: 0.6;
}
</style>
