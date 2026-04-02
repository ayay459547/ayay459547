// https://nuxt.com/docs/api/configuration/nuxt-config

// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss']
// })

const COMPATIBILITYDATE = '2026-04-02'
const NUXT_BUILD_VERSION = '2026-04-02.1'

const NUXT_ENV_TYPE = import.meta.env.NUXT_ENV_TYPE || 'DEV'
const NUXT_SYSTEM_VERSION = import.meta.env.NUXT_SYSTEM_VERSION || '0.0.0'
const NUXT_BASE_URL = import.meta.env.NUXT_BASE_URL || '/'
const NUXT_PUBLIC_URL = import.meta.env.NUXT_PUBLIC_URL || '/'

const nowDate = new Date()
const [year, month, day, hour, min, second] = [
  nowDate.getFullYear(),
  `${nowDate.getMonth() + 1}`.padStart(2, '0'),
  `${nowDate.getDate()}`.padStart(2, '0'),
  `${nowDate.getHours()}`.padStart(2, '0'),
  `${nowDate.getMinutes()}`.padStart(2, '0'),
  `${nowDate.getSeconds()}`.padStart(2, '0')
]

console.log(
  '\n ------------------------------------------------------------------------ \n'
)
console.log(
  '\x1B[33m%s\x1B[0m \x1B[36m%s\x1B[0m',
  '前端服務器資訊',
  `(執行時間: ${year}-${month}-${day} ${hour}:${min}:${second})`
)
console.table({
  系統類型: NUXT_ENV_TYPE,
  系統版本: NUXT_SYSTEM_VERSION,
  Base_Url: NUXT_BASE_URL,
  Public_Url: NUXT_PUBLIC_URL,
  打包版本: NUXT_BUILD_VERSION
})
console.log('\x1B[43m%s\x1B[0m', '注意打包版本是否有更新')
console.log(
  '\n ------------------------------------------------------------------------ \n'
)

export default defineNuxtConfig({
  // ssr: false,
  compatibilityDate: COMPATIBILITYDATE,
  devtools: { enabled: true },

  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: [300, 400, 500, 600, 700],
          'Noto+Sans+TC': [300, 400, 500, 700]
        },
        display: 'swap',
        preconnect: true // 會自動生成 preconnect
      }
    ],
    ,
    '@nuxtjs/tailwindcss'
  ],

  app: {
    baseURL: NUXT_BASE_URL
  },
  runtimeConfig: {
    public: {
      type: NUXT_ENV_TYPE,
      version: NUXT_SYSTEM_VERSION,
      baseURL: NUXT_BASE_URL,
      publicURL: NUXT_PUBLIC_URL
    }
  },

  css: ['~/assets/reset.css', '~/assets/normalize.css'],

  vite: {
    // css: {
    //   preprocessorOptions: {
    //     scss: {
    //       additionalData: '@use "~/assets/main.scss" as *;'
    //     }
    //   }
    // },
    build: {
      terserOptions: {
        compress: {
          drop_console: false, // 保留 console.log
          drop_debugger: true // 可保留或刪除 debugger
        }
      }
    }
  }
})
