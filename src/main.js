// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Seller from './components/seller/Seller'
import Goods from './components/goods/Goods'
import Ratings from './components/ratings/Ratings'

import './common/stylus/index.styl'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/', redirect: '/goods' },
  { path: '/seller', component: Seller },
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings }
]

const router = new VueRouter({
	mode: 'history',
	routes,
	linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})
