const COMPATIBILITY_DATE = '2026-05-17'

const NUXT_APP_VERSION = process.env.NUXT_APP_VERSION || '0.0.0'
const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || '/'
const NUXT_APP_URL = process.env.NUXT_APP_URL || '/'

// 日期時間
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
  'Server Info',
  `(Run Time: ${formattedDate})`
)
console.table({
  VERSION: NUXT_APP_VERSION,
  BaseUrl: NUXT_APP_BASE_URL,
  PublicUrl: NUXT_APP_URL,
  CompatibilityDate: COMPATIBILITY_DATE
})
console.log('\x1B[43m%s\x1B[0m', ' Check Version!')
console.log(
  '\n ------------------------------------------------------------------------ \n'
)

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: COMPATIBILITY_DATE as any,
  devtools: { enabled: true },

  // 模組設定
  modules: ['@nuxtjs/google-fonts', '@nuxt/eslint', '@nuxt/ui', '@nuxt/icon'],

  icon: {
    componentName: 'NuxtIcon'
  },

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
    baseURL: NUXT_APP_BASE_URL,
    buildAssetsDir: '_nuxt',
    head: {
      title: 'Chen Chan Hsieh | Personal Portfolio',
      htmlAttrs: {
        lang: 'zh-TW'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Chen Chan Hsieh 的個人網站 - 展示工作經驗、專案作品與技能證照。'
        },
        { name: 'format-detection', content: 'telephone=no' },
        {
          name: 'keywords',
          content:
            'Chen Chan Hsieh, 謝禎展, Portfolio, 前端工程師, 網頁開發, Nuxt, Vue'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },

  // 全域變數 (可在組件中透過 useRuntimeConfig() 取得)
  runtimeConfig: {
    public: {
      version: NUXT_APP_VERSION,
      baseURL: NUXT_APP_BASE_URL,
      publicURL: NUXT_APP_URL
    }
  },

  // CSS 載入
  css: ['~/assets/css/main.css', '~/assets/css/normalize.css'],

  vite: {
    optimizeDeps: {
      include: ['@iconify/vue', '@vue/devtools-core', '@vue/devtools-kit']
    }
  }
})
