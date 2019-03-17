<template>
  <div id="goodslist">
    <div class="header">
      <!-- <div class="header-img"><img src="../assets/images/list-logo.jpg" alt=""></div> -->
      <div class="header-bottom">
        <img src="../assets/images/fanhui1.png" alt>
        <div class="title">洁面</div>
        <ul class="icon">
          <li @click="shengxu()" :data='data'>
            <img src="../assets/images/shengxu.png" alt>
          </li>
          <li>
            <img src="../assets/images/classify.png" alt>
          </li>
          <li>
            <img src="../assets/images/home.png" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="main">
      <div class="result">{{goodslist.length}}个商品结果</div>
      <ul class="goods" >
        <li v-for="goods in goodslist" :key="goods.id" @click="det(goods.goods_id)">
          <div class="tupian">
            <img :src="goods.product_image" alt>
            <img src="../assets/images/xiaotubiao.png" alt>
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
              <span>{{goods.promotion_start_time}}</span>
            </div>
            <div class="price">
              <span>{{xianshudiao(goods.price)}}</span>
              <span>{{xianshudiao(goods.mktprice)}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer">
       <el-table
    v-loading="loading2"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading">
    </el-table>
    </div>
  </div>
</template>
<script>
export default {
    
  data() {
    return {
        data:'asc',
      goodslist: {},
      page: 1,
      length: 10,
      loading: true,
        loading2: true,
    };
  },

  created() {
      //发起ajax请求初始化渲染
    // let { id: id } = this.$route.query;
    this.$axios.get("http://localhost:4399/api/goodslist", {
        params: {
          m:'xuanran'
        }
      })
      .then(res => {
        // console.log(res);
        let arr = res.data;
        this.goodslist = arr;
        console.log(this.goodslist)
      }); 
  },
   mounted () {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.onScroll)
    })
  },
  methods: {
      //点击跳到详情页
      det(id){
        console.log(id)
        this.$router.push('/goodslist?id='+id);
      },


    //价格保留一位小数
    xianshudiao(price) {
      //    console.log(price)
      let prices = (price * 1).toFixed(1);
      return prices;
    },
    
    //排序
    shengxu(){
        //判断属性的值来判断是升序还是降序
         if(this.data=='asc'){
              this.$axios
      .get("http://localhost:4399/api/goodslist", {
        params: {
          m:'paixu'
        }
      })
      .then(res => {
        console.log(res);
        let arr = res.data;
        // this.goodslist=[];
        this.goodslist=arr;
        // console.log(this.goodslist)
      });
    }
    else{
        this.$axios
      .get("http://localhost:4399/api/goodslist", {
        params: {
          m:'jiangxu'
          
        }
      })
      .then(res => {
        console.log(res);
        let arr = res.data;
        // this.goodslist=[];
        this.goodslist=arr;
        // console.log(this.goodslist)
      });
    }
    //改变属性
     if(this.data=='asc'){
         this.data='des'
     }else{
          this.data='asc'
     }
         
    },

    //懒加载
    getScrollTop () {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      return scrollTop
    },
    // 获取当前可视范围的高度
    getClientHeight () {
      var clientHeight = 0
      if (document.body.clientHeight && document.documentElement.clientHeight) {
        clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
      } else {
        clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
      }
      return clientHeight
    },

    // 获取文档完整的高度
    getScrollHeight () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
    },
    // 滚动事件触发下拉加载
    async onScroll () {
    //   console.log(111111)
      if (this.getScrollHeight() - this.getClientHeight() - this.getScrollTop() < 0) {
        //   console.log(this.length)
          if(this.loading) {
            let res = await this.$axios.get("http://localhost:4399/api/goodslist", {
                        params: {
                            m:'lanjiazai',
                            page: ++this.page,
                            length:this.length
                        }
            }).then(res=>{
                // console.log(res)
                let arr=res.data;
                // console.log(arr)
                // console.log(this.goodslist)
                setTimeout(()=>{
                     for(var i=0;i<arr.length;i++){
                    this.goodslist.push(arr[i]);
                }
                },2000);
               
            });
            // console.log(res)
    
      }
    }
}





    // shijian(times1) {
    //   let times = times1 * 1;
      //   var StatusMinute = "";
      //   console.log(times)
      // if(times){
      //     var times2;
      //     setInterval(()=> {
      //         times--;
      //         // console.log(times)
      //         var day = parseInt(times / 60 /60/60/60/ 60 / 24);
      //         // console.log(day)
      //         var hour = parseInt(times/60/60/60/60%24);
      //         var min = parseInt(times / 60 / 60/60/60%24);

      //         var second = parseInt(times % 60);
      //         times2= day+'天'+hour+'时'+min+'分'+second+'秒';
      //         return times2;
      //         // console.log(times2);
      //         }, 1000);
      //         // console.log(times2)
      //     }
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.125rem;
  background: #ed3f7e;
}
.header .header-bottom img {
  width: 1.4375rem;
  margin-left: 0.625rem;
}
.title {
  font-size: 1.1875rem;
  color: #fff;
}
.header .header-bottom .icon {
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
#goodslist .main {
  flex: 1;
  background: #f2f2f2;
  margin-top: 3.125rem
}
.main .result {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-right: 0.625rem;
  font-size: 0.875rem;
  background: #f2f2f2;
}
.main .goods {
  display: flex;
  flex-direction: column;
}
.main .goods li {
  margin: 0.4rem;
  background: #fff;
  display: flex;
  // width: 22rem;
  height: 7.75rem;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.main .goods .tupian {
  position: relative;
  width: 6.875rem;
  height: 6.875rem;
}

.main .goods li img {
  width: 6.875rem;
  height: 6.875rem;
}
.main .goods li img:nth-child(2) {
  width: 1.75rem;
  height: 1.75rem;
  position: absolute;
  right: 0.0625rem;
  top: 0.0625rem;
}
.message {
  //   width:11.875rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 6.9375rem;
  padding-left: 0.75rem;
  margin-right: 0.625rem;
  border-left: 1px solid #ccc;
}
.message h3 {
  height: 2.1875rem;
  font-size: 0.8125rem;
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
  font-size: 0.875rem;
  height: 1.6em;
  line-height: 1.6em;
  color: #ccc;
}
.price span:nth-child(1) {
  font-size: 0.875rem;
  color: #ed3f7e;
}
.price span:nth-child(2) {
  font-size: 0.75rem;
  color: #ccc;
  text-decoration: line-through;
}
.main .goods .message .time {
  height: 1.4375rem;
  background: #bf9a5e;
  line-height: 1.4375rem;
  font-size: 0.875rem;
  color: #fff;
}
.main .goods .message .time img {
  width: 1.125rem;
  height: 1.375rem;
}
.main .goods .message .price {
  margin-top: 0.625rem;
}
.top-img{
    // width: 12.5rem;
    // height: 12.5rem;
    position: fixed;
    right: 0;
    top: 80%;
}
.top-img img{
      width: 3.125rem;
    height: 3.125rem;
}
</style>