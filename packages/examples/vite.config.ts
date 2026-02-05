import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import { viteMockServe } from 'vite-plugin-mock'

export default defineConfig({
  // 插件配置
  plugins: [
    vue(),  // Vue 插件：编译 .vue 文件
    // @ts-ignore
    UnoCSS(), // UnoCSS 插件： 处理原子化 css
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
    viteMockServe({
      mockPath: './src/mock',
      watchFiles: false
    })
  ],

  // 模块解析配置
  resolve: {
    // 路径别名
    alias: {
      // '@' 指向 src 目录
      '@': resolve(__dirname, 'src'),

      // 直接引用组件库源码（方便开发调试）
      '@vue-crud-tools/components': resolve(__dirname, '../components/src'),
      '@vue-crud-tools/shared': resolve(__dirname, '../shared/src')
    },
  },

  // 开发服务器配置
  server: {
    hmr: true,
    port: 3000,      // 端口号
    open: true,      // 启动时自动打开浏览器
  },
})
