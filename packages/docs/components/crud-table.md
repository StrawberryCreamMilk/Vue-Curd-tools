---
title: CrudTable 表格
---

<script setup lang="ts">
import ComponentDemo from '../.vitepress/theme/components/ComponentDemo.vue'
import demoSource from './_demos/crudtable-demo.vue?raw'
</script>

# CrudTable 表格

表格组件，支持基本的增删改查交互。

<ComponentDemo :source="demoSource">
  <template #preview>
    <CrudTable
      v-model:data="tableData"
      :columns="[
        { key: 'name', title: '姓名', type: 'text' },
        { key: 'age', title: '年龄', type: 'number' },
        { key: 'email', title: '邮箱', type: 'email' }
      ]"
    />
  </template>
</ComponentDemo>


