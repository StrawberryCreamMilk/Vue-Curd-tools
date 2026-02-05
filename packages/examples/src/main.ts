import { createApp } from 'vue'
import pinia from '@/stores';
// import router from './permission'


// 导入 VXETable
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 导入组件库
import VueCrudTools from '@vue-crud-tools/components'
import '../../components/dist/style.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import icons from '@/components/icon'
import router from '@/router'
// 导入根组件
import App from './App.vue'

import premission from '@/directive'


// 创建 Vue 应用实例
const app = createApp(App)

// 注册 Element Plus
app.use(Antd)

// 注册 VXETable
app.use(VXETable)

// 注册组件库
app.use(VueCrudTools)
// app.use(router)
app.use(icons)
app.use(router)
app.use(premission)
app.use(pinia)
// 挂载应用
app.mount('#app')
