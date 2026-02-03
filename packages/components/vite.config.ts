import {resolve} from 'node:path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite';
import dts from 'vite-plugin-dts';


export default defineConfig({
    resolve: {
        alias: {
            '@vue-crud-tools/shared': resolve(__dirname, '../../packages/shared/src')
        }
    },
    plugins: [
        // Vue 插件：编译 .vue 文件
        vue(),
        // UnoCSS 插件： 处理原子化 css
        UnoCSS(),
        // DTS 插件： 生成 TypeScript 类型定义
        dts({
            insertTypesEntry: true,  // 自动在 package.json 中插入 types 字段
            cleanVueFileName: true,  // 清理 .vue 文件名（去掉 .vue 后缀）
            // @ts-ignore
            skipDiagnostics: false,  // 不跳过类型诊断（检查类型错误）
            tsConfigFilePath: '../../tsconfig.json' // TypeScript 配置文件路径
        })
    ],
    // 构建配置
    build: {
        // 库模式配置
        lib: {
            entry: resolve(__dirname, 'src/index.ts'), // 入口文件
            name: 'VueCrudTools', // 全局变量名（UMD 格式使用）
            formats: ['es', 'cjs'], // 输出格式：ES 模块和 CommonJS

            // 文件名生成函数
            fileName: (format) => {
                if (format === 'es') return 'index.mjs'; // ES Module 文件名
                if (format === 'cjs') return 'index.cjs'; // CommonJS 文件名
                return `index.${format}.js` // 其他
            },
        },
        // Rollup 配置（Vite 底层使用了 Rollup 打包）
        rollupOptions: {
            // 外部依赖，不打包这些库（使用者需要自己安装）
            external: ['vue', 'elements-plus', 'vxe-table', 'xe-utils'],
            // 输出配置
            output: {
                // 全局变量名映射（UMD格式使用）
                globals: {
                    vue: 'Vue',
                    'elements-plus': 'ElementsPlus',
                    'vxe-table': 'VXETable',
                    'xe-utils': 'XEUtils'
                },
                exports: 'named' // 使用命名导出
            }
        },
        cssCodeSplit: false, // 不分割 CSS（所有 CSS 打包到一个文件）
        outDir: 'dist',// 输出目录
        emptyOutDir: true // 构建前清空输出目录
    }
})

