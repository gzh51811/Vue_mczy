<template>
  <div class="login">
    <HeadNavigation></HeadNavigation>
    <div class="login-container">
      <div class="item">
        <el-input placeholder="请输入用户名" v-model="input1" class="item-input">
          <template slot="prepend">
            <i class="iconfont user icon-user"></i>
          </template>
        </el-input>
      </div>
      <div class="item">
        <el-input placeholder="请输入密码" v-model="input2" class="item-input" type="password">
          <template slot="prepend">
            <i class="iconfont ic-lock icon-ic-lock"></i>
          </template>
        </el-input>
      </div>
      <div class="item">
        <el-input placeholder="请输入验证码" v-model="input3" class="item-input">
          <template slot="prepend" class="aaaaa">
            <i class="iconfont icon-jishufuwu"></i>
          </template>
        </el-input>
      </div>
      <div class="item">
        <el-button type="danger">登录</el-button>
      </div>
      <div class="login_reg">
        <a href="javascript:void(0)" class="btn-lnk js_hidden">忘记密码？</a>|
        <a href="javascript:void(0)" class="btn-lnk">立即注册</a>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="coagent-bt">
        <span>其他方式登录</span>
      </div>
      <div class="coagent-con active" id="J-coagent-con">
        <ul class="coagent-lists">
          <li id="J-qqlogin">
            <a href="/wap/qqlogin-trust_login.html">
              <i class="icon icon-1"></i>
              <p>QQ</p>
            </a>
          </li>
          <li id="J-wblogin">
            <a href="/wap/wblogin-login.html">
              <i class="icon icon-2"></i>
              <p>微博</p>
            </a>
          </li>
         
          <li class="alipay" id="J-alipaylogin">
            <a href="/wap/alipaylogin-login.html">
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
export default {
  data() {
    return {
      input3: "",
      input1: "",
      input2: ""
    };
  },
  components: {
    HeadNavigation
  }
};
</script>



<style lang="scss">
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
            padding-right: .533333rem;
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
                align-items    : center;
                flex-direction: column;
                color: #999;
                p {
                font-size: .333333rem;
                margin-top: .266667rem;
                }
                .icon {
                    display: block;
                    width:1.226667rem;
                    padding: .266667rem;
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
                    background-image: url('./../assets/images/qq.png');
                }
                .icon-2 {
                    
                    background-color: #d22c4c;
                    background-image: url('./../assets/images/weibo.png');
                }
                .icon-4 {
                    
                    background-color: #3496e8;
                    background-image: url('./../assets/images/zfb.png');
                }
            }
        }
    }
}
</style>


