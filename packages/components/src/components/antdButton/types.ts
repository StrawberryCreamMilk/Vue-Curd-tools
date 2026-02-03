// 组件 Props 类型定义（参考 Element Plus Button API）
export interface EButtonProps {
  type?: '' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default'
  size?: 'large' | 'default' | 'small'
  block?: boolean
  danger?: boolean
  disabled?: boolean
  ghost?: boolean
  herf?: string
  htmlType?: string
  icon?: any
  loading?: boolean | { delay: number }
  shape?: 'default' | 'circle' | 'round'
  target?: string
  [key: string]: any
}

// 组件事件类型定义
export interface EButtonEmits {
}
