<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { asyncRoutes } from '@/router/asyncRoutes'
import { transformMenuToItems, state } from '@/views/Layout/index';
defineOptions({
  name: 'SideBarMenu' // 必须和导入时的名称一致
});

const router = useRouter()

const routes = computed(() => {
  return router.options.routes
})
const items = computed(() => {
  return transformMenuToItems(asyncRoutes as any[])
  // 下方是所有注册路由包括首页和登录页
  // return transformMenuToItems(routes.value as any[])
})
console.log(items, 'items')
function selectMenus(e: any) {
  // 路由跳转：e.key 就是菜单项的路由路径
  router.push(e.key)
}
</script>

<template>
  <div>
    <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" :mode="'inline'" :items="items"
      :theme="'light'" @select="selectMenus" />
  </div>
</template>

<style scoped lang="scss">
/* 此处可添加原有的样式，例如菜单的宽度、高度等 */
.ant-menu {
  border-right: none; // 示例：移除右侧边框，根据需要调整
}
</style>
