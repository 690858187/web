<template>
    <!-- 路由组件的出口位置 -->
    <router-view v-slot="{ Component }">
        <!-- 渲染layout一级路由组件的子路由 -->
        <transition name="fade">
            <component :is="Component" v-if="flag" />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
import useLayoutSettingStore from '@/stores/modules/setting'
let layoutSettingStore = useLayoutSettingStore();

///控制当前组件是否销毁重建
let flag = ref(true);
///监听仓库内部数据是否发生变化
watch(() => layoutSettingStore.refresh, () => {
    flag.value = false;
    nextTick(() => {
        flag.value = true;
    });
})

</script>

<script lang = "ts" >
export default {
    name: "Main"
}
</script>

<style style scoped >
/* .fade-enter-from {
    opacity: 0;
    transform: rotate(0deg);
}

.fade-enter-active {
    transition: all 1s;
}

.fade-enter-to {
    opacity: 1;
    transform: rotate(360deg);
} */
</style>
