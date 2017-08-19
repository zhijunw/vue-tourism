<template>
  <div class="dailog-warrper">
    <div class="dialog-cover" @click.stop.prevent="closeMyself" v-show="isshow"></div>
    <transition name="drop">
      <div class="dailog" @click.stop.prevent="closeMyself" v-show="isshow">
        <slot ></slot>
      </div>
    </transition>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ["isshow"],
  data() {
    return {}
  },
  methods: {
    closeMyself() {
      this.$emit('on-close')
    }
  }
}

</script>
<style lang="less">
.dailog {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: 150px;
  background: #fff;
  margin: -75px 0 0 -125px;
  line-height: 50px;
  box-shadow: 0 2px 2px 1px #fff;
  z-index: 10;
}

.dialog-cover {
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: .3;
}

.drop-enter-active {
  transition: all .5s ease;
}

.drop-leave-active {
  transition: all .3s ease;
}

.drop-enter {
  transform: translateY(-500px);
}

.drop-leave {
  transform: translateY(-500px);
}

</style>
