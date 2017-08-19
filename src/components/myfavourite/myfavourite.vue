<template>
  <transition name="fadeleft">
    <div class="myfourite">
      <div class="goods__list">
        <ul>
          <li class="goods__list-li" v-for="item in getCollect ">
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
      <div class="goods__list" v-show="show">
        <h2 class="list__title">
  ╭(╯ε╰)╮去精选里面添加内容吧</h2>
      </div>
       
    </div>
  </transition>
</template>
<script type="text/javascript">
import bus from "../../../static/eventBus.js"
export default {
  props: ["selectnum"],
  data() {
    return {}
  },
  computed: {
    // 得到收藏的数据
    getCollect() {
      if (this.$store.state.selectData) {
        return this.$store.state.selectData;
      }
    },
    show() {
      if (this.getCollect.length == 0) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {}
}

</script>
<style lang="less">
.font-size(@s: 12px, @c: #fff) {
  font-size: @s;
  color: @c;
}

.myfourite {
  position: absolute;
  top: 130px;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 10;
}

.goods__list {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  overflow: auto;
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

.list__title {
  ont-size: 14px;
  color: rgb(210, 210, 210);
  line-height: 30px;
  text-align: center;
  margin-top: 20px;
}

</style>
