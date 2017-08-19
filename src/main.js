// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from "./store/store.js"
import Navigation from 'vue-navigation'
import "./common/fonts/iconfont.css"
Vue.use(VueResource);
Vue.use(Navigation, {router})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
