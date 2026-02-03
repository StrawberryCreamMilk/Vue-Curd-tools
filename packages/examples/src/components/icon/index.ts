// 当前文件用于把图标组件注册成全局组件
import type { App } from 'vue'
import * as AntIcons from "@ant-design/icons-vue"

// 注册全局组件
const icons = [AntIcons.StepBackwardOutlined, AntIcons.StepForwardOutlined, AntIcons.SearchOutlined]

export default {
  install(app: App) {
    icons.forEach(icon => {
      const compName = (icon as any).displayName ?? (icon as any).name;
      app.component(compName, icon as any);
    })
  }
}
