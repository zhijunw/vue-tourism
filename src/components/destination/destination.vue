<template>
    <div class="des-warrper">
      <div class="destination" ref="destination">
        <!-- 左边 -->
        <div class="left" ref="left">
          <ul class="left__menu">
            <li v-for="(item,index) in destination" class="left__list border-1px" :class="{'active':currentIndex===index}" @click="selectMenu(index,$event)">
              <p class="left__city" :class="{'textcolor':currentIndex===index}">{{item.city}}</p>
              <p class="left__citynum" :class="{'textcolor':currentIndex===index}">{{item.cityNum}}</p>
            </li>
          </ul>
        </div>
        <!-- 右边 -->
        <div class="right" ref="right">
          <div>
            <ul class="right__menu">
              <li class="right__list" v-for="item in destination" ref="menu">
                <h2 class="right__list-title">{{item.city}}</h2>
                <ul ref="list">
                  <li v-for="citys in item.cityMenu" class="right__list-info" @click="selectCity(citys)">
                    <div class="right__list-img">
                      <img :src="citys.img" alt="图片" class="img">
                    </div>
                    <p class="right__list__cityname">{{citys.name}}</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <des-info :infos="keepInfo" ref="desInfo"></des-info>
    </div>
</template>
<script type="text/javascript">
import BScroll from 'better-scroll'
import DesInfo from "../desInfo/desInfo.vue"

const ERR_OK = 0;
export default {
  data() {
    return {
      destination: [],
      listHeight: [],
      scrollY: 0,
      keepInfo: []
    }
  },
  components: { desInfo: DesInfo },
  created() {
    this.$http.get('./api/ratings').then((res) => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.destination = res.data
        this.$nextTick(() => {
          this.initScroll();
          this.calculHeight()
        })
      };
    })
  },
  computed: {
    // 得到滚动的高度的时候的INDEX
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        // 当前高度
        let height1 = this.listHeight[i];
        // 下一个的高度
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          return i;
        }
      }
      return 0
    }
  },
  methods: {
    initScroll() {
      this.scrollLeft = new BScroll(this.$refs.left, {
        click: true,
        probeType: 3
      })
      this.scrollRight = new BScroll(this.$refs.right, {
        click: true,
        probeType: 3
      })
      // 获取到滚动的高度
      this.scrollRight.on("scroll", (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY)
      })
    },
    // 计算高度
    calculHeight() {
      // 得到列表个数
      let list = this.$refs.list;
      let height = 0;
      this.listHeight.push(height)
      for (var i = 0; i < list.length; i++) {
        let item = list[i];
        height += item.clientHeight
        this.listHeight.push(height)
        // console.log(this.listHeight)
        console.log(this.currentInedx)
      }
    },
    // 左边菜单跳转
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      // let listMenu = this.$refs.menu[index]; // this.scrollRight.scrollToElement(listMenu, 500);
      let listMenu = this.$refs.menu;
      let el = listMenu[index];
      console.log(el)
      this.scrollRight.scrollToElement(el, 500);
    },
    selectCity(citys) {
      this.keepInfo = citys
      this.$refs.desInfo.openCityInfo();
    }
  }
}

</script>
<style lang="less" scoped>
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






/*字体*/

.font-size(@f: 12px, @w: #333) {
  font-size: @f;
  color: @w;
}





// .des-warrper{
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   width: 100%;
//   // z-index:89 ;
// }
/*行高*/
.line-height(@h: 12px, @l: 12px) {
  height: @h;
  line-height: @h;
}

.destination {
  position: absolute;
  top: 64px;
  bottom: 50px;
  z-index: 110;
  display: flex;
  width: 100%;
  overflow: hidden;
}
/*左边 */

.left {
  width: 100px;
  background: #f3f5f7;
  &__list {
    position: relative;
    padding: 12px;
    height: 54px;
    box-sizing: border-box;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
    }
  }
  .active {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 2px solid #3c9;
    }
  }
  .textcolor {
    color: #3c9;
  }
  &__city {
    .font-size(14px, #333);
    padding-bottom: 7px;
  }
  &__citynum {
    .font-size(12px, rgb(147, 153, 159));
  }
}

.right {
  flex: 1;
  background: #fff;
  &__list {
    &-title {
      .font-size(14px, rgb(147, 153, 159));
      padding-left: 14px;
      background: #f3f5f7;
      border-left: 2px solid #d9ddd1;
      line-height: 26px;
    }
    &-info {
      position: relative;
      margin: 10px;
      display: inline-block;
      @media only screen and (max-width: 320px) {
        margin: 5px;
      }
    }
    .img {
      width: 100px;
      height: 140px;
      border-radius: 4px;
    }
    &__cityname {
      position: absolute;
      width: 90px;
      height: 130px;
      top: 5px;
      left: 5px;
      padding: 10px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 4px;
      box-sizing: border-box;
      color: #fff;
      font-weight: normal;
      font-size: 14px;
      line-height: 190px;
    }
  }
}

</style>
