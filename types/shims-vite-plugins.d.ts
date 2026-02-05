declare module '@vitejs/plugin-vue';
declare module 'unocss/vite';
declare module 'unplugin-vue-components/vite';
declare module 'unplugin-vue-components/resolvers';
declare module '@ant-design/icons-vue';

interface ImportMeta {
  glob: (pattern: string, options?: { eager?: boolean; import?: string }) => Record<string, any>;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_BASE_URL: string
  // 可以添加其他环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
