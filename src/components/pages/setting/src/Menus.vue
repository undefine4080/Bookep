<template>
<div class="menu radiu theme-color font outer-shadow">
    <div class="menu-title h-row-center" @click="openMenuItems" :class="{'menu-title-open':menuItemsActive}">{{data.title}}</div>
    <transition name="fade">
        <div class="menu-items theme-color" v-if="isMenuItemsOpen">
            <div class="menu-item mark three-col point" v-for="(menuItem, index) in data.menuItem" :key="index">
                <div>{{menuItem.account || menuItem}}</div>

                <div v-if="data.type === 'M'">{{menuItem.volume}}</div>
                <div v-else></div>

                <div class="wh-row-center" v-if="data.type === 'M'">
                    <icon-button :data="{icon: 'edit'}" class="menu-item-btn" @handle="editItem(index)"></icon-button>
                </div>
                <div class="wh-row-center" v-else>
                    <icon-button :data="{icon: 'delete'}" class="menu-item-btn" @handle="deleteItem(menuItem)"></icon-button>
                </div>
            </div>

            <div class="menu-item mark point theme-color wh-row-center" v-if="data.type === 'AD'">
                <div class="menu-item-btn w-row-center">
                    <icon-button :data="{icon: 'add'}" @handle="addItem()"></icon-button>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import IconButton from '../../../common/IconButton.vue'
import {
    mapMutations
} from 'vuex'

export default {
    name: 'Menus',
    components: {
        IconButton
    },
    props: {
        data: {
            type: Object
        }
    },
    data() {
        return {
            isMenuItemsOpen: false,
            menuItemsActive: false,
        }
    },
    computed: {
        ...mapMutations(['closeSettingPopBox', 'openSettingPopBox']),
        balanceData() {
            return JSON.parse(localStorage.getItem('balance'))
        }
    },
    methods: {
        openMenuItems() {
            this.menuItemsActive = !this.menuItemsActive
            this.isMenuItemsOpen = !this.isMenuItemsOpen
        },
        addItem() {
            console.log("添加项目")
            // 去掉 “设置” 两个字
            let [...title] = this.data.title
            title.pop()
            title.pop()
            let temp = title.join('').toString()

             this.$store.commit('openSettingPopBox', {
                type: 'input',
                target: temp,
                flag: this.data.flag
            })
        },
        editItem(item) {
            console.log("编辑项目")
            this.$store.commit('openSettingPopBox', {
                type: 'input',
                target: item,
                flag: this.data.flag
            })
        },
        deleteItem(item) {
            console.log("删除项目")
            this.$store.commit('openSettingPopBox', {
                type: 'confirm',
                target: item,
                flag: this.data.flag
            })
        }
    }
}
</script>

<style lang="scss">
.menu {
    width: auto;
    margin: 5%;
}

.menu-title {
    width: 100%;
    height: 40px;
    text-indent: 20px;
}

.menu-title-open {
    border-radius: 15px 15px 0 0;
}

.menu-items {
    width: auto;
    height: auto;
    box-sizing: border-box;
    border-radius: 0 0 15px 15px;
    font-size: 0.8rem;
}

.menu-item {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid rgb(236, 236, 236);

    &:last-child {
        border-radius: 0 0 15px 15px;
    }

    div:last-child {
        width: 100%;
        height: 85%;
        box-sizing: border-box;
    }
}
</style>
