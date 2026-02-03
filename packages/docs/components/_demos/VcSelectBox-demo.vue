<template>
  <div>
    <VcSelectBox :Options="Options" :checkbox="checkbox" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
  { value: "11", label: "其他" },
]);

const checkbox = ref([])
</script>

<style scoped>

</style>
