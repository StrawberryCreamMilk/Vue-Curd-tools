import { createRouter, createWebHistory } from 'vue-router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import base from './modules/base'
import { asyncRoutes } from './asyncRoutes'
import { usePermissionStore } from '@/stores/index'

Nprogress.configure({
  showSpinner: false
})

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: {
        title: '首页'
      },
      component: () => import("@/views/Layout/index.vue")
    },
    {
      path: '/login',
      name: 'Login',
      meta: {
        title: '登录页'
      },
      component: () => import("@/views/Login/index.vue")
    },
    ...asyncRoutes
  ]
})

router.beforeEach(() => {
  Nprogress.start()
})

router.afterEach((to) => {
  Nprogress.done()
  document.title = `${to.meta.title || import.meta.env.VITE_APP_TITLE}`
})

export const resetRouter = () => {
  const permissionStore = usePermissionStore()
  permissionStore.premissionRoutes?.forEach(item => router.removeRoute(item))
}

export default router
export * from './asyncRoutes'
