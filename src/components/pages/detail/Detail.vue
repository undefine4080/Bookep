<template>
  <div class="detail page font">
    <option-bar :data="topOptBarData" class="down-shadow"></option-bar>
    <div class="detail-area option-content base-color">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <option-bar :data="bottomOptBarData" class="up-shadow"></option-bar>
  </div>
</template>

<script>
import OptionBar from '../../common/OptionBar.vue'
import DetailBar from './src/DetailBar.vue'

import DB from '../../../api/db.js'

export default {
    name: 'Detail',
    components: {
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
    },
    beforeCreate(){
this.$store.commit('initBaseData')
    },
    beforeMount() {
        this.$store.commit('getGlobalRecordData')
    }
}
</script>
