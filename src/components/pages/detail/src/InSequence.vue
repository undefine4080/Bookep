<template>
  <div class="in-sequence">
      <!-- <div class="sequence-item" v-if="routeFlag">{{time}}</div>
      <div class="sequence-item" v-if="!routeFlag">{{amount}}</div> -->
      <detail-bar></detail-bar>
  </div>
</template>

<script>
import DetailBar from '../src/DetailBar.vue'

export default {
    name: 'InSequence',
    components: {
        DetailBar
    },
    data(){
        return{
            time: '按时间',
            amount: '按大小'
        }
    },
    computed: {
        routeFlag(){
            if(this.$route.path == '/detail/time'){
                return true
            }else if(this.$route.path == '/detail/amount'){
                return false
            }
        }
    }
}
</script>

<style>

</style>