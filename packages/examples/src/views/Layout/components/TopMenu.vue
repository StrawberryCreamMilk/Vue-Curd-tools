<script setup lang="ts">
import { onMounted, ref } from 'vue';
const selectedKeys1 = ref<string[]>(['2']);
</script>
<template>
  <div class="flex items-center justify-between h-55px leading-55px">
    <span class="text-white text-20px font-bold flex-1">区域公共卫生系统</span>
    <a-menu class="flex items-center text-white bg-[#00badf] px-25px flex-[9]" v-model:selectedKeys="selectedKeys1"
      theme="light" mode="horizontal" :style="{ lineHeight: '55px' }">
      <a-menu-item key="1">nav 1</a-menu-item>
      <a-menu-item key="2">nav 2</a-menu-item>
      <a-menu-item key="3">nav 3</a-menu-item>
    </a-menu>
    <span class="text-white text-20px font-bold flex-1">区域公共卫生系统</span>
  </div>
</template>

<style scoped lang="scss"></style>
