<template>
    <div class="layout_container">
        <!-- 左侧菜单 -->
        <div class="layout_slider" :class="{ fold: layoutSettingStore.fold }">
            <Logo> </Logo>
            <el-scrollbar>
                <el-menu background-color="$base-menu-background" text-color="white" :default-active="$route.path"
                    :collapse="layoutSettingStore.fold">
                    <Menu :menuList="userStore.menuRoutes"> </Menu>
                </el-menu>
            </el-scrollbar>
        </div>　
        <!-- 右侧菜单 -->
        <div class="layout_tabber" :class="{ fold: layoutSettingStore.fold }">
            <Tabbar> </Tabbar>
        </div>


        <!-- 内容 -->
        <div class="layout_main" :class="{ fold: layoutSettingStore.fold }">
            <Main> </Main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import Logo from './logo/index.vue'
import Menu from './menu/index.vue';
import Main from './main/index.vue';
import Tabbar from './tabbar/index.vue'
/// 获取仓库的路由数据
import useUserStore from '@/stores/modules/user';
import useLayoutSettingStore from '@/stores/modules/setting';

let layoutSettingStore = useLayoutSettingStore();

let userStore = useUserStore();
let $route = useRoute();

</script>

<script lang="ts">
export default {
    name: "Layout"
}
</script>

<style scoped lang="scss">
.layout_container {
    width: 100%;
    height: 100vh;
    background-color: white;


    .layout_slider {
        color: white;
        width: $base-menu-width;
        height: 100vh;
        background: $base-menu-background;
        transition: all 0.3s;

        .scrollbar {
            width: 100%;
            height: calc(100vh - $base-menu-logo-height);
        }

        .el-menu {
            border-right: none;
        }

        &.fold {
            width: $base-menu-min-width;
        }
    }

    .layout_tabber {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: $base-tabber-height;
        background: $base-tabber-background;
        top: 0px;
        left: $base-menu-width;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }

    .layout_main {
        position: fixed;
        width: calc(100% - $base-menu-width);
        height: calc(100vh - $base-tabber-height);
        background: white;
        top: $base-tabber-height;
        left: $base-menu-width;
        padding: 20px;
        transition: all 0.3s;

        &.fold {
            width: calc(100% - $base-menu-min-width);
            left: $base-menu-min-width;
        }
    }
}
</style>