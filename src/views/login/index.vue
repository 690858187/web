<template>
    <div class="login_container">
        <el-row :gutter="0">
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form ref="loginForms" class="login_form" :model="loginInput" :rules="rules">
                    <h1>欢迎使用</h1>
                    <h2>用户登录</h2>
                    <el-form-item class="input" prop="username">
                        <el-input placeholder="请输入账号" :prefix-icon="User" v-model="loginInput.username"></el-input>
                    </el-form-item>
                    <el-form-item class="input" prop="password">
                        <el-input type="password" placeholder="请输入密码" :prefix-icon="Lock" show-password
                            v-model="loginInput.password">
                            111
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="login_button" type="primary" size="default" @click="loginHandle">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
  
<script setup lang="ts">
import { Loading, Lock, User } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import useUserStore from '@/stores/modules/user'
import router from '@/router'
import { getTime } from '@/utils/time';
import { ElLoading, ElNotification } from 'element-plus'


let userStore = useUserStore();


/// 手机表单账号密码
let loginInput = reactive({
    username: 'admin',
    password: 'atguigu123',
});


/// 手机表单账号密码
let loginForms = ref();



const loginHandle = async () => {
    const loading = ElLoading.service({
        lock: true,
        text: '登录中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    await loginForms.value.validate();
    try {
        loading.close();
        await userStore.login(loginInput)
        let message = getTime();
        ElNotification({
            title: '登录成功',
            message: "HI," + message + "好",
            type: 'success',
        })
        router.replace('/');
    } catch (error) {
        loading.close();
        ElNotification({
            title: '登录失败',
            message: (error as Error).message,
            type: 'error',
        })
    }
}

/// 定义表单需要的配置对象
const rules = {
    username: [{ required: true, min: 5, max: 10, message: '用户名长度5到10位', trigger: 'change' },],
    password: [{ required: true, min: 6, max: 15, message: '密码长度6到15位', trigger: 'change' },],

}
</script>

  
<style  lang="scss" scoped>
.login_container {
    height: 100vh;
    width: 100vw;
    background: url('@/assets/login/background.jpg') no-repeat;
    background-size: cover;
    background-color: blue;

    .login_form {
        h1 {}

        h2 {}

        .input {}

        .login_button {}
    }
}

h1 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: bolder;
    color: white;
    margin-left: 20px;
}

h2 {
    font-size: 20px;
    font-weight: bolder;
    bottom: 20px;
    color: white;
    margin-left: 20px;
    margin-bottom: 5px;
}

.input {
    margin-left: 20px;
    margin-right: 20px;
}

.login_button {
    margin-left: 20px;
    margin-bottom: 16px;
    width: 100%;
    margin-right: 20px;
}

.login_form {
    width: 80%;
    top: 30vh;
    position: relative;
    background: url('@/assets/login/background.jpg') no-repeat;
    background-size: cover;
    border-radius: 12px;
}

@media screen {
    .login_form {
        margin-left: auto;
        margin-right: auto;
        width: 70%;
        top: 30vh;
        position: relative;
        background: url('@/assets/login/background.jpg') no-repeat;
        background-size: cover;
        border-radius: 12px;
    }
}
</style>
  