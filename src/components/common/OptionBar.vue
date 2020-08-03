<template>
  <div class="option-bar h-center color down-shadow">
    <icon-button :data="data.left"></icon-button>
    <div class="title">{{data.center}}</div>
    <icon-button :data="data.right" @handle="confirm"></icon-button>
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
  methods:{
      confirm(){
          return
      }
  }
}
</script>

<style lang="scss">
.option-bar {
  width: 100%;
  height: 7%;
  position: absolute;
  z-index: 10;
  justify-content: space-between;
}
</style>