<template>
  <div class="footer">
    <div class="footer__favourite common" @click.stop.prevent="addFavourite">
      <!-- <i class="iconfont" :class="[show?'icon-zan1':'icon-zan']"></i> -->
      <i class="iconfont" :class="favrouriteImg"></i>
      <span>{{favrourite}}</span>
    </div>
    <div class="footer__comment common">
      <i class="iconfont icon-pinglun1"></i>
      <span>评论({{count}})</span>
    </div>
    <div class="footer__share common" @click.stop.prevent="collects">
      <i class="iconfont" :class="likeImg"></i>
      <span>{{collect}}</span>
    </div>
    <!-- 蒙版 -->
    <div class="footer__mosk" v-show="mosk">
      <div class="footer__mosk-text">
        {{prompt}}
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import bus from "../../../static/eventBus.js"
export default {
  props: ["count", "select"],
  data() {
    return {
      show: false,
      // hide: false,
      mosk: false,
      localDate: {},
      localArr: [],
      nums: 0
    }
  },
  computed: {
    // 得到图片
    likeImg() {
      return this.$store.state.likeImg
    },
    favrouriteImg() {
      return this.$store.state.favourite
    },
    favrourite() {
      if (this.$store.state.showzan === true) {
        return "已赞"
      } else {
        return "赞"
      }
      return favrourite
    },
    collect() {
      if (this.$store.state.showLike === true) {
        return "已收藏"
      } else {
        return "收藏"
      }
      return collect
    },
    prompt() {
      if (this.$store.state.showMosk === true) {
        return "请在我的收藏里面查看"
      } else {
        return "取消收藏"
      }
      return prompt
    }
  },
  methods: {
    addFavourite() {
      if (this.$store.state.favourite === "icon-zan") {
        this.$store.commit("favourites", "icon-zan1")
        this.$store.commit("showZan", true)
        this.$store.commit("keepZan",this.select)
      } else {
        this.$store.commit("favourites", "icon-zan")
        this.$store.commit("Zan",this.select)
        this.$store.commit("showZan", false)
      }
    },
    collects() {
      // this.hide = !this.hide;
      this.mosk = !this.mosk;
      // 判断是否收藏 然后在传值
      if (this.$store.state.likeImg === "icon-shoucang") {
        this.$store.commit("getSelectDate", this.select);
        this.$store.commit("like", "icon-shoucang1");
        this.$store.commit("showLike", true)
      } else {
        this.$store.commit("likeSelectDate", this.select);
        this.$store.commit("like", "icon-shoucang");
        this.$store.commit("showLike", false)
      }
      localStorage.setItem('sel', 1);
      setTimeout(() => {
        this.mosk = false
      }, 1000)
    },
  }
}

</script>
<style lang="less">
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  height: 48px;
  line-height: 48px;
  width: 100%;
  z-index: 150;
  background: #f5f5f5;
  border-top: 1px solid rgba(7, 17, 27, 0.2);
  .common {
    flex: 1;
    text-align: center;
    color: #3c9;
  }
  .iconfont {
    font-size: 24px;
  }
  &__mosk {
    position: fixed;
    top: 65%;
    left: 30%;
    bottom: 48px;
    text-align: center;
    height: 34px;
    color: #fff;
    background: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    padding: 5px 10px;
    box-sizing: border-box;
    line-height: 22px;
    z-index: -1;
    border-radius: 5px;
  }
}

.on {
  color: #3c9;
}

</style>
