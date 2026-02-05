import { usePermissionStore } from '@/stores'

function isArray(value) {
  if (Array.isArray(value)) {
    return true
  }
  return false
}

function checkPermission(el, { value }) {
  // 获取用户角色
  const { currentRole } = usePermissionStore()

  // 传入的权限值要求是一个数组
  if (isArray(value) && value.length > 0) {
    // 判断用户角色是否有权限
    const hasPermission = value.includes(currentRole)
    // 没有权限则删除当前dom
    if (!hasPermission) el.remove()
  } else {
    throw new Error(`格式错误，正确用法 v-premission="['admin', 'employee']"`)
  }
}

export default {
  mounted(el, binding) {
    checkPermission(el, binding)
  },
  updated(el, binding) {
    checkPermission(el, binding)
  },
}
