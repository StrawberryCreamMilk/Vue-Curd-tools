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
      <a-layout style="padding: 16px">
        <MultiTab @edit="onEdit" />
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
import { getTodos } from '@/api'
import { SideBar, TopMenu, MultiTab } from './components';

const selectedKeys1 = ref<string[]>(['2']);
const selectedKeys2 = ref<string[]>(['1']);
const openKeys = ref<string[]>(['sub1']);
onMounted(() => {
  getTodos().then(res => {
    console.log(res, 'res')
  })
})

function onEdit(e) {
  console.log(e, 'e')
}
</script>
<style scoped lang="scss">
.header-wrapper {
  background-color: #219bf1;
  height: 55px;
  padding-left: 25px;
  padding-right: 25px;
}
</style>
