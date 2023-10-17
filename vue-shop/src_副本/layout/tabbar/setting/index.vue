<template>
    <el-button type="primary" size="small" @click="updateRefresh" icon="Refresh" circle></el-button>
    <el-button type="primary" size="small" @click="fullScreen" icon="FullScreen" circle></el-button>
    <el-button type="primary" size="small" @click="" icon="Setting" circle></el-button>
    <img :src="userStore.avator ? userStore.avator : '../../../../public/logo.png'"
        style="width:25px;height:25px;margin-left:10px; border-radius: 50%;">

    <img src="https://img2.mukewang.com/5cd93b4600014a2705400720.jpg"
        style="width:25px;height:25px;margin-left:10px; border-radius: 50%;" referrerPolicy='no-referrer'>

    <!-- 下拉菜单 -->
    <el-dropdown>
        <span class="el-dropdown-link">
            {{ userStore.username }}
            <el-icon class="el-icon--right">
                <arrow-down />
            </el-icon>
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
 
<script setup lang="ts">
import useLayoutSettingStore from '@/stores/modules/setting'
import useUserStore from '@/stores/modules/user'
import { ElMessageBox } from 'element-plus';
import { useRouter } from 'vue-router'


let layoutSettingStore = useLayoutSettingStore();
let userStore = useUserStore();
let $router = useRouter();

///刷新
const updateRefresh = () => {
    layoutSettingStore.refresh = !layoutSettingStore.refresh;
}
///全屏
const fullScreen = () => {
    let full = document.fullscreenElement;
    if (!full) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}
// 退出登录
const logout = () => {
    /// 清除用户相关的token和数据
    ElMessageBox.confirm('确认退出登录吗?')
        .then(async () => {
            await userStore.logout();
            $router.replace('/login');
        })
        .catch(() => {
            // catch error
        })
}

</script>

<script lang="ts">
export default {
    name: "Setting"
}
</script>

<style  lang="scss" scoped></style>