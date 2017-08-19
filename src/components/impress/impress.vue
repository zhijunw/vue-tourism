<template>
  <div class="impress">
    <div class="impress-flex">
      <div class="circle common" @click="getPlane">
        <i class="iconfont icon-biji1 icons"></i>
        <p class="write">做行程</p>
      </div>
      <div class="single common" @click="getJob">
        <p class="ptag common">求职，联系我</p>
        <em></em>
      </div>
      <dailog :isshow="showjob" @on-close="closeDailog('showjob')">
        <p class="ptext">
          <span>tel:13249791010</span>
          <span>email:13249791010@163.com</span>
        </p>
      </dailog>
      <dailog :isshow="showPlane" @on-close="closeDailog('showPlane')">
        <p class="ptext">
          <span>已在加紧开发中</span>
          <em class="loading_one">.</em>
          <em class="loading_two">.</em>
          <em class="loading_there">.</em>
        </p>
      </dailog>
    </div>
  </div>
</template>
<script type="text/javascript">
import Dailog from "../dailog/dailog.vue"
export default {
  data() {
    return {
      showjob: false,
      showPlane: false
    }
  },
  methods: {
    getJob() {
      this.showjob = true
    },
    getPlane() {
      this.showPlane = true
    },
    closeDailog(attr) {
      this[attr] = false
    }
  },
  components: { dailog: Dailog }
}

</script>
<style lang="less">
.impress {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 48px;
  width: 100%;
  background: #3c9;
  z-index: 200;
  .circle {
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;
    margin: 0 auto;
    text-align: center;
    .icons {
      display: block;
      padding: 13px;
      font-size: 48px;
      color: #3c9;
    }
  }
}
.write {
  width: 50px;
  height: 20px;
  font-size: 14px;
  color: #3c9;
  margin: 0 auto;
}

.single {
  flex: 1;
}

.common {}

.ptag {
  font-size: 14px;
  color: #fff;
  line-height: 30px;
  padding: 30px;
}

.ptext {
  color: #3c9;
  font-size: 16px;
  font-weight: normal;
}

.single em {
  width: 90px;
  height: 90px;
  margin: 0 auto;
  background: #3c9 url(http://img04.yesmyimg.com/images/event/2014/11/018403/icon.png) no-repeat center center;
  cursor: pointer;
  display: block;
  position: relative;
}

.single em:after {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 0 1px 2px rgba(255, 255, 255, 0.8);
  top: 50%;
  left: 50%;
  margin-top: -60px;
  margin-left: -60px;
  z-index: 3;
  opacity: 0;
  -webkit-animation: halo 1s 0.5s infinite ease-out;
  -moz-animation: halo 1s 0.5s infinite ease-out;
  animation: halo 1s 0.5s infinite ease-out;
}

.impress-flex {
  display: flex;
  flex-direction: column;
  align-content: ;
  justify-content: center;
  text-align: center; // height: 100%;
  padding: 100px 0;
}

.loading_one {
  animation: fadein 1s linear 0.2s infinite;
}

.loading_two {
  animation: fadein 1s linear 0.6s infinite;
}

.loading_there {
  animation: fadein 1s linear 1s infinite;
}

@keyframes fadein {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes halo {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
  }
}

@-moz-keyframes halo {
  0% {
    opacity: 0;
    -moz-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -moz-transform: scale(1.2);
  }
}

@-ms-keyframes halo {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-o-keyframes halo {
  0% {
    opacity: 0;
    -o-transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -o-transform: scale(1.2);
  }
}

@keyframes halo {
  0% {
    opacity: 0;
    transform: scale(0.1);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: scale(1.2);
  }
}

</style>
