<script setup lang="ts">
import { ref } from 'vue';
import { TabPane, TabsProps, TabsEmits } from './interface';


const panes = ref<TabPane[]>([
  { title: 'Tab 1', key: '1' },
  { title: 'Tab 2', key: '2' },
  { title: 'Tab 3', key: '3' },
]);

const emits = defineEmits<{
  edit: [key: string];
}>();
const props = withDefaults(defineProps<TabsProps>(), {
  activeKey: '1',
  hideAdd: true,
  type: 'editable-card'
})

const handleSomeAction = (key: string) => {
  emits('edit', key);
};

const activeKey = ref(props.activeKey);
</script>
<template>
  <a-tabs v-model:activeKey="activeKey" :hide-add="hideAdd" :type="type" @edit="handleSomeAction">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable" />
  </a-tabs>
</template>

<style scoped lang="scss"></style>
