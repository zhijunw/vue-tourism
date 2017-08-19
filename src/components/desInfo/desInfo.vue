<template>
  <transition name="move">
    <div class="city-info" @click="openCityInfo" v-show="show" ref="cityInfo">
      <div class="warrper">
        <div class="close iconfont icon-fanhui1" @click.stop.prevent="close"></div>
        <!-- 标题 -->
        <div class="city-info__title">
          <div class="city-info__img">
            <img :src="infos.bigimg" alt="图片">
            <h2 class="title">{{infos.name}}</h2>
          </div>
          <div class="city-info__guide">
            <h3 class="h2title">旅游攻略</h3>
            <p class="intro">{{infos.intro}}</p>
          </div>
        </div>
        <div class="style"></div>
        <!-- 热门景点 -->
        <div class="city-info__hot">
          <h2 class="h2title">热门景点</h2>
          <div class="city-info-title">
            <ul class="hotmenu">
              <li class="hot-spot" v-for="hot in infos.hotSpot">
                <div class="hot-spot-part">
                  <img :src="hot.img" title="图片" class="img">
                  <p class="spot-name">{{hot.name}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="style"></div>
        <!-- 美食推荐 -->
        <div class="city-info__hot">
          <h2 class="h2title">美食推荐</h2>
          <div class="city-info-title" ref="picWrapper">
            <ul class="hotmenu" ref="ulWidth">
              <li class="hot-spot" v-for="food in infos.foods">
                <div class="hot-spot-part">
                  <img :src="food.img" title="图片" class="img">
                  <p class="spot-name">{{food.name}}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="style"></div>
        <!-- 更多去处 -->
        <div class="goods_menu">
          <h2 class="h2title">去处</h2>
          <ul>
            <li class="goods__list-li" v-for="item in infos.place">
              <div class="goods__list-pics">
                <!-- 蒙层 -->
                <div class="goods__mosk"></div>
                <img :src="item.img" class="list-pics__img">
              </div>
              <div class="goods__list-detail">
                <h2 class="goods__list-title">{{item.name}}</h2>
                <p class="goods__list-ptag">{{item.tag}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
  props: ["infos"],
  data() {
    return {
      show: false,
      abc: 0,
      // infoDetail: []
      listLength: 0
    }
  },
  computed: {
    lengths() {
      let ab = []
      for (var i in this.infos.foods) {
        ab.push(this.infos.foods[i])
      }
      this.listLength = ab.length;
      return this.listLength
    }
  },
  // created() {
  //   this.$nextTick(() => {
  //     this.initScroll();
  //     this.ulWidth();

  //   });
  // },
  updated() {
    this.$nextTick(() => {
      this.ulWidth();
      this.__initScroll();
    });
  },
  methods: {
    close() {
      this.show = false
    },
    openCityInfo() {
      this.show = true
    },
    __initScroll() {
      setTimeout(() => {
        if (!this.scrolls) {
          this.scrolls = new BScroll(this.$refs.cityInfo, {
            click: true,
            probeType: 3
          })
        } else {
          this.scrolls.refresh();
        }
      }, 300)
    },
    ulWidth() {
      if (this.infos.foods) {
        let imgWidth = 175;
        let marginR = 5;
        let widths = this.infos.foods.length * (imgWidth + marginR)
        this.$refs.ulWidth.style.width = widths + 'px';
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
            this.picScroll.refresh();
          }
        })
      }
    }
  }
}

</script>
<style lang="less">
// 字体
.font-size(@f: 12px, @w: #333) {
  font-size: @f;
  color: @w;
}

// 行高
.line-height(@h: 12px, @l: 12px) {
  height: @h;
  line-height: @h;
}

// 1像素边框
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




















/*动画*/

.move-enter,
.move-leave-to {
  transform: translate3d(100%, 0, 0);
  opacity: 0;
}

.move-enter-active,
.move-leave-active {
  transition: all 0.3s linear;
}

.city-info {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 49px;
  right: 0;
  z-index: 120;
  background: #f5f5f5;
  opacity: 1;
  overflow: hidden;
  .close {
    position: absolute;
    top: 10px;
    left: 0;
    padding: 10px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.8);
    z-index: 111;
  }
  &__img {
    position: relative;
    >img {
      width: 100%;
      height: 100%;
    }
  }
  .title {
    position: absolute;
    width: 90%;
    bottom: 30px;
    left: 10px;
    box-sizing: border-box;
    color: #fff;
    font-weight: normal;
    font-size: 30px;
  }
  &__guide {
    position: relative;
    padding: 10px;
    background: #fff;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
    }

    .intro {
      .font-size(14px, #333);
      line-height: 1.5;
    }
  }
  &-title {
    background: #fff;
    width: 100%;
    overflow: hidden;
    padding: 10px;
    .hot-spot {
      width: 175px;
      display: inline-block;
      margin-right: 5px;
      padding-bottom: 10px;
      .img {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 5px 5px 0 0;
      }
    }
    .spot-name {
      background: #f5f5f5;
      text-align: center;
      padding: 10px;
      color: #333;
      font-size: 12px;
    }
  }
  .h2title {
    .font-size(16px, #111);
    line-height: 30px;
    background: #fff;
    padding: 10px;
    &:before {
      display: inline-block;
      content: "";
      margin-right: 10px;
      height: 15px;
      width: 4px;
      background: #3c9;
    }
  }
}

.style {
  width: 100%;
  height: 10px;
}

.goods__list {
  &-li {
    position: relative;
    box-sizing: border-box;
    padding: 5px;
    width: 100%;
  }
  &-pics {
    position: relative;
    background: #333;
    border-radius: 4px;
    width: 100%;
    .list-pics__img {
      width: 100%;
      height: 100%;
      border-radius: 4px;
      border: none;
    }
  }
  &-detail {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    width: 80%;
    text-align: center;
  }
  &-title {
    .font-size(24px, #fff);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
  }
  &-ptag {
    .font-size(16px, #fff);
    margin-top: 8px;
    font-weight: normal;
  }
  .goods__mosk {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    z-index: 2;
  }
}

</style>
