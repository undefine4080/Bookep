<template>
<div class="input-box radiu base-color outer-shadow font" @click="silence">
    <div class="input-title down-shadow base-color wh-row-center">
        <span v-if="data.flag == 'v'">输入您定义的额度</span>
        <span v-else>输入新{{data.target}}的名称</span>
    </div>

    <div class="input-content wh-row-center">
        <input :type="InputType" class="setting-input inner-shadow" v-model="inputText" />
    </div>
    <div class="input-btns wh-row-center up-shadow gap">
        <div class="input-btn wh-row-center point base-color" @click="closeinput">取消</div>
        <div class="input-btn wh-row-center point base-color" @click="confirm(data,inputText)">确认</div>
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

            // console.log(this.data)
        },
        confirm(data) {
            this.$emit('handle', {
                data: this.data,
                value: this.inputText
            })
            this.closeinput()
        }
    },
    computed:{
        InputType(){
            if(this.data.flag == 'v'){
                return 'number'
            }else{
                return 'text'
            }
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
