<template>
  <div class="demo-block">
    <div class="demo-preview">
      <a-style-provider hash-priority="high">
        <slot name="preview" />
      </a-style-provider>
    </div>

    <div class="demo-actions">
      <button class="action-btn" @click="show = !show">
        {{ show ? "隐藏代码" : "显示代码" }}
      </button>
      <button class="action-btn" @click="copyCode">
        {{ copied ? "已复制" : "复制代码" }}
      </button>
      <button class="action-btn" @click="toggleTheme">
        {{ dark ? "浅色" : "深色" }}
      </button>
    </div>

    <pre
      v-if="show"
      :class="['demo-code', dark ? 'dark' : '']"
    ><code v-html="highlightedCode"></code></pre>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import hljs from "highlight.js/lib/common";
import "highlight.js/styles/github.css";

const props = defineProps({
  source: { type: String, default: "" },
});

const show = ref(false);
const copied = ref(false);
const dark = ref(false);

const highlightedCode = computed(() => {
  if (!props.source) return "";
  try {
    const result = hljs.highlightAuto(props.source);
    return result.value;
  } catch (e) {
    return props.source;
  }
});

function copyCode() {
  if (!props.source) return;
  try {
    navigator.clipboard.writeText(props.source);
    copied.value = true;
  } catch (e) {
    // ignore
  }
}

function toggleTheme() {
  dark.value = !dark.value;
}

watch(copied, (v) => {
  if (v) setTimeout(() => (copied.value = false), 1500);
});
</script>

<style scoped>
.demo-block {
  border: 1px solid #eee;
  padding: 12px;
  margin-bottom: 16px;
  border-radius: 6px;
  background: #fff;
}
.demo-preview {
  padding: 12px;
  background: transparent;
}
.demo-actions {
  margin-top: 8px;
  display: flex;
  gap: 8px;
}
.action-btn {
  border: 1px solid #dcdcdc;
  padding: 6px 10px;
  border-radius: 4px;
  background: #fafafa;
  cursor: pointer;
}
.demo-code {
  background: #f7f7f7;
  padding: 12px;
  overflow: auto;
  margin-top: 8px;
  border-radius: 4px;
}
.demo-code.dark {
  background: #0d1117;
  color: #c9d1d9;
}
</style>
