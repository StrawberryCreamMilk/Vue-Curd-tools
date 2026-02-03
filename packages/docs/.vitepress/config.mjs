import {defineConfig} from 'vitepress'

export default defineConfig({
    // 站点标题
    title: 'Vue CRUD Tools',

    // 站点描述（用于 SEO）
    description: 'Vue CRUD Tools 组件库文档',

    // 部署基础路径（如果部署到 GitHub Pages，这里需要设置仓库名）
    base: '/',

    // 主题配置
    themeConfig: {
        // 导航栏配置
        nav: [
            {text: '指南', link: '/guide/'},      // 指南页面
            {text: '组件', link: '/components/'}, // 组件文档页面
            {text: 'API', link: '/api/'},         // API 文档页面
        ],

        // 侧边栏配置（根据不同路径显示不同的侧边栏）
        sidebar: {
            // 指南页面的侧边栏
            '/guide/': [
                {
                    text: '开始',
                    items: [
                        {text: '介绍', link: '/guide/'},
                        {text: '快速开始', link: '/guide/quick-start'},
                    ],
                },
            ],

            // 组件页面的侧边栏
            '/components/': [
                {
                    text: '组件',
                    items: [
                        {text: '概览', link: '/components/'},
                        // 组件文档链接
                        { text: 'Button 按钮', link: '/components/button' },
                        { text: 'CrudTable 表格', link: '/components/crud-table' },
                        { text: 'VcSelectBox 表格', link: '/components/VcSelectBox' },
                    ],
                },
            ],
        },

        // 社交链接
        socialLinks: [
            {icon: 'github', link: 'https://github.com/yourusername/vue-crud-tools'},
        ],
    },
})
