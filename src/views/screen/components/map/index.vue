<template>
  <div class="box4" ref="map">
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
//引入中国地图的JSON数据
import chinaJSON from './china.json'
// import Bottom from './bottom/index.vue'
//获取DOM元素
let map = ref()
// 飞机图形
var planePath =
  'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
// let lineColor = '#a6c84c';
let lineColor = 'white';
let planeColor = 'white';
//注册中国地图
echarts.registerMap('china', chinaJSON as any)

onMounted(() => {
  let mychart = echarts.init(map.value)
  // 设置配置项
  mychart.setOption({
    //地图组件
    geo: {
      map: 'china', //中国地图
      roam: false, //鼠标缩放的效果
      //地图的位置调试
      left: 40,
      top: 100,
      right: 40,
      zoom: 1.0,
      bottom: 0,
      //地图上的文字的设置
      label: {
        show: true, //文字显示出来
        color: 'white',
        fontSize: 14,
      },
      itemStyle: {//顶层地图的样式，如地图区域颜色，边框颜色，边框大小等
        normal: {
          areaColor: '#08407D',
          borderColor: '#00FFFF',
          borderWidth: 0.5
        }

      },
      //地图高亮的效果
      emphasis: {
        itemStyle: {
          color: '#00FFFF',
        },
        label: {
          fontSize: 16,
          color: 'green',
        },
      },
    },
    //布局位置
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    },
    series: [
      {
        type: 'lines',
        // 统一的样式设置
        lineStyle: {
          color: lineColor,
          width: 0.5,
          curveness: 0.2
        },
        //开启动画特效
        effect: {
          show: true,
          symbol: planePath,
          color: planeColor,
          symbolSize: 15,
          trailLength: 0.1,
          period: 6,
        },
        data: [
          {
            coords: [
              [114.3896, 30.6628],
              [116.405285, 39.904989],
            ],
          },
          {
            coords: [
              [114.3896, 30.6628],
              [110.590525, 37.187145],
            ],

          },
          {
            coords: [
              [114.3896, 30.6628],
              [106.3586, 38.1775],
            ],
          },
          {
            coords: [
              [114.3896, 30.6628],
              [127.9688, 45.368],
            ],
          },
          {
            coords: [
              [114.3896, 30.6628],
              [91.11, 29.97],
            ],
          },
          {
            coords: [
              [114.3896, 30.6628],
              [117.1582, 36.8701],
            ],
          },
          {
            coords: [
              [114.3896, 30.6628],
              [119.4543, 25.9222],
            ],
          },
        ],

      },
    ],
  })
})
</script>

<script lang="ts">
export default {
  name: "Map"
}
</script>

<style  lang="scss" scoped>
.box4 {
  width: 100%;
  height: 760px;
}
</style>

