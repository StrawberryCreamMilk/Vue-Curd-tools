import {OptionItem, optionCheckBox} from './interface'

export interface VcSelectBoxProps {
  Options?: OptionItem[]
  checkbox?: optionCheckBox
  modelValue?: optionCheckBox
  disabled?: boolean
  type?: string
  repeat?: boolean
  sxwzz?: optionCheckBox
  endwx?: any
  hcArr?: optionCheckBox
  startX?: string
  zzTitle?: string
  placeholder?: string
  [key: string]: any
}

// 组件事件类型定义
export interface VcSelectBoxEmits {
  selectBox: [result: any]
  'update:modelValue': [value: optionCheckBox]
}
