<template>
  <div class="comments">
    <ul class="comment__menu">
      <li class="comment__list" v-for="item in comments" refs="list">
        <div class="comment__list-pic">
          <img :src="item.avatar" width="40" height="40">
        </div>
        <div class="comment__list-user">
          <p class="comment__list-username">{{item.user}}</p>
          <p class="comment__list-content">{{item.content}}</p>
          <p class="comment__list-date">{{item.date | formatDate}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import bus from "../../../static/eventBus.js"
import { formatDate } from "../../common/js/data.js"
export default {
  props: {
    comments: {
      type: Array
    } 
  },
  data() {
    return {}
  },
  created() {
    bus.$on("getdata", function(msag) {
      console.log(msag)
    })
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy-MM-dd hh:mm');
    }
  }
}

</script>
<style lang="less">
/*1像素边框*/

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

//评论列表
.comments {}

.comment__menu {
  .comment__list {
    position: relative;
    display: flex;
    padding: 15px 0;
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-top: 1px solid rgba(7, 17, 27, 0.1);
    }
    &-pic {
      padding-right: 20px;
      >img {
        border-radius: 50%;
      }
    }
    &-user {
      flex: 1;
      font-size: 14px;
      color: #666;
      line-height: 1.5;
      >p {
        padding-bottom: 10px;
      }
    }
    &-username {
      color: #3c9;
    }
  }
}

</style>
