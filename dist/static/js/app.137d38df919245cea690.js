webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Vue__ = __webpack_require__(82);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_Vue__["a" /* default */]);

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(73),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_header_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_destination_destination_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_destination_destination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_destination_destination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shop_shop_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shop_shop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_shop_shop_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_person_person_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_person_person_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_person_person_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_goods_good_vue__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_goods_good_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_goods_good_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_myfavourite_myfavourite_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_myfavourite_myfavourite_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_myfavourite_myfavourite_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_myplace_myplace_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_myplace_myplace_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_myplace_myplace_vue__);









__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [{ path: "/", redirect: "/goods" }, { path: "/goods", name: "goods", component: __WEBPACK_IMPORTED_MODULE_6__components_goods_good_vue___default.a }, { path: "/destination", name: "destination", component: __WEBPACK_IMPORTED_MODULE_3__components_destination_destination_vue___default.a }, { path: "/shop", name: "shop", component: __WEBPACK_IMPORTED_MODULE_4__components_shop_shop_vue___default.a }, {
    path: "/person",
    name: "person",
    component: __WEBPACK_IMPORTED_MODULE_5__components_person_person_vue___default.a,
    children: [{ path: "/person", redirect: "/person/favourite" }, { path: "favourite", name: "favourite", component: __WEBPACK_IMPORTED_MODULE_7__components_myfavourite_myfavourite_vue___default.a }, { path: "place", name: "place", component: __WEBPACK_IMPORTED_MODULE_8__components_myplace_myplace_vue___default.a }]
  }],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
}));

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(83);


