<template>
  <a-button ref="innerRef" v-bind="{ ...props, ...$attrs }">
    <template v-for="(_, name) in $slots" :key="name" #[name]="slotData">
      <slot :name="name" v-bind="slotData || {}"></slot>
    </template>
  </a-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { EButtonProps } from "./types";
import { createExposeMethods } from "../../composables/useExposeMethods";

const props = defineProps<EButtonProps>();

const innerRef = ref<InstanceType<any> | null>(null);

defineExpose(createExposeMethods(innerRef));
</script>

<style scoped></style>
