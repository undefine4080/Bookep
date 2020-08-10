<template>
  <div class="option-bar w-row-between h-row-center theme-color">
    <icon-button :data="data.left"></icon-button>

    <icon-button v-if="isCenterIcon" :data="data.center"></icon-button>
    <div v-else class="page-title font">{{data.center}}</div>

    <icon-button :data="data.right" @handle="messageTo"></icon-button>
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