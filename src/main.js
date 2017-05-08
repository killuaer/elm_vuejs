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
  { path: '/(elm/?)', redirect: '/elm/goods' },
  { path: '/elm/seller', component: Seller },
  { path: '/elm/goods', component: Goods },
  { path: '/elm/ratings', component: Ratings },
  { path: '/elm/*', redirect: '/elm/goods' }
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
