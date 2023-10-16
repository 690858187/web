<template>
    <div class="top">
        <div class="left">
            <span class="lbtn" @click="goHome">
                首页
            </span>
        </div>
        <div class="center">
            <div class="title">
                大数据平台
            </div>
        </div>
        <div class="right">
            <span class="rbtn">
                统计报告
            </span>
            <span class="time">
                {{ time }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'

let $router = useRouter();
let time = ref(moment().format('YYYY年MM月DD日 HH:mm:ss'))
let timer = ref()

onMounted(() => {
    timer.value = setInterval(() => {
        time.value = moment().format('YYYY年MM月DD日 HH:mm:ss');
    }, 1000)
})

/// 组件销毁前取消定时器
onBeforeUnmount(() => {
    clearInterval(timer.value);
})

const goHome = () => {
    $router.push('./home')
}

</script>

<script lang="ts">
export default {
    name: "Top"
}
</script>

<style  lang="scss" scoped>
.top {
    height: 40px;
    display: flex;

    .left {
        flex: 1;
        background: url(../../images/dataScreen-header-left-bg.png), no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: row-reverse;

        .lbtn {
            width: 135px;
            background: url(../../images/dataScreen-header-btn-bg-l.png), no-repeat;
            background-size: 100% 100%;
            text-align: center;
            color: #29fcff;
            font-size: 24px;
        }
    }

    .center {
        flex: 2;

        .title {
            width: 100%;
            height: 74px;
            background: url(../../images/dataScreen-header-center-bg.png), no-repeat;
            background-size: 100% 100%;
            text-align: center;
            line-height: 74px;
            color: #29fcff;
            font-size: 30px;
        }
    }

    .right {
        flex: 1;
        background: url(../../images/dataScreen-header-right-bg.png), no-repeat;
        background-size: cover;
        justify-content: space-between;
        align-items: center;
        display: flex;

        .rbtn {
            width: 135px;
            background: url(../../images/dataScreen-header-btn-bg-r.png), no-repeat;
            background-size: 100% 100%;
            text-align: center;
            color: #29fcff;
            font-size: 22px;
        }

        .time {
            color: #29fcff;
            margin-right: 10px;
            font-size: 20px;
        }
    }
}
</style>