__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  state: {
    selectData: [],
    likeImg: "icon-shoucang",
    showLike: false,
    showMosk: false,
    showzan: false,
    favourite: "icon-zan",
    keepZan: []
  },
  mutations: {
    // 收藏
    getSelectDate(state, data) {
      state.selectData.push(data);
    },
    // 收藏图标
    like(state, data) {
      state.likeImg = data;
    },
    // 取消收藏
    likeSelectDate(state, data) {
      state.selectData.splice(state.selectData.indexOf(data), 1);
    },
    // 展示 赞 收藏 的 状态
    showLike(state, data) {
      state.showLike = data;
      state.showMosk = data;
    },
    showZan(state, data) {
      state.showzan = data;
    },
    favourites(state, data) {
      state.favourite = data;
    },
    keepZan(state, data) {
      state.keepZan.push(data);
    },
    Zan(state, data) {
      state.keepZan.splice(state.keepZan.indexOf(data), 1);
    }
  }
}));

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(36)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(68),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__static_eventBus_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_impress_impress_vue__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_impress_impress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_impress_impress_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      seller: [],
      active: false,
      show: false,
      abc: 0,
      transitionName: 'slide-left'
    };
  },
  components: { "v-header": __WEBPACK_IMPORTED_MODULE_0__components_header_header_vue___default.a, impress: __WEBPACK_IMPORTED_MODULE_2__components_impress_impress_vue___default.a },
  created() {
    this.$http.get('./api/seller').then(res => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.seller = res.data;
      };
    });
  },
  watch: {
    '$route'(to, from) {
      if (to.path == '/') {
        this.transitionName = 'slide-right';
      } else {
        this.transitionName = 'slide-left';
      }
    }
  },
  methods: {
    addshow() {
      this.active = !this.active;
      this.show = !this.show;
    }
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_eventBus_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_js_data_js__ = __webpack_require__(29);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    comments: {
      type: Array
    }
  },
  data() {
    return {};
  },
  created() {
    __WEBPACK_IMPORTED_MODULE_0__static_eventBus_js__["a" /* default */].$on("getdata", function (msag) {
      console.log(msag);
    });
  },
  filters: {
    formatDate(time) {
      let date = new Date(time);
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__common_js_data_js__["a" /* formatDate */])(date, 'yyyy-MM-dd hh:mm');
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["isshow"],
  data() {
    return {};
  },
  methods: {
    closeMyself() {
      this.$emit('on-close');
    }
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["infos"],
  data() {
    return {
      show: false,
      abc: 0,
      // infoDetail: []
      listLength: 0
    };
  },
  computed: {
    lengths() {
      let ab = [];
      for (var i in this.infos.foods) {
        ab.push(this.infos.foods[i]);
      }
      this.listLength = ab.length;
      return this.listLength;
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
      this.show = false;
    },
    openCityInfo() {
      this.show = true;
    },
    __initScroll() {
      setTimeout(() => {
        if (!this.scrolls) {
          this.scrolls = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.cityInfo, {
            click: true,
            probeType: 3
          });
        } else {
          this.scrolls.refresh();
        }
      }, 300);
    },
    ulWidth() {
      if (this.infos.foods) {
        let imgWidth = 175;
        let marginR = 5;
        let widths = this.infos.foods.length * (imgWidth + marginR);
        this.$refs.ulWidth.style.width = widths + 'px';
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical'
            });
          } else {
            this.picScroll.refresh();
          }
        });
      }
    }
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__desInfo_desInfo_vue__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__desInfo_desInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__desInfo_desInfo_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      destination: [],
      listHeight: [],
      scrollY: 0,
      keepInfo: []
    };
  },
  components: { desInfo: __WEBPACK_IMPORTED_MODULE_1__desInfo_desInfo_vue___default.a },
  created() {
    this.$http.get('./api/ratings').then(res => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.destination = res.data;
        this.$nextTick(() => {
          this.initScroll();
          this.calculHeight();
        });
      };
    });
  },
  computed: {
    // 得到滚动的高度的时候的INDEX
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        // 当前高度
        let height1 = this.listHeight[i];
        // 下一个的高度
        let height2 = this.listHeight[i + 1];
        if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }
      return 0;
    }
  },
  methods: {
    initScroll() {
      this.scrollLeft = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.left, {
        click: true,
        probeType: 3
      });
      this.scrollRight = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.right, {
        click: true,
        probeType: 3
      });
      // 获取到滚动的高度
      this.scrollRight.on("scroll", pos => {
        this.scrollY = Math.abs(Math.round(pos.y));
        // console.log(this.scrollY)
      });
    },
    // 计算高度
    calculHeight() {
      // 得到列表个数
      let list = this.$refs.list;
      let height = 0;
      this.listHeight.push(height);
      for (var i = 0; i < list.length; i++) {
        let item = list[i];
        height += item.clientHeight;
        this.listHeight.push(height);
        // console.log(this.listHeight)
        console.log(this.currentInedx);
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
      console.log(el);
      this.scrollRight.scrollToElement(el, 500);
    },
    selectCity(citys) {
      this.keepInfo = citys;
      this.$refs.desInfo.openCityInfo();
    }
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sliderShow_sliderShow_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sliderShow_sliderShow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__sliderShow_sliderShow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goodsdetail_goodsdetail_vue__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__goodsdetail_goodsdetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__goodsdetail_goodsdetail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_better_scroll__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




const ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["seller"],
  data() {
    return {
      goods: [],
      selectGoods: {}
    };
  },
  components: { sliderShow: __WEBPACK_IMPORTED_MODULE_0__sliderShow_sliderShow_vue___default.a, goodsDetail: __WEBPACK_IMPORTED_MODULE_1__goodsdetail_goodsdetail_vue___default.a },
  created() {
    this.$http.get('./api/goods').then(res => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.goods = res.data;
      };
    });
  },
  updated() {
    this.$nextTick(() => {
      this.__initScrolls();
    });
  },
  computed: {
    // 得到收藏数据
    goodsData() {
      return this.$store.state.selectData;
    }
  },
  methods: {
    // 添加滚动事件
    __initScrolls() {
      setTimeout(() => {
        if (!this.goodsList) {
          this.goodsList = new __WEBPACK_IMPORTED_MODULE_2_better_scroll___default.a(this.$refs.goodsList, {
            click: true,
            // 滚动的时候派发一个scroll事件
            probeType: 3
          });
        } else {
          this.goodsList.refresh();
        }
      }, 300);
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
        this.$store.commit("like", "icon-shoucang1");
        this.$store.commit("showLike", true);
      } else {
        // 初始状态
        this.$store.commit("like", "icon-shoucang");
        this.$store.commit("showLike", false);
      }
      if (JSON.stringify(this.$store.state.keepZan).indexOf(JSON.stringify(item)) == -1) {
        this.$store.commit("favourites", "icon-zan");
        this.$store.commit("showZan", false);
      } else {
        this.$store.commit("favourites", "icon-zan1");
        this.$store.commit("showZan", true);
      }
    }
  }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_eventBus_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["count", "select"],
  data() {
    return {
      show: false,
      // hide: false,
      mosk: false,
      localDate: {},
      localArr: [],
      nums: 0
    };
  },
  computed: {
    // 得到图片
    likeImg() {
      return this.$store.state.likeImg;
    },
    favrouriteImg() {
      return this.$store.state.favourite;
    },
    favrourite() {
      if (this.$store.state.showzan === true) {
        return "已赞";
      } else {
        return "赞";
      }
      return favrourite;
    },
    collect() {
      if (this.$store.state.showLike === true) {
        return "已收藏";
      } else {
        return "收藏";
      }
      return collect;
    },
    prompt() {
      if (this.$store.state.showMosk === true) {
        return "请在我的收藏里面查看";
      } else {
        return "取消收藏";
      }
      return prompt;
    }
  },
  methods: {
    addFavourite() {
      if (this.$store.state.favourite === "icon-zan") {
        this.$store.commit("favourites", "icon-zan1");
        this.$store.commit("showZan", true);
        this.$store.commit("keepZan", this.select);
      } else {
        this.$store.commit("favourites", "icon-zan");
        this.$store.commit("Zan", this.select);
        this.$store.commit("showZan", false);
      }
    },
    collects() {
      // this.hide = !this.hide;
      this.mosk = !this.mosk;
      // 判断是否收藏 然后在传值
      if (this.$store.state.likeImg === "icon-shoucang") {
        this.$store.commit("getSelectDate", this.select);
        this.$store.commit("like", "icon-shoucang1");
        this.$store.commit("showLike", true);
      } else {
        this.$store.commit("likeSelectDate", this.select);
        this.$store.commit("like", "icon-shoucang");
        this.$store.commit("showLike", false);
      }
      localStorage.setItem('sel', 1);
      setTimeout(() => {
        this.mosk = false;
      }, 1000);
    }
  }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_better_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_better_scroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_comment_vue__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_comment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__comment_comment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_star_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__star_star_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__star_star_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goodsFooter_footer_vue__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__goodsFooter_footer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__goodsFooter_footer_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





const ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectGoods"],
  data() {
    return {
      show: false,
      words: "",
      abc: {},
      getname: [],
      count: 0,
      getdata: [],
      flag: 1,
      dates: [],
      scrollShow: false,
      menuShow: true,
      currentIndex: 0

    };
  },
  components: { comment: __WEBPACK_IMPORTED_MODULE_1__comment_comment_vue___default.a, star: __WEBPACK_IMPORTED_MODULE_2__star_star_vue___default.a, "v-footer": __WEBPACK_IMPORTED_MODULE_3__goodsFooter_footer_vue___default.a },
  created() {
    this.$http.get('./api/seller').then(res => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.getname = res.data;
      };
    });
  },
  watch: {
    seller() {
      this.$nextTick(() => {
        this.showDetai();
      });
    }
  },
  updated() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  methods: {
    // 滚动菜单
    scrollMenu() {
      this.scrollShow = true;
      this.menuShow = false;
    },
    // 关闭滚动菜单
    closeScroll() {
      console.log(1);
      this.scrollShow = false;
      this.menuShow = true;
    },
    // 滚动那那个景点
    scrollEment(item, index) {
      let sitesName = item.sitesName;
      this.currentIndex = index;
      // console.log(sitesName)
      if (sitesName === this.getSitesName[0].sitesName) {
        let el_one = this.$refs.h2Height[0];
        this.scroll.scrollToElement(el_one, 500);
      }
      if (sitesName === this.getSitesName[1].sitesName) {
        let el_two = this.$refs.h2Height[1];
        this.scroll.scrollToElement(el_two, 500);
      }
      if (sitesName === this.getSitesName[2].sitesName) {
        let el_there = this.$refs.h2Height[2];
        this.scroll.scrollToElement(el_there, 500);
      }
      if (sitesName === this.getSitesName[3].sitesName) {
        let el_four = this.$refs.h2Height[3];
        this.scroll.scrollToElement(el_four, 500);
      }
    },
    showDetail() {
      this.show = true;
    },
    // 滚动条
    initScroll() {
      if (!this.scroll) {
        this.scroll = new __WEBPACK_IMPORTED_MODULE_0_better_scroll___default.a(this.$refs.viewspot, {
          click: true
        });
      } else {
        this.scroll.refresh();
      }
    },
    close() {
      this.show = false;
    },
    // 提交按钮
    submit() {
      this.count++;
      let foodtype = [];
      foodtype = this.selectGoods.comment;
      if (this.words.length >= 1) {
        this.abc.content = this.words;
        this.abc.avatar = this.getname.registTx;
        this.abc.user = this.getname.acount;
        this.abc.date = new Date();
        foodtype.unshift(this.abc);
      } else {
        return foodtype;
      }
      this.getdata = foodtype;
      this.flag = 2;
      this.words = "";
      console.log(foodtype);
    }
  },
  computed: {
    // 得到景点名称
    getSitesName() {
      let sitesData = this.selectGoods.detailInfo;
      for (var i in sitesData) {
        this.dates = sitesData[i].sites;
      }
      return this.dates;
    },
    wordslength() {
      let length;
      length = this.words.length;
      return length;
    },
    inputContent() {
      return this.words;
    },
    selectFoods() {
      let food = [];
      if (this.flag == 2) {
        food = this.getdata;
      } else {
        food = this.selectGoods.comment;
        for (var i in this.selectGoods.comment) {
          this.count = ++i;
        }
      }
      return food;
    }
  }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__login_login_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["seller"],
  data() {
    return {
      showMosk: false,
      showLogin: false,
      loggedIn: true
    };
  },
  components: { login: __WEBPACK_IMPORTED_MODULE_0__login_login_vue___default.a },
  methods: {
    // 显示模板
    show() {
      this.showMosk = true;
      let localUser = localStorage.getItem("user");
      if (localUser) {
        this.showLogin = false;
        this.loggedIn = false;
      }
    },
    // 关闭模板
    closeMosk() {
      this.showMosk = false;
    },
    // 登录
    login() {
      this.showLogin = true;
    },
    // 关闭登录，子组件传过来
    closeLogin() {
      this.showLogin = false;
    },
    // 登录成功跳转，子组件传过来
    closeL() {
      this.showLogin = false;
      this.loggedIn = false;
    },
    // 退出登录
    logout() {
      this.loggedIn = !this.loggedIn;
      localStorage.removeItem("user");
    }
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dailog_dailog_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dailog_dailog_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__dailog_dailog_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      showjob: false,
      showPlane: false
    };
  },
  methods: {
    getJob() {
      this.showjob = true;
    },
    getPlane() {
      this.showPlane = true;
    },
    closeDailog(attr) {
      this[attr] = false;
    }
  },
  components: { dailog: __WEBPACK_IMPORTED_MODULE_0__dailog_dailog_vue___default.a }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["loginInfo"],
  data() {
    return {
      password: "",
      username: "",
      errorText: ""
    };
  },
  methods: {
    closeLogin() {
      this.$emit("closeLogin");
    },
    submit() {
      if (this.username !== this.loginInfo.username && this.password !== this.loginInfo.password) {
        this.errorText = "账号和密码不符";
      } else {
        this.$emit("closeL");
        localStorage.setItem("user", this.username);
        localStorage.setItem("pass", this.password);
      }
    }
  }
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_eventBus_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["selectnum"],
  data() {
    return {};
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
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {}
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_eventBus_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["seller"],
  data() {
    return {
      localselect: [],
      selectNum: 0
    };
  },
  created() {
    this.$nextTick(() => {
      this.select();
    });
  },
  methods: {
    select() {
      this.selectNum = JSON.parse(localStorage.getItem('sel'));
    }
  }
});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['seller'],
  data() {
    return {
      nowIndex: 0,
      inv: 2500,
      show: true
    };
  },
  computed: {
    gotoPrve() {
      if (this.nowIndex === 0) {
        return this.seller.pics.length - 1;
      } else {
        return this.nowIndex - 1;
      }
    },
    gotoNext() {
      if (this.nowIndex === this.seller.pics.length - 1) {
        return 0;
      } else {
        return this.nowIndex + 1;
      }
    }
  },
  methods: {
    goto(index) {
      this.show = false;
      setTimeout(() => {
        this.nowIndex = index;
        this.show = true;
      }, 100);
    },
    run() {
      this.invId = setInterval(() => {
        this.goto(this.gotoNext);
      }, this.inv);
    },
    clearRun() {
      clearInterval(this.invId);
    }
  },
  mounted() {
    this.run();
  }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

