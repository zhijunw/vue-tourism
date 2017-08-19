<template>
  <div class="warrper">
    <div class="person">
      <div class="person__header">
        <div class="person__header-img">
          <img :src="seller.registTx" @click="select">
        </div>
        <div class="person__header-user">
          <p class="person__header-name">{{seller.acount}}</p>
          <div class="person__header-info">
            <p class="person__header-text">
              <i class="iconfont icon-jijin icon"></i>
              <span>旅行基金</span>
            </p>
            <p class="person__header-text">
              <i class="iconfont icon-icon icon"></i>
              <span>代金券</span>
            </p>
            <p class="person__header-text">
              <i class="iconfont icon-dingdan-copy icon"></i>
              <span>订单</span>
            </p>
          </div>
        </div>
      </div>
      <!-- 行程，去处 -->
      <div class="person__tab">
        <router-link :to="{name:'place'}" class="person__tab-item">行程</router-link>
        <router-link :to="{name:'favourite'}" class="person__tab-item">收藏</router-link>
      </div>
      <div class="peroson__router">
        <router-view :selectnum="selectNum"></router-view>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
import bus from "../../../static/eventBus.js"
export default {
  props: ["seller"],
  data() {
    return {
      localselect: [],
      selectNum: 0
    }
  },
  created() {
    this.$nextTick(() => {
      this.select()
    })
  },
  methods: {
    select() {
      this.selectNum = JSON.parse(localStorage.getItem('sel'));
    }
  }
}

</script>
<style lang="less">
.person {
  position: absolute;
  top: 64px;
  bottom: 50px; // z-index: 110;
  width: 100%;
  overflow: hidden;
}

.person__header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%
  }
  &-user {
    flex: 1;
    margin-left: 20px;
  }
  &-name {
    font-size: 16px;
    line-height: 30px;
    color: #111;
    padding: 0 0 5px 20px;
  }
  &-info {
    display: flex;
    justify-content: space-between;
  }
  &-text {
    text-align: center;
    flex: 1;
    border-right: 1px solid #ccf3e6;
  }
  .icon {
    display: block;
    margin-bottom: 5px;
    color: #3c9;
  }
  span {
    font-size: 12px;
    color: #3c9;
  }
}

.person__tab {
  display: flex;
  height: 40px;
  line-height: 40px;
  background: #f5f5f5;
  border-bottom: 1px solid rgba(7, 17, 27, 0.2);
  &-item {
    flex: 1;
    text-align: center;
    font-size: 16px;
    color: #333;
    text-decoration: none;
  }
  .active {
    border-bottom: 2px solid #3c9;
    transition: all 0.5s;
  }
}

</style>
