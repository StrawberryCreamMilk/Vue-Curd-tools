import router from '@/router'
// import { useAccountStore } from '@/stores/modules/account'
import { usePermissionStore } from './stores/modules/permission'

const whiteList = ['/login', '/404']

router.beforeEach(async (to, from, next) => {
  // const { token } = useAccountStore()
  const token = '1'
  const permissionStore = usePermissionStore()

  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (!permissionStore.premissionRoutes?.length) {
        // 获取路由
        const routes = await permissionStore.getPermissionRoute()
        routes.forEach(item => {
          router.addRoute(item)
          return next(to.path)
        })
      }
      next()
    }
  } else {
    if (!whiteList.includes(to.path)) {
      next('/login')
    } else {
      next()
    }
  }
})
