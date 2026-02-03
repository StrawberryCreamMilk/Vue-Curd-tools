import antfu from '@antfu@eslint-config'


export default antfu({
    // 启用 Vue 支持（检查 .vue文件）
    vue: true,

    // 启用 Typescript 支持（检查 .ts文件）
    typescript: true,

    // 启用格式化工具（自动化 CSS、 HTML、 Markdown）
    formatters: {
        css: true,
        html: true,
        markdown: true
    },

    // 忽略的文件和目录（这些文件不进行代码检查）
    ignores: [
        '**/dist',
        '**/node_modules',
        '**/.vitepress/cache'
    ]
})