<template>
<div class="menu radiu theme-color font outer-shadow">
    <div class="menu-title h-row-center" @click="openMenuItems" :class="{'menu-title-open':menuItemsActive}">{{data.title}}</div>
    <transition name="fade">
        <div class="menu-items theme-color" v-if="isMenuItemsOpen">
            <div class="menu-item mark three-col point" v-for="(menuItem, index) in data.menuItem" :key="index">
                <div>{{menuItem}}</div>

                <div v-if="data.type === 'M'">550</div>
                <div v-else></div>

                <div class="wh-row-center" v-if="data.type === 'M'">
                    <icon-button :data="{icon: 'edit'}" class="menu-item-btn" @handle="editItem"></icon-button>
                </div>
                <div class="wh-row-center" v-else>
                    <icon-button :data="{icon: 'delete'}" class="menu-item-btn" @handle="deleteItem(menuItem)"></icon-button>
                </div>
            </div>

            <div class="menu-item mark point theme-color wh-row-center" v-if="data.type === 'AD'">
                <div class="menu-item-btn w-row-center">
                    <icon-button :data="{icon: 'add'}" @handle="addItem"></icon-button>
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
        ...mapMutations(['closeSettingPopBox', 'openSettingPopBox'])
    },
    methods: {
        openMenuItems() {
            this.menuItemsActive = !this.menuItemsActive
            this.isMenuItemsOpen = !this.isMenuItemsOpen
        },
        addItem() {
            console.log("添加项目")
            this.$store.commit('openSettingPopBox', 'input')
        },
        editItem() {
            console.log("编辑项目")
            this.$store.commit('openSettingPopBox', 'input')
        },
        deleteItem(item) {
            console.log("删除项目")
            switch (this.data.flag) {
                case 'u':
                    this.$store.commit('openSettingPopBox', {
                        type: 'confirm',
                        target: item,
                        flag: 'u'
                    })
                    break
                case 'o':
                    this.$store.commit('openSettingPopBox', {
                        type: 'confirm',
                        target: item,
                        flag: 'o'
                    })
                    break
                case 's':
                    this.$store.commit('openSettingPopBox', {
                        type: 'confirm',
                        target: item,
                        flag: 's'
                    })
                    break
                case 'v':
                    this.$store.commit('openSettingPopBox', {
                        type: 'confirm',
                        target: item,
                        flag: 'v'
                    })
                    break
            }
        },
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
