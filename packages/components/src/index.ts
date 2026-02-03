import type {App, Plugin} from 'vue'

// 导入 UnoCSS 样式（会被打包进组件库）
import 'uno.css'
import '@unocss/reset/tailwind.css'

// 导入指令
import { clickOutside } from '@vue-crud-tools/shared'

// === 导出所有内容 ===
// 导出组件
// export * from './components'

// 导出类型定义
// export * form './types'

// 导出所有工具类函数
// export * from './utils'

// === 按需导出组件 ===
// import { YourComponent } from './components'

import {CrudTable, AntdButton, VcSelectBox} from "./components";
// 导出组件
export * from './components'
export * from './types'
export * from './utils'


const components: any[] = [
    // YourComponent,
    CrudTable,
    AntdButton,
    VcSelectBox
]

// === 安装函数 ===
// 提供 install 方法，支持 Vue.use() 方式安装
export function install(app:App){
    // 遍历所有组件并注册全局组件
    components.forEach(component => {
        app.component(component.name, component)
    })

    // 注册全局指令
    app.directive('click-outside', clickOutside)
}

// === 默认导出 ===
// 支持 app.use(VueCrudTools) 方式安装
const VueCrudToolsPlugin: Plugin = {
    install
}

export default VueCrudToolsPlugin
