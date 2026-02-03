---
title: Button 按钮
---

<script setup>
import ComponentDemo from '../.vitepress/theme/components/ComponentDemo.vue'
import demoSource from './_demos/button-demo.vue?raw'
</script>

# Button 按钮

增强按钮组件，支持多种样式和状态。

<!-- 使用 ComponentDemo 展示预览与源码 -->
<ComponentDemo :source="demoSource">
  <template #preview>
    <a-space wrap>
      <AntdButton type="primary">Primary</AntdButton>
      <AntdButton>Default</AntdButton>
      <AntdButton type="dashed">Dashed</AntdButton>
      <AntdButton type="text">Text</AntdButton>
      <AntdButton type="link">Link</AntdButton>
    </a-space>
  </template>
</ComponentDemo>

## Props

- `type`：按钮类型，`primary | success | warning | danger`
- `disabled`：是否禁用

## 示例代码

```vue
<template>
  <AntdButton type="primary">Primary</AntdButton>
</template>
```
