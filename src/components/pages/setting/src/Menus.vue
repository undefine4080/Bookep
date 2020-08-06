<template>
<div class="menu radiu theme-color font outer-shadow">
    <div class="menu-title h-row-center" @click="openMenuItems" :class="{'menu-title-open':menuItemsActive}">{{data.title}}</div>
    <transition name="fade">
        <div class="menu-items theme-color" v-if="isMenuItemsOpen">
            <div class="menu-item mark three-col point" v-for="(menuItem, index) in data.menuItem" :key="index">
                <div>{{menuItem}}</div>
                <div>550</div>
                <div class="wh-row-center">
                    <icon-button :data="{icon: 'edit'}" class="menu-item-btn"></icon-button>
                </div>
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import IconButton from '../../../common/IconButton.vue'

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
    methods: {
        openMenuItems() {
            this.menuItemsActive = !this.menuItemsActive
            this.isMenuItemsOpen = !this.isMenuItemsOpen
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
    div:last-child{
        width: 100%;
        height: 100%;
    }
}

.menu-item-btn {
    width: 100% !important;
    height: 60% !important;
}
</style>
