<template>
  <div class="in-account page w-row-center">
    <div class="inaccount-nav base-color outer-shadow">
      <div class="inaccount-nav-item wh-row-center point" v-for="(item, index) in inAccountData" :key="index" @click="setCurAccount(index)">{{item.title}}</div>
    </div>
    <div class="inaccount-content">
      <detail-bar :data="item" v-for="(item, index) in curAccountData" :key="index"></detail-bar>
    </div>
  </div>
</template>

<script>
import DetailBar from '../src/DetailBar.vue'
import {mapGetters} from 'vuex'

export default {
    name: 'InAccount',
    data(){
      return{
        curIndex: 0
      }
    },
    components: {
        DetailBar
    },
    computed: {
        ...mapGetters(['inAccountData']),
        curAccountData(){
          console.log(this.inAccountData[this.curIndex].data)
          return this.inAccountData[this.curIndex].data
        }
    },
    methods: {
      setCurAccount(index){
        this.curIndex = index
      }
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