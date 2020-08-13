<template>
  <div class="balance page font base-color">
    <option-bar :data="optBarData" class="down-shadow theme-color"></option-bar>
    <div class="balance-cards view-content">
      <div class="balance-card outer-shadow radiu theme-color" v-for="(item, index) in getBalanceData" :key="index">
        <div class="balance-card-item wh-row-center">{{item.account}}</div>
        <!-- <div class="balance-card-item wh-row-center">{{}}</div> -->
        <div class="balance-card-item wh-row-center">{{item.volume}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import OptionBar from '../../common/OptionBar.vue'
import {mapGetters} from 'vuex'

export default {
  name: 'Balance',
  components: {
    OptionBar
  },
  data() {
    return {
      optBarData: {
        left: {
          icon: 'back',
          route: '/main'
        },
        center: '账户余额',
        right: {}
      },
      trick:null
    }
  },
  computed: {
    ...mapGetters(['getBalanceData'])
  },
  beforeMount(){
    this.$store.commit('getGlobalRecordData')
  }
}
</script>

<style lang="scss">
.balance-card {
  width: auto;
  height: 10%;
  margin: 3%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.balance-card-item {
  font-weight: bold;
  font-size: 1.2rem;
  &:first-child {
    border-radius: 15px 0 0 15px;
  }
  &:last-child {
    border-radius: 0 15px 15px 0;
  }
  &:first-child + div {
    margin: 0 1px;
  }
}
</style>