<template>
  <div class="slide-show" @touchstart="clearRun" @touchend="run">
    <div class="slide-show__img">
      <transition name="slide-trans">
        <img :src="seller.pics[nowIndex]" v-show="show">
      </transition>
      <transition name="slide-trans-old">
        <img :src="seller.pics[nowIndex]" v-show="!show">
      </transition>
    </div>
    <ul class="slide-show__ul">
      <li v-for="(item,index) in seller.pics" class="slide-show__li" @click="goto(index)" :class="{'on':index===nowIndex}">
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['seller'],
  data() {
    return {
      nowIndex: 0,
      inv: 2500,
      show: true
    }
  },
  computed: {
    gotoPrve() {
      if (this.nowIndex === 0) {
        return this.seller.pics.length - 1
      } else {
        return this.nowIndex - 1
      }
    },
    gotoNext() {
      if (this.nowIndex === this.seller.pics.length - 1) {
        return 0
      } else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto(index) {
      this.show = false
      setTimeout(() => {
        this.nowIndex = index;
        this.show = true;
      }, 100)
    },
    run() {
      this.invId = setInterval(() => {
        this.goto(this.gotoNext)
      }, this.inv)
    },
    clearRun() {
      clearInterval(this.invId)
    }
  },
  mounted() {
    this.run()
  }
}

</script>
<style lang="less">
.slide-show {
  position: relative;
  width: 100%;
  // padding: 5px;
  box-sizing: border-box;
  &__img {
    position: relative;
    width: 100%;
    height: 205px;
    overflow: hidden;
    >img {
      width: 100%;
      height: 100%;
    }
  }
  &__ul {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
  }
  &__li {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    margin-left: 10px;
    >a {
      display: block;
      height: 10px;
    }
  }
  .on{
  	background: rgba(51, 187, 142,0.7);
  }
}
.slide-trans-enter-active {
  transition: all .6s;
}
.slide-trans-enter {
  transform: translateX(365px);
}
.slide-trans-old-leave{
  transform: translateX(365px);
}
.slide-trans-old-leave-active {
  transition: all .6s;
}
</style>
