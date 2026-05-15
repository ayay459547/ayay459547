import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{ts,js}',
    './error.vue',
    './app/**/*.{js,vue,ts}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans TC', 'sans-serif']
      },
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8'
        },
        bgLight: '#F8FAFC'
      },
      boxShadow: {
        soft: '0 20px 40px -15px rgba(0,0,0,0.05)',
        glow: '0 0 40px -10px rgba(59, 130, 246, 0.5)'
      }
    }
  },
  plugins: []
}

export default config
