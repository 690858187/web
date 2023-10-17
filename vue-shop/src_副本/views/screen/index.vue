<template>
    <div class="container">
        <div class="screen" ref="screen">
            <div class="top">
                <Top></Top>
            </div>

            <el-row :gutter="0">
                <el-col :span="6" :offset="0" style="height: 1040px;">
                    <el-row :gutter="0" type="flex">
                        <el-col :span="24" :offset="0">
                            <Person class="person"></Person>
                        </el-col>
                        <el-col :span="24" :offset="0">
                            <Sex class="sex"></Sex>
                        </el-col>
                        <el-col :span="24" :offset="0">
                            <Age class="age"></Age>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="12" :offset="0" style="height: 1040px;">
                    <el-row :gutter="12" type="flex">
                        <el-col :span="24" :offset="0">
                            <Map class="map"></Map>
                        </el-col>
                        <el-col :span="24" :offset="0">
                            <Tourist class="tourist" style="height: 100%;"></Tourist>
                        </el-col>

                    </el-row>
                </el-col>
                <el-col :span="6" :offset="0">
                    <el-row :gutter="0" type="flex" style="height: 1040px;">
                        <el-col :span="24" :offset="0">
                            <Hot style="height: 300px"> </Hot>
                        </el-col>
                        <el-col :span="24" :offset="0">
                            <Year style="height: 300px"> </Year>
                        </el-col>
                        <el-col :span="24" :offset="0">
                            <Channel style="height: 300px"> </Channel>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import Top from './components/top/index.vue'
import Age from './components/age/index.vue'
import Person from './components/person/index.vue'
import Sex from './components/sex/index.vue'
import Map from './components/map/index.vue'
import Tourist from './components/tourist/index.vue'
import Hot from './components/hot/index.vue'
import Year from './components/year/index.vue'
import Channel from './components/channel/index.vue'
// 获取数据大屏的dom元素
let screen = ref();

onMounted(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
})

/// 当视图窗口发生变化的时候
window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`;
}


///计算的缩放比例 w,h:设计稿宽度和高度
function getScale(w = 1920, h = 1080) {
    const ww = window.innerWidth / w;
    const wh = window.innerHeight / h;
    return ww < wh ? ww : wh;
}


</script>

<style  lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    background: url(./images/bg.png);
    background-size: cover;

    .screen {
        width: 1920px;
        height: 1080px;
        /* background-color: red; */
        /* 缩放基点定位到设备中心点 */
        transform-origin: left top;
        position: fixed;
        left: 50%;
        top: 50%;

        .top {
            width: 100%;
            height: 40px;
        }
    }


}
</style>