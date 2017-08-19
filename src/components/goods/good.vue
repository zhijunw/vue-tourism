<template>
  <div class="goods">
    <div class="goods__list" ref="goodsList">
      <div class="goods__list-content">
        <div class="sliderShow-warrper">
          <slider-show :seller="seller"></slider-show>
        </div>
        <div class="goods_menu">
          <ul>
            <li class="goods__list-li" v-for="item in goods" @click="openDetail(item,$event)">
              <div class="goods__list-pics">
                <!-- 蒙层 -->
                <div class="goods__mosk"></div>
                <img :src="item.pic" class="list-pics__img">
              </div>
              <div class="goods__list-detail">
                <h2 class="goods__list-title">{{item.title}}</h2>
                <p class="goods__list-ptag">{{item.ptag}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 详情 -->
    <goods-detail ref="detail" :selectGoods="selectGoods"></goods-detail>
  </div>
</template>
<script type="text/javascript">
import SliderShow from '../sliderShow/sliderShow.vue'
import GoodsDetail from "../goodsdetail/goodsdetail.vue"
import BScroll from 'better-scroll'
const ERR_OK = 0;
export default {
  props: ["seller"],
  data() {
    return {
      goods: [],
      selectGoods: {}
    }
  },
  components: { sliderShow: SliderShow, goodsDetail: GoodsDetail },
  created() {
    this.$http.get('./api/goods').then((res) => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.goods = res.data;
      };
    })
  },
  updated() {
    this.$nextTick(() => {
      this.__initScrolls();
    });
  },
  computed: {
    // 得到收藏数据
    goodsData() {
      return this.$store.state.selectData
    }
  },
  methods: {
    // 添加滚动事件
    __initScrolls() {
      setTimeout(() => {
        if (!this.goodsList) {
          this.goodsList = new BScroll(this.$refs.goodsList, {
            click: true,
            // 滚动的时候派发一个scroll事件
            probeType: 3
          })
        } else {
          this.goodsList.refresh()
        }
      }, 300)
    },
    // 详情页展示
    openDetail(item, event) {
      if (!event._constructed) {
        return;
      }
      // 调取子组件的方法
      this.$refs.detail.showDetail();
      this.selectGoods = item;

      // 判断当前点击的 数据 是否在store里面有
      let localKey = localStorage.getItem("sel");
      if (JSON.stringify(this.$store.state.selectData).indexOf(JSON.stringify(item)) != -1) {
        // 点击状态
        this.$store.commit("like", "icon-shoucang1")
        this.$store.commit("showLike", true)
      } else {
        // 初始状态
        this.$store.commit("like", "icon-shoucang")
        this.$store.commit("showLike", false)

      }
      if (JSON.stringify(this.$store.state.keepZan).indexOf(JSON.stringify(item)) == -1) {
        this.$store.commit("favourites", "icon-zan")
        this.$store.commit("showZan", false)
      } else {
        this.$store.commit("favourites", "icon-zan1")
        this.$store.commit("showZan", true)
      }
    }
  }
}

</script>
<style lang="less" scoped>
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

// .goods {
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   overflow: hidden;
// }
.goods__list {
  position: absolute;
  top: 64px;
  bottom: 50px;
  z-index: 70;
  overflow: hidden;
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
