<template>
  <a-layout>
    <a-layout-header class="header-wrapper">
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys1" theme="light" mode="horizontal" :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">nav 1</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <SideBar />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import SideBar from './components/SideBar.vue';
const selectedKeys1 = ref<string[]>(['2']);
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
</script>
<style scoped lang="scss">
.header-wrapper {
  background-color: #1d96f6 !important;
  height: 55px !important;
  padding-left: 25px !important;
  padding-right: 25px !important;
}

.ant-layout-header {
  background-color: #1d96f6 !important;
  height: 55px !important;
  padding-left: 25px !important;
  padding-right: 25px !important;
}
</style>
