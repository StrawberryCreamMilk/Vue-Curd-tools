const modules = import.meta.glob('./modules/*.ts', { eager: true })

function formatRoutes(_modules: Record<string, any>, result: any[]) {
  Object.keys(_modules).forEach(key => {
    const defaultModule = _modules[key].default
    if (defaultModule) {
      result.push(defaultModule)
    }
  })

  return result.sort((a, b) => a.meta?.order - b.meta?.order)
}

export const asyncRoutes = formatRoutes(modules, [])
