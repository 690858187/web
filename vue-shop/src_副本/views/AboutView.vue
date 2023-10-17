<template>
  <div class="about">
    <button @click="click">hahahha</button>
  </div>
</template>

<script setup lang="ts">
import request from '@/utils/request';
import { onMounted } from 'vue';
import userouter from '@/router';

onMounted(() => {
  request.request({
    url: '/api/test',
    method: 'post',
  }).then(res => {
    console.log(res);
  });
})

const click = () => {
  userouter.push('/app')
}

// import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;

  }
}
</style>
