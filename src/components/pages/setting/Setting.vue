<template>
  <div class="settings">
    <option-bar :data="optBarData" class="base-color"></option-bar>
  </div>
</template>

<script>
  export default {
    name: 'Setting',
    data() {
      return {
        optBarData: {
          left: {
            icon: 'back',
            route: '/theme'
          },
          center: '设置',
          right: {
            icon: 'setting',
            route: '/setting'
          }
        }
      }
    }
  }
</script>

<style>
</style>
