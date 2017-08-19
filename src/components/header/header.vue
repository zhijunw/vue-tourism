<template>
  <div class="header-warrper">
    <div class="header">
      <!-- 图片 -->
      <div class="header__logo">
        <img src="http://cfbassets.b0.upaiyun.com/assets/v2/mobile/header_logo@2x-2f184092cdfe3c08265a268418f370f9.png" class="header__img" title="图片">
      </div>
      <!-- 导航折叠 -->
      <div class="header__nav" @click="show">
        <i class="header__nav-btn"></i>
      </div>
    </div>
    <!-- 蒙层 -->
    <transition name="fadeLeft">
      <div class="mosk" v-show="showMosk">
        <!-- 蒙层头部 -->
        <div class="mosk__header">
          <!-- 关闭按钮 -->
          <div class="mosk__header-close">
            <form method="GET" class="from">
              <input type="text" placeholder="国家，城市" name="keyword" autocomplete="off" />
              <a class="search-btn" href="javascript:;">
                <i class="search-icon"></i>
              </a>
            </form>
            <i class="icon" @click="closeMosk"></i>
          </div>
          <!-- 导航列表 -->
          <div class="mosk__header-nav">
            <ul>
              <li class="mosk__header-li border-1px"><a href="">首页</a>
              </li>
              <li class="mosk__header-li border-1px"><a href="">发现</a>
              </li>
              <li class="mosk__header-li border-1px"><a href="">个人</a>
              </li>
              <li class="mosk__header-li border-1px"><a href="">行程</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mosk__footer">
          <!-- 图片 未登录-->
          <div class="mosk__footer-pic" @click="login" v-show="loggedIn">
            <img :src="seller.registLogo" title="图片">
            <p class="mosk__footer-login">登录</p>
          </div>
          <!-- 已登录 -->
          <div class="mosk__footer-pic" v-show="!loggedIn">
            <img :src="seller.registTx" title="图片">
            <p class="mosk__footer-login">欢迎回来，{{seller.acount}}。</p>
            <p class="mosk__footer-login" @click="logout">退出</p>
          </div>
          <div class="mosk__footer-copyright">
            <span class="copyright-text">反馈</span>
            <span class="copyright-text">关于</span>
            <span class="copyright-text">FAQ</span>
          </div>
        </div>
      </div>
    </transition>
    <!-- 登录层 -->
    <transition name="fade-x">
      <login v-show="showLogin" :loginInfo="seller" @closeLogin="closeLogin" @closeL="closeL"></login>
    </transition>
  </div>
</template>
<script type="text/javascript">
import Login from "../login/login.vue"
export default {
  props: ["seller"],
  data() {
    return {
      showMosk: false,
      showLogin: false,
      loggedIn: true
    }
  },
  components: { login: Login },
  methods: {
    // 显示模板
    show() {
      this.showMosk = true;
      let localUser = localStorage.getItem("user");
      if (localUser) {
        this.showLogin = false;
        this.loggedIn = false;
      }
    },
    // 关闭模板
    closeMosk() {
      this.showMosk = false;
    },
    // 登录
    login() {
      this.showLogin = true;
    },
    // 关闭登录，子组件传过来
    closeLogin() {
      this.showLogin = false;
    },
    // 登录成功跳转，子组件传过来
    closeL() {
      this.showLogin = false;
      this.loggedIn = false;
    },
    // 退出登录
    logout() {
      this.loggedIn = !this.loggedIn;
      localStorage.removeItem("user");
    }
  }
}

</script>
<style lang="less">
/*
1像素边框
 */

@media(-webkit-min-device-pixel-ratio:1.5),
(min-device-pixel-ratio:1.5) {
  .border-1px {
    &:after {
      -webkit-transform: scaleY(0.7);
      transform: scaleY(0.7);
    }
  }
}

@media(-webkit-min-device-pixel-ratio:2),
(min-device-pixel-ratio:2) {
  .border-1px {
    &:after {
      -webkit-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }
}











/*
行高
 */

.line-height(@h: 44px, @l: 44px) {
  height: @h;
  line-height: @l;
}











/*
字体
 */

.font-size(@s: 12px, @c: #fff) {
  font-size: @s;
  color: @c;
}

.header {
  position: relative;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  background: url(../../assets/images/bd.png) no-repeat;

  box-sizing: border-box;
  &__logo {
    padding-left: 10px;
  }
  &__img {
    width: 91px;
    height: 35px;
  }
  &__nav-btn {
    display: block;
    width: 40px;
    height: 40px;
    background: url(../../assets/images/sprite.png) no-repeat;
    background-position: -40px 0;
    transform: scale(0.5, 0.5);
  }
}











/*
浮层
 */

.mosk {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 151;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 75%;
  background: #366;
  transform: translate3d(0, 0, 0);
  box-shadow: -1px 0 1px 1px #366;
  opacity: 1;
  &__header {
    flex: 1;
    &-nav {
      width: 100%;
    }
    &-close {
      display: flex;
      .line-height(44px, 44px);
      padding: 28px 16px;
      background: rgba(0, 0, 0, 0.1);
      .from {
        flex: 1;
        position: relative;
        display: flex;
        >input {
          border: none;
          background: #264a4a;
          border-radius: 25px;
          font-size: 12px;
          padding: 10px 10px 10px 40px;
          outline: none;
        }
        .search-btn {
          position: absolute;
          top: 50%;
          text-align: center;
          width: 30px;
          height: 30px;
          left: 10px;
          margin-top: -15px;
          outline: none;
        }
      }
      .icon {
        display: inline-block;
        width: 40px;
        height: 40px;
        background: url(../../assets/images/sprite.png) no-repeat;
        background-position: -80px 0;
        transform: scale(0.5, 0.5);
      }
      .search-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 16px;
        height: 16px;
        margin: -8px 0 0 -8px;
        background: url(../../assets/images/search.png) no-repeat;
      }
    }
    &-li {
      position: relative;
      width: 80%;
      margin: 0 auto;
      text-align: center;
      height: 44px;
      line-height: 44px;
      &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
      >a {
        display: block;
        .font-size(14px, #3c9);
        text-decoration: none;
      }
    }
  }
  &__footer {
    text-align: center;
    padding-bottom: 20px;
    &-pic {
      padding-bottom: 15px;
      >img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }
    }
    &-login {
      font-size: 14px;
      color: rgba(51, 204, 153, 0.4);
      padding-top: 20px;
    }
    .copyright-text {
      font-size: 12px;
      color: #3c9;
      padding-right: 10px;
      border-right: 1px solid rgba(51, 204, 153, 0.4);
      height: 12px;
      display: inline-block;
    }
  }
}











/*
动画
 */

.fadeLeft-enter,
.fadeLeft-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}

.fadeLeft-enter-active,
.fadeLeft-leave-active {
  transition: all 0.5s;
}

.fade-x-enter,
.fade-x-leave-to {
  transform: translate3d(0, 100%, 0);
  opacity: 0;
}

.fade-x-enter-active,
.fade-x-leave-active {
  transition: all 0.5s;
}

</style>
