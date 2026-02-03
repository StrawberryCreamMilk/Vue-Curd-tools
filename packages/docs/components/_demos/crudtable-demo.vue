<template>
  <div>
    <CrudTable
      v-model:data="tableData"
      :columns="columns"
      @create="handleCreate"
      @update="handleUpdate"
      @delete="handleDelete"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tableData = ref([{ name: '张三', age: 28, email: 'zhangsan@example.com' }])
const columns = [
  { key: 'name', title: '姓名', type: 'text' },
  { key: 'age', title: '年龄', type: 'number' },
  { key: 'email', title: '邮箱', type: 'email' }
]

function handleCreate(data) {
  tableData.value.push(data)
}
function handleUpdate(data) {
  // demo 不实现复杂逻辑
}
function handleDelete(id) {
  // demo 不实现复杂逻辑
}
</script>

<style scoped>
</style>


