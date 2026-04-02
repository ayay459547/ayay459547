import { Icon } from '@iconify/vue'

export default defineNuxtPlugin(nuxtApp => {
  // nuxtApp.vueApp.component('Icon', Icon)
  nuxtApp.vueApp.component('IconifyIcon', Icon)
})
