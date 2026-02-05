import { createProdMockServer } from 'vite-plugin-mock/client'

// 导入所有的mock模块
import userMock from './mock'

export function setupProdMockServer() {
  createProdMockServer([...userMock])
}
