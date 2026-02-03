# 快速开始

本指南将帮助你快速上手 Vue CRUD Tools。

## 环境要求

- Node.js >= 18.0.0
- pnpm >= 8.0.0

## 安装

### 使用 pnpm（推荐）

```bash
pnpm add @vue-crud-tools/components
```

### 使用 npm

```bash
npm install @vue-crud-tools/components
```

### 使用 yarn

```bash
yarn add @vue-crud-tools/components
```

## 基础使用

### 1. 导入组件

```vue
<template>
  <div>
    <EButton type="primary">主要按钮</EButton>
    <EButton type="success">成功按钮</EButton>
  </div>
</template>

<script setup>
import { EButton } from '@vue-crud-tools/components'
</script>
```

### 2. 配置样式

确保在你的应用入口文件导入样式：

```ts
// main.ts
import '@vue-crud-tools/components/dist/style.css'
```

### 3. 配置 UnoCSS（可选）

如果你使用 UnoCSS，可以导入预设样式：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { presetVueCrudTools } from '@vue-crud-tools/components/unocss'

export default defineConfig({
  presets: [
    presetVueCrudTools(),
    // 其他预设...
  ]
})
```

## 下一步

- 查看 [组件文档](../components/) 了解所有可用组件
- 阅读 [API 文档](../api/) 获取详细的 API 说明
