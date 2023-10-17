<template>
    <div class="back">
        <div class="top">
            <p class="title">年度游客量对比</p>
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
    for (let i = 0; i < 12; i++) {
        let num = Math.floor(Math.random() * 1000 + 10);
        datas.push(num);
    }
    return datas.reverse();
}

const getDays = () => {
    moment.locale('zh-cn');
    var days: string[] = [];
    for (let i = 0; i < 12; i++) {
        let day = i + 1 + '月';
        days.push(day);
    }
    return days;
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
    legend: {
        top: 36,
        data: ['2020年', '2021年', '2022年']
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
            name: '(人数)',
            type: 'value',
            splitLine: {
                show: false,
            }
        }
    ],
    series: [
        {
            name: '2020年',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 1
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.6,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
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
        },
        {
            name: '2021年',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 1
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.6,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 54, 135)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(135, 32, 157)'
                    }
                ])
            },
            emphasis: {
                focus: 'series'
            },
            data: getData()
        },
        {
            name: '2022年',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
                width: 1
            },
            showSymbol: false,
            areaStyle: {
                opacity: 0.6,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(125, 191, 89)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(224, 62, 76)'
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
    name: "Year"
}
</script>



<style  lang="scss" scoped>
.back {
    margin-top: 15px;
    background: url(../../images/dataScreen-main-lb.png) no-repeat;
    background-size: cover;

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
        }
    }

    .charts {
        width: 100%;
        height: 100%;
    }
}
</style>