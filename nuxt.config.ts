// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui'
  ],

  // 引入全域 CSS/樣式檔案
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/scrollbar.css',
    '~/assets/scss/main.scss',
  ]
})
