# API 文档

这里提供了 Vue CRUD Tools 的完整 API 文档。

## 组件 API

### EButton

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| type | `'primary' \| 'success' \| 'warning' \| 'danger'` | `'primary'` | 按钮类型 |
| size | `'small' \| 'medium' \| 'large'` | `'medium'` | 按钮尺寸 |
| disabled | `boolean` | `false` | 是否禁用 |
| loading | `boolean` | `false` | 是否显示加载状态 |

#### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| click | `(event: MouseEvent)` | 点击事件 |

#### Slots

| 插槽名 | 说明 |
|--------|------|
| default | 按钮内容 |

### CrudTable

#### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| data | `Array` | `[]` | 表格数据 |
| columns | `Column[]` | `[]` | 列配置 |
| loading | `boolean` | `false` | 是否显示加载状态 |
| pagination | `Pagination` | - | 分页配置 |

#### Events

| 事件名 | 参数 | 说明 |
|--------|------|------|
| create | `(data: Record<string, any>)` | 创建数据 |
| update | `(data: Record<string, any>)` | 更新数据 |
| delete | `(id: string \| number)` | 删除数据 |

#### Column 类型定义

```ts
interface Column {
  key: string
  title: string
  type?: 'text' | 'number' | 'email' | 'select' | 'date'
  required?: boolean
  options?: Array<{ label: string; value: any }>
  width?: string | number
}
```

## 工具函数

### useCrud

一个组合式函数，用于管理 CRUD 操作的状态。

```ts
import { useCrud } from '@vue-crud-tools/components'

const {
  data,
  loading,
  create,
  update,
  remove,
  refresh
} = useCrud({
  api: {
    list: '/api/items',
    create: '/api/items',
    update: '/api/items/:id',
    delete: '/api/items/:id'
  }
})
```

#### 参数

| 参数 | 类型 | 说明 |
|------|------|------|
| api | `ApiConfig` | API 配置对象 |

#### 返回值

| 属性 | 类型 | 说明 |
|------|------|------|
| data | `Ref<Array>` | 数据列表 |
| loading | `Ref<boolean>` | 加载状态 |
| create | `Function` | 创建函数 |
| update | `Function` | 更新函数 |
| remove | `Function` | 删除函数 |
| refresh | `Function` | 刷新数据函数 |
