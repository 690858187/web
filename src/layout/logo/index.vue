<template>
    <div class="logo">
        <img :src=setting.logo alt="" v-if="setting.logoShow">
        <p>{{ setting.title }}</p>
    </div>
</template>

<script setup lang="ts">
import setting from '@/setting';

</script>

<script lang="ts">
export default {
    name: "Logo"
}
</script>

<style scoped lang="scss">
.logo {
    display: flex;
    height: $base-menu-logo-height;
    align-items: center;
    padding: 8px;

    img {
        width: 40px;
        height: 40px;

    }

    p {
        font-size: $base—logo-title-fontSize;
        margin-left: 10px;
    }
}
</style>