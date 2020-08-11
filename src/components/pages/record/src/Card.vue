<template>
<div class="card radiu w-row-center outer-shadow" @click="openPopBox">
    <div class="card-title theme-color wh-col-center">{{title}}</div>
    <div class="card-btn theme-color wh-row-center">{{cardContent}}</div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'

export default {
    name: 'Card',
    props: {
        title: {
            type: String
        }
    },
    methods: {
        openPopBox() {
            this.$emit('handle')
        }
    },
    computed: {
        ...mapState(['curRecordData']),
        cardContent() {
            switch (this.title) {
                case '金额':
                    return this.curRecordData.amount || '0'
                    break

                case '来源':
                    return this.curRecordData.origin || '工资'
                    break

                case '用途':
                    return this.curRecordData.use || '购物'
                    break

                case '账户':
                    return this.curRecordData.account || '支付宝'
                    break
            }
        }
    }
}
</script>

<style lang="scss">
.card {
    width: 70%;
    height: 16%;
    background-color: rgb(240, 240, 240);
}

.card-title {
    width: 18%;
    height: 100%;
    border-radius: 15px 0 0 15px;
    writing-mode: vertical-lr;
    font-size: 1.1rem;
    font-weight: 500;
}

.card-btn {
    width: 82%;
    height: 100%;
    border-radius: 0 15px 15px 0;
    margin-left: 1px;
    font-size: 2rem;
}
</style>
