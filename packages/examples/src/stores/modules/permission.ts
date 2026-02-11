import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { getRouter } from '@/services/login'
import { asyncRoutes } from '@/router/asyncRoutes'

export const usePermissionStore = defineStore(
  'permission',
  () => {
    const currentRole = ref('admin')
    const premissionRoutes = ref([])
    const setCurrentRole = () => {
      currentRole.value = currentRole.value === 'admin' ? 'employee' : 'admin'
    }

    const getPermissionRoute = async () => {
      // 发送请求，获取权限路由表
      const a = {
        data: [{
          name: '测试1',
          children: []
        }]
      }
      const { data: menus } = await a
      // const { data: menus } = await getRouter({ role: currentRole.value })

      const routes = []
      menus.forEach(item => {
        const filterRoute = asyncRoutes.find((route) => {
          route.name === item.name
        })
        if (filterRoute) {
          let children = []
          if (item.children?.length) {
            item.children.forEach(childItem => {
              const secondRoute = filterRoute.children.find(childRoute => childRoute.name === childItem)
              children.push(secondRoute)
            })
          }
          filterRoute.children = children
          routes.push(filterRoute)
        }
        premissionRoutes.value = routes
      })
      return premissionRoutes.value
    }
    return {
      premissionRoutes,
      currentRole,
      setCurrentRole,
      getPermissionRoute
    }
  },
  {
    persist: true,
  }
);
