<template>
  <div class="login">
    <HeadNavigation></HeadNavigation>
    <div class="login-container">
      <div class="item">
        <el-input
          placeholder="请输入用户名"
          v-model="username"
          class="item-input"
          autofocus="true"
          @blur="con_username()"
        >
          <template slot="prepend">
            <i class="iconfont user icon-user"></i>
          </template>
        </el-input>
        <el-alert title :type="success" show-icon v-show="showusername"></el-alert>
      </div>
      <div class="item">
        <el-input
          placeholder="请输入密码"
          v-model="password"
          class="item-input"
          type="password"
          @change="con_password()"
        >
          <template slot="prepend">
            <i class="iconfont ic-lock icon-ic-lock"></i>
          </template>
        </el-input>
        <el-alert title :type="passwordsuccess" show-icon v-show="showpassword"></el-alert>
      </div>
      <div class="item">
        <el-input
          placeholder="请确认密码"
          v-model="confirm_password"
          class="item-input"
          type="password"
          @change="con_passwordAgain()"
        >
          <template slot="prepend">
            <i class="iconfont ic-lock icon-ic-lock"></i>
          </template>
        </el-input>
        <el-alert title :type="conpasswordsuccess" show-icon v-show="conshowpassword"></el-alert>
      </div>
      <div class="item verify">
        <el-input placeholder="请输入验证码" v-model="verifyNum" class="item-input">
          <template slot="prepend">
            <i class="iconfont icon-jishufuwu"></i>
          </template>
        </el-input>
        <div id="v_container" ref="verify"></div>
      </div>
      <div class="item" @click.stop="regVerify()">
        <el-button type="danger">注册</el-button>
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
    success: 'success',
      username: "",
      passwordsuccess: 'success',
      conpasswordsuccess: 'success',
      showusername: false,
      showpassword: false,
      conshowpassword: false,
      password: "",
      verifyNum: "",
      confirm_password: '',
      active: true,
      transformY: false,
      v_id: "",
      verifyCode: {},
      dialogVisible: false,
      show: false,
      msg: "注册失败"
    };
  },
  components: {
    HeadNavigation
  },
  methods: {
    //验证用户名是否已注册过
    async con_username() {
        if(this.username.trim()) {
            var data = await axios.post("http://localhost:4399/api/login", {
            m: "confirm_username",
            username: this.username,          
        });

       let {data:res} = data;
         if(res.code == 200) {
            this.showusername = true;
            this.success = 'success';
       }else {
           this.showusername = true;
           this.success = 'error';
       }
    }
        
     
    },
    con_password() {
        if(this.password.trim().length>3) {
            this.showpassword = true;
            this.passwordsuccess = 'success';
        }else {
            this.showpassword = true;
            this.passwordsuccess = 'error';
        }
    },
    //确认密码
    con_passwordAgain() {
        if(this.password == this.confirm_password) {
           
            this.conshowpassword = true;
            this.conpasswordsuccess = 'success';
        }else {
            
            this.conshowpassword = true;
            this.conpasswordsuccess = 'error';
        }
    },
    //注册
    async regVerify() {
        let res = this.verifyCode.validate(this.verifyNum);

        if (res&&this.success=="success"&&this.conpasswordsuccess=="success"&&this.passwordsuccess=="success") {
            
            let data = await axios.post("http://localhost:4399/api/login", {
                m: "register",
                username: this.username,
                password: this.password
            });
            let {data:res} = data;
            if(res.code == 200) {
                // let loginRes = MessageBox({
                // title: "提示",
                // message: "注册成功",
                // showCancelButton: true
                // });

                MessageBox.confirm('注册成功').then(action => {
                        this.$router.push({
                        path: '/login'
                    })
                });
                
            }else {
                let loginRes = MessageBox({
                title: "提示",
                message: "注册失败",
                showCancelButton: true
                });
            }

        }else {
            let loginRes = MessageBox({
                title: "提示",
                message: "请输入正确的信息",
                showCancelButton: true
            });
            
    }
        
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
.el-alert {
  position: absolute;
  right: 0.4rem;
  width: 10%;
  top: 0.266667rem;
}
.el-alert--success,
.el-alert--error {
  background-color: transparent;
}
.el-icon-close:before {
  content: "";
}

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
    position: relative;
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

.active {
  display: none;
}
.transformY {
  bottom: 2.4rem;
}
</style>





