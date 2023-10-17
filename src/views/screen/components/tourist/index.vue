<template>
    <div class="back">
        <div class="top">
            <p class="title">未来30天游客量趋势图</p>
            <p class="bg"></p>
        </div>
        <div class="charts" ref="charts">
        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import moment from 'moment'
type EChartsOption = echarts.EChartsOption;

var option: EChartsOption;

let charts = ref();


onMounted(() => {
    let mychart = echarts.init(charts.value)
    mychart.setOption(option);
})

const getData = () => {
    moment.locale('zh-cn');
    let datas: number[] = [];
    for (let i = 0; i < 30; i++) {
        let num = Math.floor(Math.random() * 1000 + 10);
        datas.push(num);
    }
    return datas.reverse();
}

const getDays = () => {
    moment.locale('zh-cn');
    var days: string[] = [];
    for (let i = 0; i < 30; i++) {
        let day = moment().subtract(i, 'days').format('MM月DD日');
        days.push(day);
    }
    return days.reverse();
}

option = {
    textStyle: {
        color: 'white'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: getDays(),
            splitLine: {
                show: false
            }
        }
    ],
    yAxis: [
        {
            name: '访问量',
            type: 'value',
            splitLine: {
                show: false
            }
        }
    ],
    series: [
        {
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 0
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: '#80FFA5'
                    },
                    {
                        offset: 1,
                        color: '#00DDFF'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: getData()
        }
    ]
};

</script>

<script lang="ts">
export default {
    name: "Tourist"
}
</script>



<style  lang="scss" scoped>
.back {
    background: url(../../images/dataScreen-main-lb.png) no-repeat;
    background-size: 100% 100%;


    .top {
        margin-left: 20px;

        .title {
            color: white;
            font-size: 20px;
        }

        .bg {
            width: 68px;
            height: 7px;
            background: url(../../images/dataScreen-title.png) no-repeat;
            background-size: 100% 100%;
            margin-top: 10px;
        }
    }

    .charts {
        width: 100%;
        height: 200px;
    }
}
</style>