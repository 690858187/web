<template>
    <!-- 顶部左侧图标 -->
    <el-icon style="margin-right:10px" @click="changeIcon" color="black">
        <component :is="layoutSettingStore.fold ? 'fold' :'Expand' "></component>
    </el-icon>
    <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
            <el-icon style="margin-right:5px">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/stores/modules/setting';

let $route = useRoute();

let layoutSettingStore = useLayoutSettingStore();

const changeIcon = () => {
    layoutSettingStore.fold = !layoutSettingStore.fold;
}

const handler = () => {
    console.log($route.matched);
}

</script>

<script lang="ts">
export default {
    name: "BreadCrumb"
}
</script>

<style  lang="scss" scoped></style>