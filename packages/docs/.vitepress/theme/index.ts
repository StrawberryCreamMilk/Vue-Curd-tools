import DefaultTheme from 'vitepress/theme'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VueCrudTools from '@vue-crud-tools/components'
import '../../../components/dist/components.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

export default {
// 继承默认主题
    extends: DefaultTheme,

    // 增强应用实例
    enhanceApp({app}: any) {
        // 注册 Element Plus（用于文档中的示例）
        app.use(Antd)

        // 注册 VXETable（用于文档中的示例）
        app.use(VXETable)

        // 注册组件库（用于文档中的组件演示）
        app.use(VueCrudTools)
    },
}
