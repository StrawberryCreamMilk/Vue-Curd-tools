import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(createPersistedState({
  debug: true,
  key: (value) => "Test_" + value
}))
export default pinia
// 使用通配符将引入地址(modules/login)中非default的全部导出
export * from './modules/permission'
