<template>
  <div class="record page color font">
    <option-bar :data="optBarData" class="down-shadow color"></option-bar>
    <div class="view-content wh-col-around">
      <card :data="cardData.amountCard"></card>
      <card v-if="whichCard" :data="cardData.useCard"></card>
      <card v-if="!whichCard" :data="cardData.originCard"></card>
      <card :data="cardData.accountCard"></card>
      <note></note>
    </div>

    <pop-box class="wh-row-center" v-if="popBoxOpenFlag.selectBox">
      <select-box></select-box>
    </pop-box>
    <pop-box class="h-row-bottom" v-if="popBoxOpenFlag.keyBoard">
      <key-board></key-board>
    </pop-box>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import OptionBar from '../../common/OptionBar.vue'
import Card from './src/Card.vue'
import Note from './src/Note.vue'
import PopBox from '../../common/PopBox.vue'
import SelectBox from './src/SelectBox.vue'
import keyBoard from './src/KeyBoard.vue'

export default {
  name: 'Record',
  components: {
    OptionBar,
    Card,
    Note,
    PopBox,
    SelectBox,
    keyBoard
  },
  data() {
    return {
      popBoxOpenFlag: {
        selectBox: false,
        keyBoard: false
      },
      optBarData: {
        left: {
          icon: 'back',
          route: '/main'
        },
        center: `${(function(id) {
          if (id == 'payment') {
            return '支出'
          } else {
            return '收入'
          }
        })(this.$route.params.id)}`,
        right: {
          icon: 'confirm'
        }
      },
      cardData: {
        amountCard: {
          title: '金额',
          btn: 0
        },
        originCard: {
          title: '来源',
          btn: '工资'
        },
        useCard: {
          title: '用途',
          btn: '购物'
        },
        accountCard: {
          title: '账户',
          btn: '支付宝'
        }
      }
    }
  },
  computed: {
    whichCard() {
      if (this.$route.params.id == 'payment') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss">
</style>