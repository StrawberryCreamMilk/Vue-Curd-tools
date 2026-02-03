# 组件概览

Vue CRUD Tools 提供了一系列用于构建 CRUD 界面的组件。

## 基础组件

### EButton

增强按钮组件，支持多种样式和状态。

```vue
<template>
  <div>
    <a-space wrap>
      <AntdButton type="primary">Primary Button</AntdButton>
      <AntdButton>Default Button</AntdButton>
      <AntdButton type="dashed">Dashed Button</AntdButton>
      <AntdButton type="text">Text Button</AntdButton>
      <AntdButton type="link">Link Button</AntdButton>
    </a-space>
  </div>
</template>

<script setup></script>
```

### CrudTable

数据表格组件，支持增删改查操作。

```vue
<template>
  <CrudTable
    v-model:data="tableData"
    :columns="columns"
    @create="handleCreate"
    @update="handleUpdate"
    @delete="handleDelete"
  />
</template>

<script setup>
import { CrudTable } from "@vue-crud-tools/components";

const tableData = ref([]);
const columns = [
  { key: "name", title: "姓名", type: "text" },
  { key: "age", title: "年龄", type: "number" },
  { key: "email", title: "邮箱", type: "email" },
];

const handleCreate = (data) => {
  // 处理创建逻辑
};

const handleUpdate = (data) => {
  // 处理更新逻辑
};

const handleDelete = (id) => {
  // 处理删除逻辑
};
</script>
```

## 更多组件

更多组件正在开发中，敬请期待...
