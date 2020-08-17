<template>
  <!-- <div class="option-bar w-row-between h-row-center theme-color"> -->
  <div class="option-bar three-col theme-color">
    <icon-button :data="data.left" :class="whenTopStyle.left"></icon-button>

    <icon-button v-if="isCenterIcon" :data="data.center"></icon-button>
    <div v-else class="page-title font">{{data.center}}</div>

    <icon-button v-show="isSetAmount" :data="data.right" :class="whenTopStyle.right" @handle="messageTo"></icon-button>
  </div>
</template>

<script>
import IconButton from '../common/IconButton.vue'

export default {
  name: 'OptionBar',
  components: {
    IconButton
  },
  props: {
    data: {
      type: Object
    },
    isSetAmount: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    isCenterIcon(){
      if(this.data.center instanceof Object){
        return true
      }else if(typeof this.data.center == "string"){
        return false
      }else{
        return false
      }
    },
    whenTopStyle(){
      if(this.isCenterIcon){
        return {
          left: '',
          right: ''
        }
      }else{
        return {
          left: 'grid-item-left',
          right: 'grid-item-right'
        }
      }
    }
  },
  methods: {
    messageTo(){
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss">
.option-bar {
  width: 100%;
  height: 7%;
  box-sizing: border-box;
  position: relative;
  z-index: 10;
}
</style>