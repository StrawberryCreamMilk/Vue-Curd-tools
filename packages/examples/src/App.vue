<template>
  <div id="app">
    <a-config-provider :theme="themeConfig" :locale="zhCN">
      <a-style-provider hash-priority="high">
        <router-view />
      </a-style-provider>
    </a-config-provider>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, h } from "vue";
// import { RouterView } from "vue-router";
import { themeConfig } from "@/config/theme";
import zhCN from "ant-design-vue/es/locale/zh_CN";
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

onMounted(() => { });
</script>

<style scoped>
#app {
  padding: 20px;
}

/* Modal 样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 90%;
}

/* Dropdown 样式 */
.dropdown-container {
  position: relative;
  display: inline-block;
  margin-top: 20px;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 100;
}

.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #f5f5f5;
}
</style>
