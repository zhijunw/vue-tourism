<template>
  <div class="dialog-wrap">
    <div class="dialog-cover"></div>
    <div class="login">
      <!-- logo -->
      <div class="login__logo"></div>
      <div class="login__title">
        <span class="line"></span>
        <h2 class="login__title-acount">登录账户</h2>
        <span class="line"></span>
      </div>
      <!-- 登录表单 -->
      <div class="login__from">
        <form method="post">
          <div class="login__info">
            <div class="login__acount">
              <label for="acount"></label>
              <input type="text" v-model="username" name="acount" id="acount" class="acount" placeholder="手机/邮箱" />
            </div>
            <div class="login__password">
              <label for="password">
                <input type="password" v-model="password" name="password" id="password" class="password" placeholder="密码" />
              </label>
            </div>
          </div>
          <p class="error-text" v-show="errorText">{{errorText}}</p>
          <div class="login__submit">
            <a class="btn" @click.stop.prevent="submit" type="button">登录</a>
          </div>
        </form>
      </div>
      <div class="close-login" @click="closeLogin"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["loginInfo"],
  data() {
    return {
      password: "",
      username: "",
      errorText: ""
    }
  },
  methods: {
    closeLogin() {
      this.$emit("closeLogin");
    },
    submit() {
      if (this.username !== this.loginInfo.username && this.password !== this.loginInfo.password) {
        this.errorText = "账号和密码不符";
      } else {
        this.$emit("closeL");
        localStorage.setItem("user", this.username);
        localStorage.setItem("pass", this.password);
      }
    }
  }
}

</script>
<style lang="less" scoped>
.drop-enter-active {
  transition: all .5s ease;
}

.drop-leave-active {
  transition: all .3s ease;
}

.drop-enter {
  transform: translateY(-500px);
}

.drop-leave {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  z-index: 161;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: #333 url(../../assets/images/login-bd.jpg) no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-cover {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 161;
  background: rgba(0, 0, 0, 0.2);
  opacity: 0.2;
}

.login {
  position: relative;
  z-index: 171;
  width: 70%;
  height: 50%;
  padding: 5px;
  &__logo {
    width: 98px;
    height: 98px;
    margin: 0 auto 40px auto;
    background: url(../../assets/images/login-bd2.png) no-repeat;
    background-position: 0 -115px;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &-acount {
      font-size: 16px;
      color: #fff;
      padding: 0 5px;
      font-weight: normal;
      text-shadow: 0 0 1px rgba(255, 255, 255, 0.4);
    }
    .line {
      flex: 1;
      height: 1px;
      background: rgba(255, 255, 255, 0.5);
    }
  }
  &__from {
    border-radius: 4px;
    padding-bottom: 10px;
  }
  &__acount {
    width: 100%;
    box-sizing: border-box;
    .acount {
      border: none;
      outline: none;
      width: 80%;
      padding: 15px 10%;
      border-bottom: 1px solid #e6e6e6;
      margin-top: -1px;
    }
  }
  &__password {
    .password {
      border: none;
      outline: none;
      width: 80%;
      padding: 15px 10%;
    }
  }
  .error-text {
    text-align: center;
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    color: rgb(240, 20, 20);
    height: 24px;
    line-height: 24px;
    border-radius: 4px
  }
  &__submit {
    border: 1px solid #3c9;
    background-color: #3c9;
    border-radius: 2px;
    margin-top: 20px;
    .btn {
      display: block;
      text-align: center;
      width: 100%;
      font-size: 16px;
      line-height: 30px;
      font-weight: normal;
      color: #fff;
      text-shadow: 0 0 1px rgba(255, 255, 255, 0.4);
      outline: none;
      // -webkit-appearance:none;
    }
  }
  .close-login {
    position: absolute;
    top: -20px;
    right: 0;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    background: url(../../assets/images/sprite.png) no-repeat;
    background-position: -80px 0;
    transform: scale(0.5, 0.5);
    transition: all 0.5s;
    &:hover {
      transform: rotate(360deg);
    }
  }
}

</style>
