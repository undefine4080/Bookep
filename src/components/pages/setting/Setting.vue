<template>
<div class="settings page">
    <option-bar :data="optBarData" class="down-shadow theme-color"></option-bar>
    <div class="view-content base-color">
        <menus :data="menuData.settingAccount"></menus>
        <menus :data="menuData.volumeAccount"></menus>
        <menus :data="menuData.useCategories"></menus>
        <menus :data="menuData.originCategories"></menus>
        <div id="clearData" class="outer-shadow wh-row-center">清除所有数据</div>
    </div>

    <pop-box v-if="settingPageData.popBoxOpenFlag" class="wh-row-center" @handle="closePopBox">
        <confirm-box v-if="settingPageData.confirmBoxOpenFlag" :data="settingPageData.dataForPopBox" @handle="confirmToDelete"></confirm-box>
        <input-box v-if="settingPageData.inputBoxOpenFlag" :data="settingPageData.dataForPopBox" @handle="confirmToModify"></input-box>
    </pop-box>
</div>
</template>

<script>
import OptionBar from '../../common/OptionBar.vue'
import Menus from './src/Menus.vue'
import PopBox from '../../common/PopBox.vue'
import ConfirmBox from './src/ConfirmBox.vue'
import InputBox from './src/InputBox.vue'

import {
    mapState
} from 'vuex'

export default {
    name: 'Setting',
    components: {
        OptionBar,
        Menus,
        PopBox,
        ConfirmBox,
        InputBox
    },
    data() {
        return {
            optBarData: {
                left: {
                    icon: 'back',
                    route: '/main'
                },
                center: '设置',
                right: {}
            }
        }
    },
    computed: {
        ...mapState(['account', 'way', 'settingPageData','balance']),
        menuData() {
            return {
                settingAccount: {
                    title: '账户设置',
                    type: 'AD',
                    menuItem: this.account,
                    flag: 's'
                },
                volumeAccount: {
                    title: '账户额度设置',
                    type: 'M',
                    menuItem: this.balance,
                    flag: 'v'
                },
                useCategories: {
                    title: '支出类别设置',
                    type: 'AD',
                    menuItem: this.way.use,
                    flag: 'u'
                },
                originCategories: {
                    title: '收入类别设置',
                    type: 'AD',
                    menuItem: this.way.origin,
                    flag: 'o'
                }
            }
        }
    },
    provide: {
        isMenuItemsOpen: false
    },
    methods: {
        closePopBox() {
            this.$store.commit('initBaseData')
            this.$store.commit('closeSettingPopBox')
        },
        deleteAction(dataName, data) {
            let temp
            let index
            if (dataName === 'use' || dataName === 'origin') {
                temp = JSON.parse(localStorage.getItem('way'))
                for (let i = 0; i < temp[dataName].length; i++) {
                    if (temp[dataName][i] === data.target) {
                        index = i
                    } else {
                        continue
                    }
                }
                temp[dataName].splice(index, 1)
                console.log(temp)
                localStorage.setItem('way', JSON.stringify(temp))
            } else {
                temp = JSON.parse(localStorage.getItem(dataName))
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].account === data.target) {
                        index = i
                    } else {
                        continue
                    }
                }
                temp.splice(index, 1)

                localStorage.setItem(dataName, JSON.stringify(temp))
                console.log(temp, "删除账户")
            }
        },
        confirmToDelete(data) {
            console.log(data)
            // 判断从哪个 数据库删除
            if (data.type === 'u') {
                this.deleteAction('use', data)
                return
            } else if (data.type === 'o') {
                this.deleteAction('origin', data)
                return
            } else if (data.type === 's') {
                this.deleteAction('balance', data)
                return
            }
        },
        confirmToModify(inputData) {
            let temp = JSON.parse(localStorage.getItem('balance'))
            temp[inputData.data.target].volume = parseFloat(inputData.value)
            localStorage.setItem('balance', JSON.stringify(temp))
        }
    }
}
</script>

<style lang="scss">
#clearData {
    width: 90%;
    margin: 5%;
    height: 40px;
    box-sizing: border-box;
    background-color: rgb(224, 85, 85);
    color: white;
    text-shadow: wheat 0 0 2px;
    border-radius: 10px;
    transition: all 0.5s;
    letter-spacing: 3px;

    &:hover {
        transform: scale(1.05);
    }
}
</style>
