<template>
    <div class="box">
        <div class="top">
            <p class="title">年龄比例</p>
            <p class="bg"></p>
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

var data = [
    { value: 1048, name: '10岁以下' },
    { value: 735, name: '10岁-20岁' },
    { value: 580, name: '20岁-30岁' },
    { value: 484, name: '30岁-40岁' },
    { value: 300, name: '40岁-50岁' },
    { value: 300, name: '50岁-60岁' }
];

onMounted(() => {
    let mycharts = echarts.init(charts.value);
    mycharts.setOption({
        title: {
            text: '本日总数',
            left: '23%',
            top: 'center',
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
            },
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            itemWidth: 20,
            itemHeight: 20,
            top: 'center',
            right: '15%',
            orient: 'vertical',
            z: 10,
            textStyle: {
                fontSize: 13,
                color: '#ffffff',
            },
            formatter: function (name: string) {
                var total = 0;
                var target = 0;
                for (var i = 0, l = data.length; i < l; i++) {
                    total += data[i].value;
                    if (data[i].name == name) {
                        target = data[i].value;
                    }
                }
                return name + ' ' + ((target / total) * 100).toFixed(2) + '%';
            }
        },
        series: [
            {
                center: ['30%', '50%'],
                name: '人数:',
                type: 'pie',
                radius: ['40%', '70%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 0,
                    // borderCap: 'butt',
                },
                label: {
                    show: true,
                    position: 'inside',
                    color: '#fff',
                    formatter: '{d}%'
                },
                emphasis: {
                    label: {
                        show: false,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data,
            }
        ]
    })
})

</script>

<script lang="ts">
export default {
    name: "Age"
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
    }

    .charts {
        width: 100%;
        height: 280px;
    }
}
</style>