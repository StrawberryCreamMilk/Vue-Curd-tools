<script setup lang="ts">
defineOptions({
  name: 'SideBarMenu' // 必须和导入时的名称一致
});
</script>

<template>
  <div>
    <a-menu theme="light" mode="inline">
      <a-sub-menu key="1" title="基础数据管理">
        <template #icon>
          <HomeOutlined />
        </template>
        <a-menu-item key="11">机构管理</a-menu-item>
        <a-menu-item key="12">机构作业范围</a-menu-item>
        <a-menu-item key="13">运费管理</a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="2" title="车辆管理">
        <template #icon>
          <HomeOutlined />
        </template>
        <a-menu-item key="21">车型管理</a-menu-item>
        <a-menu-item key="32">车辆列表</a-menu-item>
        <a-menu-item key="33">回车管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<style scoped lang="scss">
/* 此处可添加原有的样式，例如菜单的宽度、高度等 */
.ant-menu {
  border-right: none; // 示例：移除右侧边框，根据需要调整
}
</style>
