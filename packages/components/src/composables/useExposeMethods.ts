// Utility to create an object of methods that delegate to the wrapped component instance.
// The returned object is intended to be passed to `defineExpose(...)` inside a component's setup.
// Create an object (or proxy) that exposes methods delegating to the wrapped instance.
// If `methodNames` is provided we pre-create those delegates; otherwise we return a Proxy
// that lazily creates delegates for any accessed method name (skips internal keys starting with `$` or `_`).
/**
 *
 * @param instanceRef
 * @param methodNames
 * @returns
 */
export function createExposeMethods<T extends readonly string[]>(
  instanceRef: { value: any },
  methodNames?: T
) {
  const exposed: Record<string, (...args: any[]) => any> = {}
  const makeDelegate = (name: string) => {
    return (...args: any[]) => {
      if (!instanceRef || !instanceRef.value) return
      const inst = instanceRef.value as any
      console.log(inst, "inst");
      console.log(name, "name");
      if (typeof inst[name] === 'function') return inst[name](...args)
      if (inst.$el && typeof inst.$el[name] === 'function') return inst.$el[name](...args)
    }
  }

  // Pre-populate if explicit method names provided
  if (methodNames && (methodNames as unknown as string[]).length) {
    for (const m of methodNames as unknown as string[]) {
      exposed[m] = makeDelegate(m)
    }
    return exposed
  }

  // Return a Proxy so any accessed property becomes a delegate method lazily.
  // Filter out internal keys that start with `$` or `_`.
  return new Proxy(exposed, {
    get(target, prop) {
      const name = String(prop)
      console.log(name, 'name')
      if (!name || name.startsWith('$') || name.startsWith('_')) return (target as any)[prop]
      if (!Reflect.has(target, prop)) {
        Reflect.set(target, prop, makeDelegate(name))
      }
      return (target as any)[prop]
    },
    // allow enumeration of keys that have been created
    ownKeys() {
      return Reflect.ownKeys(exposed)
    },
    getOwnPropertyDescriptor(_, prop) {
      if (Reflect.has(exposed, prop)) {
        return { configurable: true, enumerable: true, value: (exposed as any)[prop] }
      }
      return undefined
    },
  }) as Record<string, (...args: any[]) => any>
}


