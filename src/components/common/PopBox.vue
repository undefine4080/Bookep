<template>
  <div class="pop-box page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PopBox'
}
</script>

<style lang="scss">
.pop-box{
    position: absolute;
    z-index: 10;
    background-color: rgba(73, 73, 73, 0.7);
    left: 0;
    top: 0;
}
</style>