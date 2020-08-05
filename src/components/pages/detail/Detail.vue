<template>
  <div class="detail page font">
    <option-bar :data="topOptBarData" class="down-shadow"></option-bar>
    <div class="detail-area option-content base-color">
        <router-view></router-view>
    </div>
    <option-bar :data="bottomOptBarData" class="up-shadow"></option-bar>
  </div>
</template>

<script>
import OptionBar from '../../common/OptionBar.vue'
import DetailBar from './src/DetailBar.vue'

export default {
    name: 'Detail',
    components:{
        OptionBar,
        DetailBar
    },
    data() {
    return {
      topOptBarData: {
        left: {
          icon: 'back',
          route: '/main'
        },
        center: '明细',
        right: {}
      },
      bottomOptBarData: {
        left: {
          icon: 'time',
          route: '/detail/time'
        },
        center: {
            icon: 'account',
            route: '/detail/account'
        },
        right: {
            icon: 'amount',
            route: '/detail/amount'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.detail-area {
}
</style>