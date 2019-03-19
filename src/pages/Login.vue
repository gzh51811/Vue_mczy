<template>
  <div class="login">
    <HeadNavigation></HeadNavigation>
    <div class="login-container">
      <div class="item">
        <el-input placeholder="请输入用户名" v-model="username" class="item-input">
          <template slot="prepend">
            <i class="iconfont user icon-user"></i>
          </template>
        </el-input>
      </div>
      <div class="item">
        <el-input placeholder="请输入密码" v-model="password" class="item-input" type="password">
          <template slot="prepend">
            <i class="iconfont ic-lock icon-ic-lock"></i>
          </template>
        </el-input>
      </div>
      <div class="item verify">
        <el-input placeholder="请输入验证码" v-model="verifyNum" class="item-input">
          <template slot="prepend">
            <i class="iconfont icon-jishufuwu"></i>
          </template>
        </el-input>
        <div id="v_container" ref="verify"></div>
      </div>
      <div class="item" @click.stop="loginVerify()">
        <el-button type="danger">登录</el-button>
      </div>

      <div class="login_reg">
        <a href="javascript:void(0)" class="btn-lnk">忘记密码？</a>|
        <a href="" class="btn-lnk" @click="gotoreg()">立即注册</a>
      </div>
    </div>
    <!-- footer -->
    <div class="footer" :class="{transformY: transformY}">
      <div class="coagent-bt" @click="changeLogin">
        <span>其他方式登录</span>
      </div>
      <div class="coagent-con" :class="{active: active}">
        <ul class="coagent-lists">
          <li>
            <a href="javascript:void(0)">
              <i class="icon icon-1"></i>
              <p>QQ</p>
            </a>
          </li>
          <li>
            <a href="javascript:void(0)">
              <i class="icon icon-2"></i>
              <p>微博</p>
            </a>
          </li>

          <li>
            <a href="javascript:void(0)">
              <i class="icon icon-4"></i>
              <p>支付宝</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>



<script>
import HeadNavigation from "./../components/HeadNavigation.vue";
import "./../js/gVerify.js";
import axios from "axios";
import Vue from "vue";
import MintUI from "mint-ui";
import { MessageBox } from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(MintUI);

export default {
  data() {
    return {
      username: "",
      password: "",
      verifyNum: "",
      active: true,
      transformY: false,
      v_id: "",
      verifyCode: {},
      dialogVisible: false,
      show: false,
      msg: "登录失败"
    };
  },
  components: {
    HeadNavigation
  },
  methods: {
    changeLogin(e) {
      this.active = !this.active;
      this.transformY = !this.transformY;
    },
    //登录验证
    async loginVerify() {
      this.show = false;
      let res = this.verifyCode.validate(this.verifyNum);
      //console.log(res);

      if (res) {
        //发送请求
        var data = await axios.post("http://localhost:4399/api/login", {
          m: "login",
          username: this.username,
          password: this.password
        });

        data = data.data;
        this.msg = data.msg;
      } else {
      }
      

      //登录成功
      if (this.msg == "登录成功") {
        console.log(data);
        //,}
        localStorage.setItem("username", data._username);
        localStorage.setItem("token", data._token);
       
        //调回原来的页面
        if(this.$route.params.from){
            this.$router.push(this.$route.params.from);
        }else{
             //跳转主页
             MessageBox.confirm('登录成功').then(action => {
                        this.$router.push('/home');
                });
            
        }
      }
    },
    //跳转注册页
    gotoreg() {
      this.$router.push({
        path: '/register'
      })
    }
  },
  mounted() {
    //验证码
    this.v_id = this.$refs.verify.getAttribute("id");

    this.verifyCode = new GVerify(this.v_id);
  }
};
</script>



<style lang="scss">
.dialog {
  width: 80%;
}
.el-message-box {
  width: 100%;
  text-align: center;
  transform: translateY(50%);
}
#v_container {
  width: 3.28rem;
  height: 1.013333rem;

  margin-right: 0.133333rem;
}
.verify {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.login-container {
  background: #f2f2f2;
  padding: 3%;
  flex: 1;
  .item {
    height: 1.333333rem;
    margin-bottom: 0.266667rem;
    background: #ffffff;
    border-radius: 0.133333rem;
    .item-input {
      height: 100%;
    }
    .el-input__inner {
      height: 100%;
      border: 0;
    }
    .user,
    .ic-lock,
    .icon-jishufuwu {
      font-size: 0.64rem;
    }
  }
  .el-input-group__prepend {
    border: 0;
    background: #fff;
  }
  .el-button--danger {
    width: 100%;
    height: 1.2rem;
    background: #dc3f7e;
    color: #fff;
    text-align: center;
  }
  .login_reg {
    text-align: center;
    margin-top: 0.266667rem;
    font-size: 0.4rem;
    a {
      color: #dc3f7e;
      font-size: 0.4rem;
    }
  }
}
// footer
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.493333rem;
  .coagent-bt {
    text-align: center;
    height: 100%;
    span {
      color: #666;
      font-size: 0.4rem;
      background: url("./../assets/images/a.png");
      line-height: 1.493333rem;
      background-repeat: no-repeat;
      background-position: right center;
      background-size: auto 90%;
      padding-right: 0.533333rem;
    }
  }
  .coagent-lists {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      a {
        height: 100%;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #999;
        p {
          font-size: 0.333333rem;
          margin-top: 0.266667rem;
        }
        .icon {
          display: block;
          width: 1.226667rem;
          padding: 0.266667rem;
          width: 1.226667rem;
          height: 1.226667rem;
          box-sizing: border-box;
          border-radius: 50%;
          text-align: center;
          background-size: 100%;
          background-repeat: no-repeat;
        }
        .icon-1 {
          background-color: #3496e8;
          background-image: url("./../assets/images/qq.png");
        }
        .icon-2 {
          background-color: #d22c4c;
          background-image: url("./../assets/images/weibo.png");
        }
        .icon-4 {
          background-color: #3496e8;
          background-image: url("./../assets/images/zfb.png");
        }
      }
    }
  }
}
.active {
  display: none;
}
.transformY {
  bottom: 2.4rem;
}
</style>


