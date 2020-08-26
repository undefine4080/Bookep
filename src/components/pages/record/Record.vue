<template>
  <div class="record page base-color font">
    <option-bar
      :data="optBarData"
      :isSetAmount="setAmount"
      class="down-shadow"
      @confirm="addRecord"
    ></option-bar>

    <div class="view-content wh-col-around">
      <card :title="cardData.amountCard" @handle="openPopBox('keyboard')"></card>

      <card v-if="whichCard" :title="cardData.useCard" @handle="openPopBox('usebox')"></card>

      <card v-else :title="cardData.originCard" @handle="openPopBox('originbox')"></card>

      <card :title="cardData.accountCard" @handle="openPopBox('accountbox')"></card>

      <note ref="noteComp"></note>
    </div>

    <transition name="fade">
      <pop-box
        v-if="recordPageData.popBoxOpenFlag"
        @handle="closePopBox"
        :class="{'wh-row-center': recordPageData.selectBoxFlag.openFlag, 'h-row-bottom': recordPageData.keyBoardOpenFlag}"
      >
        <select-box
          v-if="recordPageData.selectBoxFlag.openFlag"
          :data="recordPageData.selectBoxFlag"
        ></select-box>
        <key-board v-if="recordPageData.keyBoardOpenFlag"></key-board>
      </pop-box>
    </transition>
  </div>
</template>

<script>
import {
    mapState
} from 'vuex'

import OptionBar from '../../common/OptionBar.vue'
import Card from './src/Card.vue'
import Note from './src/Note.vue'
import PopBox from '../../common/PopBox.vue'
import SelectBox from './src/SelectBox.vue'
import keyBoard from './src/KeyBoard.vue'

import DB from '../../../api/db.js'

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
                amountCard: '金额',
                originCard: '来源',
                useCard: '用途',
                accountCard: '账户'
            },
            setAmount: false
        }
    },
    computed: {
        ...mapState(['recordPageData', 'curRecordData']),
        whichCard() {
            if (this.$route.params.id == 'payment') {
                return true
            } else {
                return false
            }
        }
    },
    methods: {
        openPopBox(flag) {
            this.$store.commit('openRecordPopBox', flag)
            if (flag == 'keyboard') {
                this.setAmount = true
            }else{
                return
            }
        },
        closePopBox() {
            this.$store.commit('closeRecordPopBox')
        },
        addRecord() {
            this.$refs.noteComp.commitNote()

            let realAmount = ((flag) => {
                if (flag !== null) {
                    return -parseFloat(this.curRecordData.amount)
                } else {
                    return parseFloat(this.curRecordData.amount)
                }
            })(this.curRecordData.use)

            const newRecord = {
                account: this.curRecordData.account,
                time: new Date(),
                use: this.curRecordData.use,
                origin: this.curRecordData.origin,
                amount: realAmount,
                note: this.curRecordData.note
            }

            DB.add('record', newRecord)

            this.saveAndBack()
        },
        saveAndBack() {
            this.$store.commit('resetRecordView')
            this.$router.push('/main')
            console.log('添加数据成功')
        }
    },
    beforeMount() {
        if (this.optBarData.center == '支出') {
            this.$store.commit('resetRecordView', true)
        } else {
            this.$store.commit('resetRecordView', false)
        }
    },
    beforeCreate(){
        this.$store.commit('initBaseData')
    }
}
</script>

<style lang="scss">
</style>
