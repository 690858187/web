<!-- <template>
  <div>
    <h1>我是一级路由home</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style  lang="scss" scoped></style> -->


<template>
  <el-scrollbar>
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </el-scrollbar>
</template>

<style  lang="scss" scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>

