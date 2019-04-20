<template>
  <section class="login-warp">
    <div class="login-container center">
      <div class="inner center">
        <p class="title">欢迎登陆</p>
        <p class="info">
          手机号：
          <el-input  maxlength="11"
                     class="phone"
                     v-model="phone"
                     @blur="login"
                     placeholder="请输入手机号">
          </el-input>
        </p>
        <!--<p class="tip"> 请输入正确的手机号</p>-->
        <p class="info">
          密&nbsp&nbsp&nbsp码：
          <el-input class="pwd"  v-model="pwd" placeholder="请输入密码"></el-input>
        </p>
        <el-button @click="login" class="login-btn" type="success">登录</el-button>
        <p style="text-align: center">如忘记密码请联系管理员</p>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: "Login2",
    data: function () {
      return {
        phone:"",
        pwd:""
      }
    },
    methods:{
      login:function () {
        alert(222)
      },
      checkout:function () {
        let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (!reg.test(phone)) {

        } else {
        }
      }


    }
  }
</script>

<style lang="scss" scoped>

  .login-warp {
    background: url("../assets/img/bg.jpg");
    background-size: cover;
    position: relative;
    height: 100%;
    width: 100%;
  }

  .login-container {
    width: 350px;
    height: 350px;
    border-radius: 10px;
    background: rgba(153, 188, 204, 0.55);
    font-size: 14px;

    .inner {
      width: 80%;
      height: 80%;
      .title {
        text-align: center;
        font-size: 1.5em;
      }

      .info {
        margin-top: 30px;
        font-size: 1.1em;
      }
      .phone {
        width:70%;

      }
      .pwd {
        width:70%;
      }

      .login-btn {
        display: block;
        margin: 50px auto;
        width: 50%;
      }
    }
  }

</style>
