<template>
  <div id="sellApp">
     <v-header></v-header>
     <div class="tab border-1px">
        <div class="tab-item">
          <router-link to="/goods">商品</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/ratings">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/seller">商家</router-link>
        </div>
     </div>
     <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/header/Header'

export default {
  name: 'app',
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import './common/stylus/mixin.styl'

  #sellApp
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex: 1
        text-align: center
        & > a
          color: rgb(77, 85, 93)
          display: block
          font-size: 14px
          &.active
            color: rgb(240,20,20)
</style>
