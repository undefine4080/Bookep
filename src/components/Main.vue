<template>
<div class="main page font base-color">
    <option-bar :data="optBarData" class="base-color"></option-bar>

    <div class="view-content wh-col-center">
        <div class="main-btns outer-shadow radiu gap">
            <div class="main-btn theme-color point">
                <router-link class="route-a" to="/record/payment">支出</router-link>
            </div>
            <div class="main-btn theme-color point">
                <router-link class="route-a" to="/record/income">收入</router-link>
            </div>
        </div>

        <div class="option-btns outer-shadow radiu gap">
            <div class="option-btn theme-color point">
                <router-link class="route-a" to="/balance">余额</router-link>
            </div>
            <div class="option-btn theme-color point">
                <router-link class="route-a" to="/detail/time">明细</router-link>
            </div>
            <div class="option-btn theme-color point">
                <router-link class="route-a" to="/statistic">统计</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import OptionBar from '../components/common/OptionBar.vue'

export default {
    name: 'Main',
    components: {
        OptionBar
    },
    data() {
        return {
            optBarData: {
                left: {
                    icon: 'theme',
                    route: '/theme'
                },
                center: '',
                right: {
                    icon: 'setting',
                    route: '/setting'
                }
            },
            forBalance: null
        }
    }
}
</script>

<style lang="scss">
.main-btns {
    width: 55%;
    height: 55%;
    // background-color: rgb(245, 245, 245);
    margin-bottom: 10%;
}

.main-btn {
    width: 100%;
    height: 50%;
    font-size: 1.5rem;

    &:first-child {
        border-radius: 15px 15px 0 0;
        margin-bottom: 1px;
    }

    &:last-child {
        border-radius: 0 0 15px 15px;
    }
}

.option-btns {
    width: 55%;
    height: 6%;
    // background-color: rgb(245, 245, 245);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.option-btn {
    align-items: center;
    font-size: 0.9rem;

    &:first-child {
        border-radius: 15px 0 0 15px;
    }

    &:last-child {
        border-radius: 0 15px 15px 0;
    }

    &:first-child+div {
        margin: 0 1px;
    }
}
</style>