const Integer = "on";
const Helf = "helf";
const Off = "off";
const Length = 5;
/* harmony default export */ __webpack_exports__["default"] = ({
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
      console.log(this.score);
    }
  }
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatDate;
function formatDate(date, fmt) {
  // 匹配年
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  };
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    };
  }

  return fmt;
}
function padLeftZero(str) {
  return ('00' + str).substr(str.length);
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_store_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_navigation__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_fonts_iconfont_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_fonts_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__common_fonts_iconfont_css__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.







__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5_vue_navigation__["a" /* default */], { router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */] });
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_4__store_store_js__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a }
});

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(33)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(65),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(74),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(47)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(79),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(34)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(66),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-2bd4f990",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(35)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(67),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-3335760a",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(70),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(76),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(75),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(72),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-88f2a324",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(46)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(77),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(69),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(32)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(64),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(31)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(63),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(71),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slide-show",
    on: {
      "touchstart": _vm.clearRun,
      "touchend": _vm.run
    }
  }, [_c('div', {
    staticClass: "slide-show__img"
  }, [_c('transition', {
    attrs: {
      "name": "slide-trans"
    }
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    attrs: {
      "src": _vm.seller.pics[_vm.nowIndex]
    }
  })]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide-trans-old"
    }
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.show),
      expression: "!show"
    }],
    attrs: {
      "src": _vm.seller.pics[_vm.nowIndex]
    }
  })])], 1), _vm._v(" "), _c('ul', {
    staticClass: "slide-show__ul"
  }, _vm._l((_vm.seller.pics), function(item, index) {
    return _c('li', {
      staticClass: "slide-show__li",
      class: {
        'on': index === _vm.nowIndex
      },
      on: {
        "click": function($event) {
          _vm.goto(index)
        }
      }
    })
  }))])
},staticRenderFns: []}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "warrper"
  }, [_c('div', {
    staticClass: "shop"
  }, [_c('h2', {
    staticClass: "list__title"
  }, [_vm._v("\n╭(╯ε╰)╮正在加紧开发,客官稍等")])])])
}]}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "comments"
  }, [_c('ul', {
    staticClass: "comment__menu"
  }, _vm._l((_vm.comments), function(item) {
    return _c('li', {
      staticClass: "comment__list",
      attrs: {
        "refs": "list"
      }
    }, [_c('div', {
      staticClass: "comment__list-pic"
    }, [_c('img', {
      attrs: {
        "src": item.avatar,
        "width": "40",
        "height": "40"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "comment__list-user"
    }, [_c('p', {
      staticClass: "comment__list-username"
    }, [_vm._v(_vm._s(item.user))]), _vm._v(" "), _c('p', {
      staticClass: "comment__list-content"
    }, [_vm._v(_vm._s(item.content))]), _vm._v(" "), _c('p', {
      staticClass: "comment__list-date"
    }, [_vm._v(_vm._s(_vm._f("formatDate")(item.date)))])])])
  }))])
},staticRenderFns: []}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "des-warrper"
  }, [_c('div', {
    ref: "destination",
    staticClass: "destination"
  }, [_c('div', {
    ref: "left",
    staticClass: "left"
  }, [_c('ul', {
    staticClass: "left__menu"
  }, _vm._l((_vm.destination), function(item, index) {
    return _c('li', {
      staticClass: "left__list border-1px",
      class: {
        'active': _vm.currentIndex === index
      },
      on: {
        "click": function($event) {
          _vm.selectMenu(index, $event)
        }
      }
    }, [_c('p', {
      staticClass: "left__city",
      class: {
        'textcolor': _vm.currentIndex === index
      }
    }, [_vm._v(_vm._s(item.city))]), _vm._v(" "), _c('p', {
      staticClass: "left__citynum",
      class: {
        'textcolor': _vm.currentIndex === index
      }
    }, [_vm._v(_vm._s(item.cityNum))])])
  }))]), _vm._v(" "), _c('div', {
    ref: "right",
    staticClass: "right"
  }, [_c('div', [_c('ul', {
    staticClass: "right__menu"
  }, _vm._l((_vm.destination), function(item) {
    return _c('li', {
      ref: "menu",
      refInFor: true,
      staticClass: "right__list"
    }, [_c('h2', {
      staticClass: "right__list-title"
    }, [_vm._v(_vm._s(item.city))]), _vm._v(" "), _c('ul', {
      ref: "list",
      refInFor: true
    }, _vm._l((item.cityMenu), function(citys) {
      return _c('li', {
        staticClass: "right__list-info",
        on: {
          "click": function($event) {
            _vm.selectCity(citys)
          }
        }
      }, [_c('div', {
        staticClass: "right__list-img"
      }, [_c('img', {
        staticClass: "img",
        attrs: {
          "src": citys.img,
          "alt": "图片"
        }
      })]), _vm._v(" "), _c('p', {
        staticClass: "right__list__cityname"
      }, [_vm._v(_vm._s(citys.name))])])
    }))])
  }))])])]), _vm._v(" "), _c('des-info', {
    ref: "desInfo",
    attrs: {
      "infos": _vm.keepInfo
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goods"
  }, [_c('div', {
    ref: "goodsList",
    staticClass: "goods__list"
  }, [_c('div', {
    staticClass: "goods__list-content"
  }, [_c('div', {
    staticClass: "sliderShow-warrper"
  }, [_c('slider-show', {
    attrs: {
      "seller": _vm.seller
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "goods_menu"
  }, [_c('ul', _vm._l((_vm.goods), function(item) {
    return _c('li', {
      staticClass: "goods__list-li",
      on: {
        "click": function($event) {
          _vm.openDetail(item, $event)
        }
      }
    }, [_c('div', {
      staticClass: "goods__list-pics"
    }, [_c('div', {
      staticClass: "goods__mosk"
    }), _vm._v(" "), _c('img', {
      staticClass: "list-pics__img",
      attrs: {
        "src": item.pic
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "goods__list-detail"
    }, [_c('h2', {
      staticClass: "goods__list-title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
      staticClass: "goods__list-ptag"
    }, [_vm._v(_vm._s(item.ptag))])])])
  }))])])]), _vm._v(" "), _c('goods-detail', {
    ref: "detail",
    attrs: {
      "selectGoods": _vm.selectGoods
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('v-header', {
    attrs: {
      "seller": _vm.seller
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab"
  }, [_c('div', {
    staticClass: "tab-warrper border-1px"
  }, [_c('div', {
    staticClass: "tab__item"
  }, [_c('router-link', {
    attrs: {
      "to": "/goods"
    },
    on: {
      "getComment": function($event) {
        _vm.getcomment(_vm.attr, $event)
      }
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-jingxuan1"
  }), _c('span', [_vm._v("精选")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab__item"
  }, [_c('router-link', {
    attrs: {
      "to": "/destination"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-mudedi"
  }), _c('span', [_vm._v("目的地")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "item",
    on: {
      "click": _vm.addshow
    }
  }, [_c('div', {
    staticClass: "hamburger",
    class: {
      'is-active': _vm.active
    },
    attrs: {
      "id": "hamburger-6"
    }
  }, [_c('span', {
    staticClass: "line"
  }), _vm._v(" "), _c('span', {
    staticClass: "line"
  }), _vm._v(" "), _c('span', {
    staticClass: "line"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "tab__item"
  }, [_c('router-link', {
    attrs: {
      "to": "/shop"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-goumai"
  }), _c('span', [_vm._v("购买")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab__item"
  }, [_c('router-link', {
    attrs: {
      "to": "/person"
    }
  }, [_c('i', {
    staticClass: "icon iconfont icon-wode-copy"
  }), _c('span', [_vm._v("我的")])])], 1)])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transitionName
    }
  }, [_c('navigation', [_c('router-view', {
    staticClass: "child-view",
    attrs: {
      "seller": _vm.seller
    }
  })], 1)], 1), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fadeleft"
    }
  }, [_c('impress', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }]
  })], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "warrper"
  }, [_c('div', {
    staticClass: "person"
  }, [_c('div', {
    staticClass: "person__header"
  }, [_c('div', {
    staticClass: "person__header-img"
  }, [_c('img', {
    attrs: {
      "src": _vm.seller.registTx
    },
    on: {
      "click": _vm.select
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "person__header-user"
  }, [_c('p', {
    staticClass: "person__header-name"
  }, [_vm._v(_vm._s(_vm.seller.acount))]), _vm._v(" "), _vm._m(0)])]), _vm._v(" "), _c('div', {
    staticClass: "person__tab"
  }, [_c('router-link', {
    staticClass: "person__tab-item",
    attrs: {
      "to": {
        name: 'place'
      }
    }
  }, [_vm._v("行程")]), _vm._v(" "), _c('router-link', {
    staticClass: "person__tab-item",
    attrs: {
      "to": {
        name: 'favourite'
      }
    }
  }, [_vm._v("收藏")])], 1), _vm._v(" "), _c('div', {
    staticClass: "peroson__router"
  }, [_c('router-view', {
    attrs: {
      "selectnum": _vm.selectNum
    }
  })], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "person__header-info"
  }, [_c('p', {
    staticClass: "person__header-text"
  }, [_c('i', {
    staticClass: "iconfont icon-jijin icon"
  }), _vm._v(" "), _c('span', [_vm._v("旅行基金")])]), _vm._v(" "), _c('p', {
    staticClass: "person__header-text"
  }, [_c('i', {
    staticClass: "iconfont icon-icon icon"
  }), _vm._v(" "), _c('span', [_vm._v("代金券")])]), _vm._v(" "), _c('p', {
    staticClass: "person__header-text"
  }, [_c('i', {
    staticClass: "iconfont icon-dingdan-copy icon"
  }), _vm._v(" "), _c('span', [_vm._v("订单")])])])
}]}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "footer__favourite common",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.addFavourite($event)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: _vm.favrouriteImg
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.favrourite))])]), _vm._v(" "), _c('div', {
    staticClass: "footer__comment common"
  }, [_c('i', {
    staticClass: "iconfont icon-pinglun1"
  }), _vm._v(" "), _c('span', [_vm._v("评论(" + _vm._s(_vm.count) + ")")])]), _vm._v(" "), _c('div', {
    staticClass: "footer__share common",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.collects($event)
      }
    }
  }, [_c('i', {
    staticClass: "iconfont",
    class: _vm.likeImg
  }), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.collect))])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mosk),
      expression: "mosk"
    }],
    staticClass: "footer__mosk"
  }, [_c('div', {
    staticClass: "footer__mosk-text"
  }, [_vm._v("\n      " + _vm._s(_vm.prompt) + "\n    ")])])])
},staticRenderFns: []}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star",
    on: {
      "click": _vm.starNumber
    }
  }, _vm._l((_vm.itemClass), function(item) {
    return _c('span', {
      staticClass: "star__item",
      class: item
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dialog-wrap"
  }, [_c('div', {
    staticClass: "dialog-cover"
  }), _vm._v(" "), _c('div', {
    staticClass: "login"
  }, [_c('div', {
    staticClass: "login__logo"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "login__from"
  }, [_c('form', {
    attrs: {
      "method": "post"
    }
  }, [_c('div', {
    staticClass: "login__info"
  }, [_c('div', {
    staticClass: "login__acount"
  }, [_c('label', {
    attrs: {
      "for": "acount"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    staticClass: "acount",
    attrs: {
      "type": "text",
      "name": "acount",
      "id": "acount",
      "placeholder": "手机/邮箱"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "login__password"
  }, [_c('label', {
    attrs: {
      "for": "password"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    staticClass: "password",
    attrs: {
      "type": "password",
      "name": "password",
      "id": "password",
      "placeholder": "密码"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('p', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.errorText),
      expression: "errorText"
    }],
    staticClass: "error-text"
  }, [_vm._v(_vm._s(_vm.errorText))]), _vm._v(" "), _c('div', {
    staticClass: "login__submit"
  }, [_c('a', {
    staticClass: "btn",
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.submit($event)
      }
    }
  }, [_vm._v("登录")])])])]), _vm._v(" "), _c('div', {
    staticClass: "close-login",
    on: {
      "click": _vm.closeLogin
    }
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login__title"
  }, [_c('span', {
    staticClass: "line"
  }), _vm._v(" "), _c('h2', {
    staticClass: "login__title-acount"
  }, [_vm._v("登录账户")]), _vm._v(" "), _c('span', {
    staticClass: "line"
  })])
}]}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header-warrper"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "header__nav",
    on: {
      "click": _vm.show
    }
  }, [_c('i', {
    staticClass: "header__nav-btn"
  })])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fadeLeft"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showMosk),
      expression: "showMosk"
    }],
    staticClass: "mosk"
  }, [_c('div', {
    staticClass: "mosk__header"
  }, [_c('div', {
    staticClass: "mosk__header-close"
  }, [_c('form', {
    staticClass: "from",
    attrs: {
      "method": "GET"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "国家，城市",
      "name": "keyword",
      "autocomplete": "off"
    }
  }), _vm._v(" "), _c('a', {
    staticClass: "search-btn",
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('i', {
    staticClass: "search-icon"
  })])]), _vm._v(" "), _c('i', {
    staticClass: "icon",
    on: {
      "click": _vm.closeMosk
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mosk__header-nav"
  }, [_c('ul', [_c('li', {
    staticClass: "mosk__header-li border-1px"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("首页")])]), _vm._v(" "), _c('li', {
    staticClass: "mosk__header-li border-1px"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("发现")])]), _vm._v(" "), _c('li', {
    staticClass: "mosk__header-li border-1px"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("个人")])]), _vm._v(" "), _c('li', {
    staticClass: "mosk__header-li border-1px"
  }, [_c('a', {
    attrs: {
      "href": ""
    }
  }, [_vm._v("行程")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mosk__footer"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loggedIn),
      expression: "loggedIn"
    }],
    staticClass: "mosk__footer-pic",
    on: {
      "click": _vm.login
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.seller.registLogo,
      "title": "图片"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mosk__footer-login"
  }, [_vm._v("登录")])]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (!_vm.loggedIn),
      expression: "!loggedIn"
    }],
    staticClass: "mosk__footer-pic"
  }, [_c('img', {
    attrs: {
      "src": _vm.seller.registTx,
      "title": "图片"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "mosk__footer-login"
  }, [_vm._v("欢迎回来，" + _vm._s(_vm.seller.acount) + "。")]), _vm._v(" "), _c('p', {
    staticClass: "mosk__footer-login",
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("退出")])]), _vm._v(" "), _c('div', {
    staticClass: "mosk__footer-copyright"
  }, [_c('span', {
    staticClass: "copyright-text"
  }, [_vm._v("反馈")]), _vm._v(" "), _c('span', {
    staticClass: "copyright-text"
  }, [_vm._v("关于")]), _vm._v(" "), _c('span', {
    staticClass: "copyright-text"
  }, [_vm._v("FAQ")])])])])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "fade-x"
    }
  }, [_c('login', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showLogin),
      expression: "showLogin"
    }],
    attrs: {
      "loginInfo": _vm.seller
    },
    on: {
      "closeLogin": _vm.closeLogin,
      "closeL": _vm.closeL
    }
  })], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "header__logo"
  }, [_c('img', {
    staticClass: "header__img",
    attrs: {
      "src": "http://cfbassets.b0.upaiyun.com/assets/v2/mobile/header_logo@2x-2f184092cdfe3c08265a268418f370f9.png",
      "title": "图片"
    }
  })])
}]}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dailog-warrper"
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isshow),
      expression: "isshow"
    }],
    staticClass: "dialog-cover",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.closeMyself($event)
      }
    }
  }), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "drop"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.isshow),
      expression: "isshow"
    }],
    staticClass: "dailog",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.closeMyself($event)
      }
    }
  }, [_vm._t("default")], 2)])], 1)
},staticRenderFns: []}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "impress"
  }, [_c('div', {
    staticClass: "impress-flex"
  }, [_c('div', {
    staticClass: "circle common",
    on: {
      "click": _vm.getPlane
    }
  }, [_c('i', {
    staticClass: "iconfont icon-biji1 icons"
  }), _vm._v(" "), _c('p', {
    staticClass: "write"
  }, [_vm._v("做行程")])]), _vm._v(" "), _c('div', {
    staticClass: "single common",
    on: {
      "click": _vm.getJob
    }
  }, [_c('p', {
    staticClass: "ptag common"
  }, [_vm._v("求职，联系我")]), _vm._v(" "), _c('em')]), _vm._v(" "), _c('dailog', {
    attrs: {
      "isshow": _vm.showjob
    },
    on: {
      "on-close": function($event) {
        _vm.closeDailog('showjob')
      }
    }
  }, [_c('p', {
    staticClass: "ptext"
  }, [_c('span', [_vm._v("tel:13249791010")]), _vm._v(" "), _c('span', [_vm._v("email:13249791010@163.com")])])]), _vm._v(" "), _c('dailog', {
    attrs: {
      "isshow": _vm.showPlane
    },
    on: {
      "on-close": function($event) {
        _vm.closeDailog('showPlane')
      }
    }
  }, [_c('p', {
    staticClass: "ptext"
  }, [_c('span', [_vm._v("已在加紧开发中")]), _vm._v(" "), _c('em', {
    staticClass: "loading_one"
  }, [_vm._v(".")]), _vm._v(" "), _c('em', {
    staticClass: "loading_two"
  }, [_vm._v(".")]), _vm._v(" "), _c('em', {
    staticClass: "loading_there"
  }, [_vm._v(".")])])])], 1)])
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "viewspot",
    staticClass: "viewspot"
  }, [_c('div', {
    staticClass: "viewspot-content"
  }, [_c('div', {
    staticClass: "close iconfont icon-fanhui1",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.close($event)
      }
    }
  }), _vm._v(" "), _vm._l((_vm.selectGoods.detailInfo), function(item) {
    return _c('div', {
      staticClass: "viewspot__intro"
    }, [_c('div', {
      staticClass: "viewspot__intro-img"
    }, [_c('div', {
      staticClass: "viewspot__mosk"
    }), _vm._v(" "), _c('img', {
      attrs: {
        "src": _vm.selectGoods.pic
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "viewspot__intro-title"
    }, [_c('h2', {
      staticClass: "title"
    }, [_vm._v(_vm._s(_vm.selectGoods.title))]), _vm._v(" "), _c('p', {
      staticClass: "ptag"
    }, [_vm._v(_vm._s(_vm.selectGoods.ptag))])])]), _vm._v(" "), _c('div', {
      staticClass: "viewspot__intro-text border-1px"
    }, [_c('p', {
      staticClass: "first"
    }, [_c('strong', {
      staticClass: "em"
    }, [_vm._v("出发君说:")]), _vm._v(_vm._s(item.introduce) + "\n          ")]), _vm._v(" "), _c('p', [_c('strong', {
      staticClass: "em"
    }, [_vm._v("推荐人群:")]), _vm._v(_vm._s(item.tag))])]), _vm._v(" "), _c('ul', {
      staticClass: "menu"
    }, [_c('div', {
      staticClass: "menu__title border-1px"
    }, [_c('p', {
      staticClass: "menu__title-date common"
    }, [_vm._v("DAY1")]), _vm._v(" "), _c('p', {
      staticClass: "menu__title-spot common"
    }, [_vm._v(_vm._s(item.spot))]), _vm._v(" "), _c('p', {
      staticClass: "menu__title-overview"
    }, [_c('strong', [_vm._v("今日概览:")]), _vm._v(_vm._s(item.overview))])]), _vm._v(" "), _vm._l((item.sites), function(sites) {
      return _c('li', {
        ref: "h2Height",
        refInFor: true,
        staticClass: "list border-1px"
      }, [_c('div', {
        staticClass: "list__header"
      }, [_c('i', {
        staticClass: "iconfont icon-jingdian1 icon"
      }), _vm._v(" "), _c('h2', {
        staticClass: "list__title"
      }, [_vm._v(_vm._s(sites.sitesName))])]), _vm._v(" "), _c('div', {
        ref: "picWrapper",
        refInFor: true,
        staticClass: "list__warrper"
      }, [_c('ul', {
        ref: "ulWidth",
        refInFor: true,
        staticClass: "list__menu"
      }, _vm._l((sites.sitesImg), function(img, index) {
        return _c('li', {
          staticClass: "list__img"
        }, [_c('img', {
          ref: "list",
          refInFor: true,
          attrs: {
            "src": img,
            "alt": "图片"
          }
        })])
      }))]), _vm._v(" "), _c('div', {
        staticClass: "list__text"
      }, [_c('div', {
        staticClass: "star-warrper"
      }, [_c('star', {
        attrs: {
          "score": sites.score
        }
      })], 1), _vm._v(" "), _c('h3', {
        staticClass: "list__text-tag"
      }, [_vm._v("#" + _vm._s(sites.sitesTag) + "#")]), _vm._v(" "), _c('p', {
        staticClass: "list__text-common"
      }, [_c('strong', {
        staticClass: "em"
      }, [_vm._v("出发君说:")]), _vm._v(_vm._s(sites.sitesIntro))]), _vm._v(" "), _c('p', {
        staticClass: "list__text-common"
      }, [_c('strong', {
        staticClass: "em"
      }, [_vm._v("游玩方式:")]), _vm._v(_vm._s(sites.playWay))]), _vm._v(" "), _c('p', {
        staticClass: "list__text-common"
      }, [_c('strong', {
        staticClass: "em"
      }, [_vm._v("如何到达:")]), _vm._v(_vm._s(sites.getWay))])])])
    }), _vm._v(" "), _c('div', {
      staticClass: "line"
    })], 2), _vm._v(" "), _c('div', {
      staticClass: "menu__end"
    }, [_c('i', {
      staticClass: "menu__end-logo"
    }), _vm._v(" "), _c('div', {
      staticClass: "style"
    })])])
  }), _vm._v(" "), _c('div', {
    ref: "commentHeight",
    staticClass: "comment"
  }, [_c('h2', {
    staticClass: "comment__title"
  }, [_vm._v("评论")]), _vm._v(" "), _c('div', {
    staticClass: "comment__textarea"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.words),
      expression: "words"
    }],
    staticClass: "textarea",
    attrs: {
      "placeholder": "请填写评论",
      "contenteditable": ""
    },
    domProps: {
      "value": (_vm.words)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.words = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "comment__words"
  }, [_c('span', {
    staticClass: "comment__words-number"
  }, [_vm._v(_vm._s(_vm.wordslength))]), _vm._v(" "), _c('span', [_vm._v("/270")])]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "comment__submit",
    class: {
      'haswords': _vm.wordslength > 0
    },
    attrs: {
      "href": "javascript:;"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("评论")])])]), _vm._v(" "), _c('comment', {
    attrs: {
      "comments": _vm.selectFoods
    }
  })], 1)], 2), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.menuShow),
      expression: "menuShow"
    }],
    staticClass: "right__nav",
    on: {
      "click": _vm.scrollMenu
    }
  }, [_c('p', {
    staticClass: "right__nav-warrper"
  }, [_c('i', {
    staticClass: "right__nav__icon down1"
  }), _vm._v(" "), _c('i', {
    staticClass: "right__nav__icon down3"
  })])]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "scroll"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.scrollShow),
      expression: "scrollShow"
    }],
    staticClass: "scroll__menu"
  }, [_c('div', {
    staticClass: "scroll__menu-mosk"
  }), _vm._v(" "), _c('ul', {
    staticClass: "scroll__menu-ul"
  }, _vm._l((_vm.getSitesName), function(item, index) {
    return _c('li', {
      staticClass: "scroll__menu-li"
    }, [_c('p', {
      staticClass: "scroll__menu-ptag",
      class: {
        'click-active': _vm.currentIndex === index
      },
      on: {
        "click": function($event) {
          _vm.scrollEment(item, index)
        }
      }
    }, [_vm._v("景点" + _vm._s(index + 1) + "," + _vm._s(item.sitesName) + "\n            ")])])
  })), _vm._v(" "), _c('div', {
    staticClass: "scroll__line"
  }), _vm._v(" "), _c('div', {
    staticClass: "iconfont icon-close ",
    on: {
      "click": _vm.closeScroll
    }
  })])]), _vm._v(" "), _c('v-footer', {
    attrs: {
      "count": _vm.count,
      "select": _vm.selectGoods
    }
  })], 1)])
},staticRenderFns: []}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "place__list"
  }, [_c('h2', {
    staticClass: "list__title"
  }, [_vm._v("\n╭(╯ε╰)╮暂时无内容")])])
}]}

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fadeleft"
    }
  }, [_c('div', {
    staticClass: "myfourite"
  }, [_c('div', {
    staticClass: "goods__list"
  }, [_c('ul', _vm._l((_vm.getCollect), function(item) {
    return _c('li', {
      staticClass: "goods__list-li"
    }, [_c('div', {
      staticClass: "goods__list-pics"
    }, [_c('div', {
      staticClass: "goods__mosk"
    }), _vm._v(" "), _c('img', {
      staticClass: "list-pics__img",
      attrs: {
        "src": item.pic
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "goods__list-detail"
    }, [_c('h2', {
      staticClass: "goods__list-title"
    }, [_vm._v(_vm._s(item.title))]), _vm._v(" "), _c('p', {
      staticClass: "goods__list-ptag"
    }, [_vm._v(_vm._s(item.ptag))])])])
  }))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    staticClass: "goods__list"
  }, [_c('h2', {
    staticClass: "list__title"
  }, [_vm._v("\n╭(╯ε╰)╮去精选里面添加内容吧")])])])])
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "move"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.show),
      expression: "show"
    }],
    ref: "cityInfo",
    staticClass: "city-info",
    on: {
      "click": _vm.openCityInfo
    }
  }, [_c('div', {
    staticClass: "warrper"
  }, [_c('div', {
    staticClass: "close iconfont icon-fanhui1",
    on: {
      "click": function($event) {
        $event.stopPropagation();
        $event.preventDefault();
        _vm.close($event)
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "city-info__title"
  }, [_c('div', {
    staticClass: "city-info__img"
  }, [_c('img', {
    attrs: {
      "src": _vm.infos.bigimg,
      "alt": "图片"
    }
  }), _vm._v(" "), _c('h2', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.infos.name))])]), _vm._v(" "), _c('div', {
    staticClass: "city-info__guide"
  }, [_c('h3', {
    staticClass: "h2title"
  }, [_vm._v("旅游攻略")]), _vm._v(" "), _c('p', {
    staticClass: "intro"
  }, [_vm._v(_vm._s(_vm.infos.intro))])])]), _vm._v(" "), _c('div', {
    staticClass: "style"
  }), _vm._v(" "), _c('div', {
    staticClass: "city-info__hot"
  }, [_c('h2', {
    staticClass: "h2title"
  }, [_vm._v("热门景点")]), _vm._v(" "), _c('div', {
    staticClass: "city-info-title"
  }, [_c('ul', {
    staticClass: "hotmenu"
  }, _vm._l((_vm.infos.hotSpot), function(hot) {
    return _c('li', {
      staticClass: "hot-spot"
    }, [_c('div', {
      staticClass: "hot-spot-part"
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": hot.img,
        "title": "图片"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "spot-name"
    }, [_vm._v(_vm._s(hot.name))])])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "style"
  }), _vm._v(" "), _c('div', {
    staticClass: "city-info__hot"
  }, [_c('h2', {
    staticClass: "h2title"
  }, [_vm._v("美食推荐")]), _vm._v(" "), _c('div', {
    ref: "picWrapper",
    staticClass: "city-info-title"
  }, [_c('ul', {
    ref: "ulWidth",
    staticClass: "hotmenu"
  }, _vm._l((_vm.infos.foods), function(food) {
    return _c('li', {
      staticClass: "hot-spot"
    }, [_c('div', {
      staticClass: "hot-spot-part"
    }, [_c('img', {
      staticClass: "img",
      attrs: {
        "src": food.img,
        "title": "图片"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "spot-name"
    }, [_vm._v(_vm._s(food.name))])])])
  }))])]), _vm._v(" "), _c('div', {
    staticClass: "style"
  }), _vm._v(" "), _c('div', {
    staticClass: "goods_menu"
  }, [_c('h2', {
    staticClass: "h2title"
  }, [_vm._v("去处")]), _vm._v(" "), _c('ul', _vm._l((_vm.infos.place), function(item) {
    return _c('li', {
      staticClass: "goods__list-li"
    }, [_c('div', {
      staticClass: "goods__list-pics"
    }, [_c('div', {
      staticClass: "goods__mosk"
    }), _vm._v(" "), _c('img', {
      staticClass: "list-pics__img",
      attrs: {
        "src": item.img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "goods__list-detail"
    }, [_c('h2', {
      staticClass: "goods__list-title"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('p', {
      staticClass: "goods__list-ptag"
    }, [_vm._v(_vm._s(item.tag))])])])
  }))])])])])
},staticRenderFns: []}

/***/ }),
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[30]);
//# sourceMappingURL=app.137d38df919245cea690.js.map