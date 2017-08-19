import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from "../components/header/header.vue"
import Destination from "../components/destination/destination.vue"
import Shop from "../components/shop/shop.vue"
import Person from "../components/person/person.vue"
import Goods from "../components/goods/good.vue"
import Favourite from "../components/myfavourite/myfavourite.vue"
import Place from "../components/myplace/myplace.vue"
Vue.use(VueRouter);
export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: "/", redirect: "/goods" },
    { path: "/goods", name: "goods", component: Goods },
    { path: "/destination", name: "destination", component: Destination },
    { path: "/shop", name: "shop", component: Shop },
    {
      path: "/person",
      name: "person",
      component: Person,
      children: [
        { path: "/person", redirect: "/person/favourite" },
        { path: "favourite", name: "favourite", component: Favourite },
        { path: "place", name: "place", component: Place }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
