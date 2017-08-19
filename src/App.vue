<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-warrper border-1px">
        <div class="tab__item">
          <router-link to="/goods" @getComment="getcomment(attr,$event)"><i class="icon iconfont icon-jingxuan1"></i><span>精选</span></router-link>
        </div>
        <div class="tab__item">
          <router-link to="/destination"><i class="icon iconfont icon-mudedi"></i><span>目的地</span></router-link>
        </div>
        <div class="item" @click="addshow">
          <div class="hamburger" id="hamburger-6" :class="{'is-active':active}">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
        <div class="tab__item">
          <router-link to="/shop"><i class="icon iconfont icon-goumai"></i><span>购买</span> </router-link>
        </div>
        <div class="tab__item">
          <router-link to="/person"><i class="icon iconfont icon-wode-copy"></i><span>我的</span></router-link>
        </div>
      </div>
    </div>
    <transition :name=" transitionName">
      <navigation>
        <router-view :seller="seller" class="child-view"></router-view>
      </navigation>
    </transition>
    <transition name="fadeleft">
      <impress v-show="show"></impress>
    </transition>
  </div>
</template>
<script>
import Header from './components/header/header.vue'
import bus from "../static/eventBus.js"
import Impress from "./components/impress/impress.vue"
const ERR_OK = 0
export default {
  data() {
    return {
      seller: [],
      active: false,
      show: false,
      abc: 0,
      transitionName: 'slide-left'
    }
  },
  components: { "v-header": Header, impress: Impress },
  created() {
    this.$http.get('./api/seller').then((res) => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.seller = res.data;
      };
    })
  },
  watch: {
    '$route' (to, from) {
      if (to.path == '/') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
  },
  methods: {
    addshow() {
      this.active = !this.active
      this.show = !this.show
    }
  }
}

</script>
<style lang="less">
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

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.child-view {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 50px;
  right: 0;
  width: 100%;
  height: 100%;
  transition: all .3s linear;
}

.tab {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 60;
  background: #fff;
  &-warrper {
    position: relative;
    display: flex;
    justify-content: space-around;
    height: 50px;
    box-sizing: border-box;
    font-size: 0;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      border-top: 1px solid rgba(7, 17, 27, 0.3);
    }
  }
  .item {
    width: 40px;
    background: #3c9;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 5px 0;
  }
  .hamburger {
    padding: 5px;
  }
  &__item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 0;
    >a {
      display: flex;
      text-decoration: none;
      font-size: 14px;
      color: #4d555d;
      height: 50px;
      justify-content: space-around;
      flex-direction: column;
      font-size: 0;
      span {
        font-size: 12px;
      }
    }
    .icon {
      font-size: 24px;
      padding-top: 5px;
    }
    .active {
      color: #3c9;
    }
    .add-btn {
      width: 38px;
      margin: 5px auto;
      background: #3c9;
      border-radius: 50%;
      height: 38px;
    }
    .icon-jiahao4 {
      color: #fff;
      font-size: 24px;
    }
  }
}

.hamburger .line {
  width: 24px;
  height: 4px;
  background-color: #fff;
  display: block;
  margin: 5px auto;
  transition: all 0.3s ease-in-out;
}

#hamburger-6.is-active {
  transition: all 0.3s ease-in-out;
  transition-delay: 0.6s;
  transform: rotate(45deg);
}

#hamburger-6.is-active .line:nth-child(2) {
  width: 0px;
}

#hamburger-6.is-active .line:nth-child(1),
#hamburger-6.is-active .li ne:nth-child(3) {
  transition-delay: 0.3s;
}

#hamburger-6.is-active .line:nth-child(1) {
  transform: translateY(8px) translateX(0);
}

#hamburger-6.is-active .line:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}

.fadeleft-enter,
.fadeleft-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}

.fadeleft-enter-active,
.fadeleft-leave-active {
  transition: all 0.4s linear;
}

</style>
