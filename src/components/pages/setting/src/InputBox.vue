<template>
<div class="input-box radiu theme-color outer-shadow font" @click="silence">
    <div class="input-title down-shadow theme-color wh-row-center">请输入新类别的名称</div>
    <div class="input-content wh-row-center">
        <input type="number" class="setting-input inner-shadow" v-model="inputText" />
    </div>
    <div class="input-btns wh-row-center up-shadow">
        <div class="input-btn wh-row-center point theme-color" @click="closeinput">取消</div>
        <div class="input-btn wh-row-center point theme-color" @click="confirm(data,inputText)">确认</div>
    </div>
</div>
</template>

<script>
export default {
    name: 'InputBox',
    data() {
        return {
            inputText: ''
        }
    },
    props: ['data'],
    methods: {
        silence(e) {
            e.stopPropagation()
        },
        closeinput() {
            this.$store.commit('initBaseData')
            this.$store.commit('closeSettingPopBox')
        },
        confirm(data) {
            this.$emit('handle', {
                data: this.data,
                value: this.inputText
            })
            this.closeinput()
        }
    }
}
</script>

<style lang="scss">
.input-box {
    width: 60%;
    height: 25%;
}

.input-title {
    height: 15%;
    width: 100%;
    border-radius: 15px 15px 0 0;
    position: relative;
    z-index: 100;
}

.input-content {
    width: 100%;
    height: 70%;
    padding: 10%;
    box-sizing: border-box;
}

.input-btns {
    width: 100%;
    height: 15%;
    border-radius: 0 0 15px 15px;
    background-color: rgb(241, 241, 241);
}

.input-btn {
    width: 50%;
    height: 100%;

    &:first-child {
        border-radius: 0 0 0 15px;
        margin-right: 1px;
    }

    &:last-child {
        border-radius: 0 0 15px 0;
    }
}

.setting-input {
    width: 100%;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-size: 2rem;
    border-radius: 5px;
    border: none;
    outline: 0;
    padding: 5px 0;
}
</style>
