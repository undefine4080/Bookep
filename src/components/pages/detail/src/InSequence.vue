<template>
  <div class="in-sequence">
      <detail-bar :data="dataItem" v-for="(dataItem, index) in detailData" :key="index"></detail-bar>
  </div>
</template>

<script>
import DetailBar from '../src/DetailBar.vue'

import {mapGetters} from 'vuex'

export default {
    name: 'InSequence',
    components: {
        DetailBar
    },
    computed: {
        detailData(){
            if(this.$route.path == '/detail/time'){
                return this.inTimeData
            }else if(this.$route.path == '/detail/amount'){
                return this.inAmountData
            }
        },
        ...mapGetters(['inTimeData', 'inAmountData']),
    },
    created(){
        console.log('载入全局数据')
    }
}
</script>

<style>

</style>