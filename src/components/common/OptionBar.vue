<template>
  <div class="option-bar w-row-between h-row-center">
    <icon-button :data="data.left"></icon-button>
    <div class="page-title font">{{data.center}}</div>
    <icon-button :data="data.right"></icon-button>
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
  }
}
</script>

<style lang="scss">
.option-bar {
  width: 100%;
  height: 7%;
}
</style>