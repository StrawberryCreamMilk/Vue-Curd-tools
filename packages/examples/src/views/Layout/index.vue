<template>
  <a-layout>
    <a-layout-header class="header-wrapper">
      <TopMenu ref="refTopMenu" />
    </a-layout-header>
    <a-layout>
      <a-layout-sider theme="light" width="200" style="background: #fff;" class="h-[calc(100vh-55px)] overflow-y-auto"
        collapsible>
        <SideBar />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import SideBar from './components/SideBar.vue';
import { getTodos } from '@/api'
import TopMenu from './components/TopMenu.vue';

const selectedKeys1 = ref<string[]>(['2']);
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
onMounted(() => {
  getTodos().then(res => {
    console.log(res, 'res')
  })
})
</script>
<style scoped lang="scss">
.header-wrapper {
  background-color: #219bf1;
  height: 55px;
  padding-left: 25px;
  padding-right: 25px;
}
</style>
