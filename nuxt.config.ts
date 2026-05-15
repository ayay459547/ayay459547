// 根據你的需求設定的常數
const COMPATIBILITY_DATE = '2026-05-15'
const NUXT_BUILD_VERSION = '2026-05-15.1'

// 建議使用 process.env 確保在所有 Nuxt 生命週期都能正確讀取 .env
const NUXT_PUBLIC_TYPE = process.env.NUXT_PUBLIC_TYPE || 'DEV'
const NUXT_PUBLIC_VERSION = process.env.NUXT_PUBLIC_VERSION || '0.0.0'
const NUXT_PUBLIC_BASE_URL = process.env.NUXT_PUBLIC_BASE_URL || '/'
const NUXT_PUBLIC_URL = process.env.NUXT_PUBLIC_URL || '/'

// 當前日期時間
const formattedDate = new Intl.DateTimeFormat('zh-TW', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false
}).format(new Date())

// 終端機資訊輸出
console.log(
  '\n ------------------------------------------------------------------------ \n'
)
console.log(
  '\x1B[33m%s\x1B[0m \x1B[36m%s\x1B[0m',
  '前端服務器資訊',
  `(執行時間: ${formattedDate})`
)
console.table({
  系統類型: NUXT_PUBLIC_TYPE,
  系統版本: NUXT_PUBLIC_VERSION,
  Base_Url: NUXT_PUBLIC_BASE_URL,
  Public_Url: NUXT_PUBLIC_URL,
  打包版本: NUXT_BUILD_VERSION
})
console.log('\x1B[43m%s\x1B[0m', ' 注意打包版本是否有更新 ')
console.log(
  '\n ------------------------------------------------------------------------ \n'
)

export default defineNuxtConfig({
  srcDir: 'app',
  ssr: true,
  compatibilityDate: COMPATIBILITY_DATE as any,
  devtools: { enabled: true },

  // 模組設定
  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss', '@nuxt/eslint'],

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700],
      'Noto Sans TC': [300, 400, 500, 700]
    },
    display: 'swap',
    preconnect: true,
    download: true
  },

  // 應用程式路徑設定 (針對 GitHub Pages)
  app: {
    baseURL: NUXT_PUBLIC_BASE_URL,
    buildAssetsDir: '/_nuxt/'
  },

  // 全域變數 (可在組件中透過 useRuntimeConfig() 取得)
  runtimeConfig: {
    public: {
      type: NUXT_PUBLIC_TYPE,
      version: NUXT_PUBLIC_VERSION,
      baseURL: NUXT_PUBLIC_BASE_URL,
      publicURL: NUXT_PUBLIC_URL,
      buildVersion: NUXT_BUILD_VERSION
    }
  },

  // CSS 載入
  css: ['~/assets/reset.css', '~/assets/normalize.css', '~/assets/main.css']
})
