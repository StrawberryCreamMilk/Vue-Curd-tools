import {defineConfig, presetUno, presetAttributify, presetIcons} from 'unocss'

export default defineConfig({
    // 预设配置
    presets: [
        // presetUno： 提供 Tailwind CSS / Windi CSS 兼容的工具类
        presetUno(),
        // presetAttributify： 支持在 HTML 元素上使用属性语法来应用样式（如：<div text="red" />）
        presetAttributify(),
        // presetIcons： 支持使用图标字体和 SVG 图标(通过Iconify)
        presetIcons({
            scale: 1.2,
            warn: true
        })
    ],
    shortcuts: {
        // 示例：'btn': 'px-4 py-2 rounded bg-blue-500 text-white'
    },
    theme: {
        color: {
            // 自定义颜色变量
            // 示例：primary: '#3b82f6'
        }
    }
})
