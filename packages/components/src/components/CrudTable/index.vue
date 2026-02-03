<template>
  <div class="crud-table">
    <!-- <h3>{{ title }}</h3> -->
    <slot></slot>
    <vxe-table />
  </div>
</template>

<script setup lang="ts">
// import { defineProps, withDefaults } from 'vue'
// import type { CrudTableProps } from './types'

// // 定义 props
// const props = withDefaults(defineProps<CrudTableProps>(), {
//   title: '默认标题',
// })
</script>

<style scoped>
.crud-table {
  /* 组件样式 */
}
</style>
