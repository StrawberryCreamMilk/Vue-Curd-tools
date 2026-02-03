export default {
  mounted(el: HTMLElement, binding: any) {
    const documentHandler = (e: Event) => {
      if(el.contains(e.target as Node)) return
      binding.value && binding.value(e)
    }

    (el as any)._vueClickOutside_ = documentHandler
    document.addEventListener('click', documentHandler)
    document.addEventListener('touchmove', documentHandler)
  },
  unmounted(el: HTMLElement) {
    const documentHandler = (el as any)._vueClickOutside_
    if (documentHandler) {
      document.removeEventListener('click', documentHandler)
      document.removeEventListener('touchmove', documentHandler)
      delete (el as any)._vueClickOutside_
    }
  }
}
