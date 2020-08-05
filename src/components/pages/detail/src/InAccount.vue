<template>
  <div class="in-account page w-row-center">
    <div class="inaccount-nav theme-color outer-shadow">
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
      <div class="inaccount-nav-item wh-row-center point">菜单项1</div>
    </div>
    <div class="inaccount-content">
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
      <detail-bar></detail-bar>
    </div>
  </div>
</template>

<script>
import DetailBar from '../src/DetailBar.vue'

export default {
    name: 'InAccount',
    components: {
        DetailBar
    }
}
</script>

<style lang="scss">
.inaccount-nav,
.inaccount-content {
  box-sizing: border-box;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
}

.inaccount-nav {
  width: 20%;
}

.inaccount-content {
  width: 80%;
}

.inaccount-nav-item {
  width: 100%;
  height: 10%;
  margin-bottom: 1px solid rgb(245, 245, 245);
}
</style>