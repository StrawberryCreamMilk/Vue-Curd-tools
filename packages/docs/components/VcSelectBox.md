---
title: VcSelectBox 多选框
---

<script setup lang="ts">
import { ref, reactive } from 'vue'
import ComponentDemo from '../.vitepress/theme/components/ComponentDemo.vue'
import demoSource from './_demos/VcSelectBox-demo.vue?raw'

const Options = ref([
  { value: "1", label: "无症状" },
  { value: "2", label: "头痛头晕" },
  { value: "3", label: "恶心呕吐" },
  { value: "4", label: "眼花耳鸣" },
  { value: "5", label: "呼吸困难" },
  { value: "6", label: "心悸胸闷" },
  { value: "7", label: "鼻衄出血不止" },
  { value: "8", label: "四肢发麻" },
  { value: "9", label: "下肢水肿" },
  { value: "10", label: "脑卒中" },
  { value: "11", label: "其他" }
]);

const checkbox = ref([])

const fromData = reactive({
    checkbox: []
  })

  const ruleData = reactive({})

  const labelCol = reactive({ span: 5 })
  const wrapperCol = reactive({ span: 516 })
</script>

# VcSelectBox 多选框

增强多选框组件，支持多种样式和状态。

<!-- 使用 ComponentDemo 展示预览与源码 -->
<ComponentDemo :source="demoSource">
  <template #preview>
      <VcSelectBox :Options="Options" :checkbox="checkbox" />
  </template>
</ComponentDemo>

## Props

- `Options`：options 数据
- `checkbox（v-model）`：指定当前选中的标签
- `disabled`：是否禁用 `true | false`
- `type`：数据类型 `String` `label | value`
- `repeat`：是否去重 `Boolean` `true | false`
- `sxwzz`：首项症状 `Array`
- `endwx`：尾部其他 `any`
- `hcArr`：选项中互斥类.传入的是互斥索引 `Array`
- `startX`：是否必填 `String` `*`
- `zzTitle`：主题名称 `String` `症状`
- `placeholder`：提示语 `String` `请输入`

## 示例代码

```vue
<template>
  <VcSelectBox :Options="Options" :checkbox="checkbox" />
</template>
```
