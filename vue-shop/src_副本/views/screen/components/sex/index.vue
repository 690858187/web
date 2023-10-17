<template>
    <div class="box1">
        <div class="top">
            <p class="title">男女比例</p>
            <p class="bg"></p>
        </div>
        <div class="sex">
            <div class="man">
                <div class="rate">
                    男士58%
                </div>
                <img src="../../images/man.png" alt="" class="img" />
            </div>
            <div class="women">
                <div class="rate">
                    女士42%
                </div>
                <img src="../../images/woman.png" alt="" class="img" />
            </div>
        </div>
        <div class="charts" ref="charts">

        </div>
    </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import 'echarts-liquidfill'
type EChartsOption = echarts.EChartsOption;

var option: EChartsOption;

let charts = ref();

onMounted(() => {
    let mycharts = echarts.init(charts.value);
    mycharts.setOption({
        //组件标题
        title: {
            // text: '男女比例', //主标题
            // textStyle: {
            //     //主标题颜色
            //     color: 'skyblue',
            // },
            // left: '20%',
        },
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 50,
        },
        //x|y
        xAxis: {
            show: false,
            min: 0,
            max: 100,
        },
        yAxis: {
            show: false,
            type: 'category',
        },
        label: {
            show: true,
            position: 'top',
            distance: 5,
            color: '#fff'
        },
        stack: 'total',
        series: [
            {
                type: 'bar',
                data: [58],
                barWidth: 20,
                z: 100,
                itemStyle: {
                    color: 'skyblue',
                    borderRadius: 10,
                },
                label: {
                    formatter: ['男士58%'].join('\n'),
                }
            },
            {
                type: 'bar',
                data: [42],
                barWidth: 20,
                //调整女士柱条位置
                barGap: '-100%',
                itemStyle: {
                    color: 'pink',
                    borderRadius: 10,
                },
                label: {
                    formatter: ['女士42%'].join('\n'),
                }
            },
        ],
    })
})

</script>

<script lang="ts">
export default {
    name: "Sex"
}
</script>

<style  lang="scss" scoped>
.box1 {
    margin-top: 15px;
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
        }

    }

    .sex {
        margin-top: 60px;
        display: flex;
        justify-content: center;

        .man {
            width: 111px;
            height: 115px;
            background: url(../../images/man-bg.png) no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            flex-direction: column;

            .rate {
                color: white;
            }
        }

        .women {
            width: 111px;
            height: 115px;
            background: url(../../images/woman-bg.png) no-repeat;
            background-size: 100% 100%;
            display: flex;
            align-items: center;
            flex-direction: column;

            .rate {
                color: white;
            }
        }
    }



    .charts {
        padding-left: 15px;
        padding-right: 15px;
        width: 100%;
        height: 80px;
    }
}
</style>