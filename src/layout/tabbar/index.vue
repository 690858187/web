<template>
    <div class="tabbar">
        <div class="tabbar_left">
            <BreadCrumb></BreadCrumb>
        </div>
        <div class="tabbar_right">
            <Setting></Setting>>
        </div>
    </div>
</template>

<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'


</script>

<script lang="ts">
export default {
    name: "Tabbar"
}
</script>

<style  lang="scss" scoped>
.tabbar {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgb(226, 223, 23), rgb(50, 162, 102), white);
    display: flex;
    justify-content: space-between;


    .tabbar_left {
        display: flex;
        align-items: center;
        margin-left: 20px;
    }

    .tabbar_right {
        display: flex;
        align-items: center;
        margin-right: 20px;

        .example-showcase .el-dropdown-link {
            cursor: pointer;
            color: var(--el-color-primary);
            display: flex;
            align-items: center;
        }
    }
}
</style>