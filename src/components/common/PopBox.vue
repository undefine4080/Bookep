<template>
  <div class="pop-box page" @click="close">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'PopBox',
  methods: {
    close(){
      this.$emit('handle')
    }
  }
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