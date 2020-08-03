<template>
  <div class="main page color">
    <option-bar :data="optBarData" class="down-shadow"></option-bar>
  </div>
</template>

<script>
import OptionBar from '../components/common/OptionBar.vue'

export default {
  name: 'Main',
  components: {
    OptionBar
  },
  data() {
    return {
      optBarData: {
        left: {
          icon: 'theme',
          route: '/theme'
        },
        center:'中间',
        right: {
          icon: 'setting',
          route: '/setting'
        }
      }
    }
  }
}
</script>

<style lang="scss">

</style>