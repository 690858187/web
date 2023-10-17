<template>
    <div class="box">
        <div class="top">
            <p class="title">实时游客统计</p>
            <p class="bg"></p>
            <p class="right"> <span>可预约总量 </span> <span class="">999999</span> <span>人</span></p>
        </div>
        <div class="number">
            <span v-for="item in people" class="total"> {{ item }}</span>
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
let people = ref('254636人');

onMounted(() => {
    let mycharts = echarts.init(charts.value);
    mycharts.setOption({
        //标题组件
        // title: {
        //     text: '水球图',
        // },
        // //x|y轴组件
        xAxis: {},
        yAxis: {},
        //系列:决定你展示什么样的图形图标
        series: {
            type: 'liquidFill', //系列
            data: [0.6, 0.4, 0.2, 0.1], //展示的数据
            waveAnimation: true, //动画
            animationDuration: 1,
            animationDurationUpdate: 0,
            radius: '70%', //半径
            outline: {
                //外层边框颜色设置
                show: true,
                borderDistance: 10,
                itemStyle: {
                    color: 'skyblue',
                    borderColor: '#294D99',
                    borderWidth: 8,
                    shadowBlur: 20,
                    shadowColor: 'rgba(0, 0, 0, 0.25)',
                },
            },
        },
        //布局组件
        grid: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        },
    })
})

</script>

<script lang="ts">
export default {
    name: "Person"
}
</script>


<style  lang="scss" scoped>
.box {
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

        .right {
            float: right;
            color: white;
            font-size: 20px;

            .span {
                color: orange;
            }
        }
    }

    .number {
        width: 100%;
        margin-top: 30px;
        display: flex;
        padding: 16px;

        .total {
            height: 50x;
            flex: 1;
            background: url(../../images/total.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            font-size: 25px;
            line-height: 50px;
            color: #29fcff;
        }
    }

    .charts {
        width: 100%;
        height: 200px;
    }
}
</style>