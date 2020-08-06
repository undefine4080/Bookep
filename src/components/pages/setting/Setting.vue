<template>
<div class="settings page">
    <option-bar :data="optBarData" class="down-shadow theme-color"></option-bar>
    <div class="view-content base-color">
        <menus :data="menuItem" v-for="(menuItem, index) of menuData" :key="index"></menus>
        <div id="clearData" class="outer-shadow wh-row-center">清除所有数据</div>
    </div>
</div>
</template>

<script>
import OptionBar from '../../common/OptionBar.vue'
import Menus from './src/Menus.vue'

import {
    mapState
} from 'vuex'

export default {
    name: 'Setting',
    components: {
        OptionBar,
        Menus
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
        ...mapState(['account']),
        menuData(){
            return {
                settingAccount: {
                    title: '账户设置',
                    menuItem: this.account
                },
                volumeAccount: {
                    title: '账户额度设置',
                    menuItem: this.account
                }
            }
        }
    },
    provide: {
        isMenuItemsOpen: false
    }
}
</script>

<style lang="scss">
#clearData{
    width: 90%;
    margin: 5%;
    height: 40px;
    box-sizing: border-box;
    background-color: rgb(224, 85, 85);
    color: white;
    text-shadow: wheat  0 0 2px;
    border-radius: 10px;
    transition: all .5s;
    letter-spacing: 3px;
    &:hover{
        transform: scale(1.05);
    }
}
</style>
