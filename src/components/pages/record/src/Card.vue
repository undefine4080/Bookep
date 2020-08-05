<template>
  <div class="card radiu w-row-center outer-shadow">
    <div class="card-title theme-color wh-col-center">{{data.title}}</div>
    <div class="card-btn theme-color wh-row-center">{{data.btn}}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
      data:{
          type: Object
      }
  }
}
</script>

<style lang="scss">
.card {
  width: 70%;
  height: 16%;
  background-color: rgb(240, 240, 240);
}

.card-title{
    width: 18%;
    height: 100%;
    border-radius: 15px 0 0 15px;
    writing-mode: vertical-lr;
    font-size: 1.1rem;
    font-weight: 500;
}

.card-btn{
    width: 82%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    margin-left: 1px;
    font-size: 2rem;
}
</style>