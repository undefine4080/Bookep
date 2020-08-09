<template>
<div class="key-board base-color" @click="silence">
    <div class="key wh-row-center font outer-shadow point theme-color" v-for="(key, index) in keyCode" :key="index" @click.stop="inputNum(key)">{{key}}</div>
    <div class="key wh-row-center font outer-shadow point theme-color" @click.stop="clearNum">Clear</div>
    <div class="key wh-row-center font outer-shadow point theme-color" @click.stop="deleteNum">Del</div>
    <div class="key wh-row-center font outer-shadow point theme-color" @click.stop="finishNum">OK</div>
</div>
</template>

<script>
export default {
    name: 'KeyBoard',
    data() {
        return {
            keyCode: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '00'],
            num: [],
            hasDot: false
        }
    },
    methods: {
        inputNum(key) {
            // 避免 多个小数点和 高位为0 的情况
            this.num.forEach(e => {
                if (e == '.') {
                    this.hasDot = true
                } else if (this.num[0] == '0' && this.num[1] !== '0') {
                    this.num = []
                }
            })

            if (!this.hasDot) {
                this.num.push(key)
                this.$store.commit('syncRecord', {
                    title: 'amount',
                    data: this.num.join('')
                })
            } else {
                if (key == '.') {
                    return
                } else {
                    this.num.push(key)
                    this.$store.commit('syncRecord', {
                        title: 'amount',
                        data: this.num.join('')
                    })
                }
            }

        },
        silence(e) {
            e.stopPropagation()
        },
        clearNum(){
            this.num = []
            this.$store.commit('syncRecord', {
                        title: 'amount',
                        data: '0'
                    })
            this.hasDot = false
        },
        deleteNum(){
            this.num.pop()
            this.$store.commit('syncRecord', {
                        title: 'amount',
                        data: this.num.join('')
                    })
        },
        finishNum(){
            this.$store.commit('closePopBox')
        }
    }
}
</script>

<style lang="scss">
.key-board {
    width: 100%;
    height: 40%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    padding: 20px;
    gap: 20px;
}

.key {
    border-radius: 5px;
}
</style>
