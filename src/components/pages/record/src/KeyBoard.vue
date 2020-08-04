<template>
  <div class="key-board color">
      <div class="key wh-row-center font outer-shadow point" v-for="(key, index) in keyCode" :key="index">{{key}}</div>
  </div>
</template>

<script>
export default {
    name:'KeyBoard',
    data(){
        return{
            keyCode: [1,2,3,4,5,6,7,8,9,'.',0,'00','Clear','Del','OK']
        }
    }
}
</script>

<style lang="scss">
.key-board{
    width: 100%;
    height: 40%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    padding: 20px;
    gap: 20px;
}

.key{
    border-radius: 5px;
}
</style>