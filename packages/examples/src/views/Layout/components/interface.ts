export type TabPane = {
  title: string;
  key: string;
  closable?: boolean;
}

// 声明组件的 emit 类型
export interface TabsEmits {
  edit: [key: string];
}

export interface TabsProps {
  activeKey?: string;
  hideAdd?: boolean;
  type?: 'editable-card' | 'card';
  onEdit?: (key: string) => void;
}

export interface SideBarMenuEmits {
  selectMenu: [key: string];
}
