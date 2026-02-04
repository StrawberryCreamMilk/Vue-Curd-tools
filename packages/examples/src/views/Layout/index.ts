import { h, reactive, ref, computed } from 'vue';
import { ItemType } from 'ant-design-vue';

export const state = reactive({
  selectedKeys: ['1'],
  openKeys: ['sub1'],
});

export const getItem = (
  label: string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: 'group'
): ItemType => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
};

export const transformMenuToItems = (menuData: any[]): ItemType[] => {
  return menuData.map((menu) => {
    // 如果有子菜单，递归处理
    const children =
      menu.children && menu.children.length > 0
        ? transformMenuToItems(menu.children)
        : undefined;
    // 使用 getItem 创建菜单项
    return getItem(
      menu.meta?.title || menu.name, // 使用 meta.title 或 name 作为显示文本
      menu.path || menu.id.toString(), // 使用 path 或 id 作为 key
      menu.meta?.icon ? h(menu.meta.icon) : undefined, // 处理图标
      children // 子菜单
    );
  });
};
