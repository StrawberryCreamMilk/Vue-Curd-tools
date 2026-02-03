import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    // DTS 插件：生成 TypeScript 类型定义
    dts(({
      insertTypesEntry: true, // 自动在 package.json 中插入 types 字段
      include: ['src/**/*'], // 只包含 src 目录下的文件
      exclude: ['**/*.test.ts', '**/*.spec.ts'], // 排除测试文件
      // 临时跳过类型诊断，避免在 monorepo 并行构建时把编辑器生成的辅助类型写入产物
      skipDiagnostics: true,
      // 禁用 API Extractor rollup，避免与本地 TS 版本不兼容时导致堆栈溢出
      rollupTypes: false,
      // 将 d.ts 输出到独立目录，避免与其他声明工具冲突
      outputDir: 'dist/types',
      tsConfigFilePath: './tsconfig.json'
    } as any))
  ],
  // 构建配置
  build: {
    // 库模式配置
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // 入口文件
      name: 'VueCrudToolsShared', // 全局变量名（UMD 格式使用）
      formats: ['es', 'cjs'], // 输出格式：ES 模块和 CommonJS

      // 文件名生成函数
      fileName: (format) => {
        if (format === 'es') return 'index.mjs'; // ES Module 文件名
        if (format === 'cjs') return 'index.cjs'; // CommonJS 文件名
        return `index.${format}.js`; // 其他
      },
    },
    // Rollup 配置（Vite 底层使用了 Rollup 打包）
    rollupOptions: {
      // 外部依赖，不打包这些库（使用者需要自己安装）
      external: ['vue'],
      // 输出配置
      output: {
        // 全局变量名映射（UMD格式使用）
        globals: {
          vue: 'Vue'
        },
        exports: 'named' // 使用命名导出
      }
    },
    outDir: 'dist', // 输出目录
    emptyOutDir: true // 构建前清空输出目录
  }
});
