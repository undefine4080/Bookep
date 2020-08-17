<template>
<div class="statistic page font base-color">
    <option-bar :data="topOptBarData" class="down-shadow"></option-bar>

    <div class="statistic-area option-content">
        <div class="charts radiu outer-shadow theme-color">
            <div class="chart-title wh-row-center mark">支出趋势图</div>
            <div id="line-map" class="chart-content wh-row-center"></div>
        </div>

        <div class="charts radiu outer-shadow theme-color">
            <div class="chart-title wh-row-center mark">支出类别图</div>
            <div id="pie-map" class="chart-content wh-row-center"></div>
        </div>

        <div class="charts radiu outer-shadow theme-color">
            <div class="chart-title wh-row-center mark">支出账户图</div>
            <div id="block-map" class="chart-content wh-row-center"></div>
        </div>
    </div>

    <div class="statistic-btns up-shadow wh-row-center theme-color">
        <div class="wh-row-center point">支出</div>
        <div class="wh-row-center point">收入</div>
    </div>
</div>
</template>

<script>
import OptionBar from '../../common/OptionBar.vue'
import {
    lineMapData,
    pieMapData,
    blockMapData,
    getLineMapData
} from './src/data.js'

import {
    mapState
} from 'vuex'

export default {
    name: 'Statistic',
    components: {
        OptionBar
    },
    data() {
        return {
            topOptBarData: {
                left: {
                    icon: 'back',
                    route: '/main'
                },
                center: '统计',
                right: {}
            },
            chartData: [{
                el: 'line-map',
                data: lineMapData
            }, {
                el: 'pie-map',
                data: pieMapData
            }, {
                el: 'block-map',
                data: blockMapData
            }]
        }
    },
    methods: {
        generateLineMapData() {
          //console.log(this.globalDB)

          for(let i=0; i<this.globalDB.length; i++){
            console.log(this.globalDB[i].time.getMonth())
          }
        },
        draw(chartData) {
            for (let i = 0; i < chartData.length; i++) {
                const board = this.$echarts.init(
                    document.getElementById(chartData[i].el)
                );
                board.setOption(chartData[i].data);
            }
        }
    },
    computed: {
        ...mapState(['globalDB'])
    },
    beforeMount() {
        this.$store.commit('getGlobalRecordData')
        this.generateLineMapData()
    },
    mounted() {
        this.draw(this.chartData)
    }
}
</script>

<style lang="scss">
.statistic-btns {
    width: 100%;
    height: 7%;
    box-sizing: border-box;
    position: relative;
    z-index: 10;
    background-color: rgb(228, 228, 228);

    div {
        width: 50%;
        height: 100%;
    }
}

.charts {
    width: auto;
    height: 60%;
    box-sizing: border-box;
    margin: 5%;
}

.chart-title {
    width: 100%;
    height: 10%;
}

.chart-content {
    width: 100%;
    height: 90%;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
}
</style>
