<template>
  <div class="star" @click="starNumber">
    <span v-for="item in itemClass" :class="item" class="star__item"></span>
  </div>
</template>
<script type="text/javascript">
const Integer = "on";
const Helf = "helf";
const Off = "off";
const Length = 5;
export default {
  props: {
    score: {
      type: Number
    }
  },
  computed: {
    itemClass() {
      let result = [];
      // 得到整数或者4.5之类是数字
      let score = Math.floor(this.score * 2) / 2;
      // 得到非整数
      let helf = score % 1 !== 0;
      // 得到整数
      let integer = Math.floor(score);
      // 循环得到有多少个
      for (let i = 0; i < integer; i++) {
        result.push(Integer);
      };
      if (helf) {
        result.push(Helf);
      }
      while (result.length < Length) {
        result.push(Off);
      }
      return result;
    }
  },
  methods: {
    starNumber() {
      console.log(this.score)
    }
  }
}

</script>
<style lang="less">
.star {
  font-size: 0;
  .star__item {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  .on {
    background: url(star48_on@2x.png) no-repeat;
    background-size: 16px 16px;
  }
  .helf {
    background: url(star48_half@2x.png) no-repeat;
    background-size: 16px 16px;
  }
  .off {
    background: url(star48_off@2x.png) no-repeat;
    background-size: 16px 16px;
  }
}

</style>
