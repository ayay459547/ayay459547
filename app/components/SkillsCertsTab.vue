<script setup lang="ts">

const skills = [
  // 核心前端
  { name: 'HTML5', color: 'DE4B23', logo: 'html5', logoColor: 'white' },        // 微調為質感磚紅
  { name: 'CSS3', color: '2173F3', logo: 'css3', logoColor: 'white' },          // 現代科技亮藍
  { name: 'SCSS', color: 'CF649A', logo: 'sass', logoColor: 'white' },          // 柔和乾燥玫瑰粉
  { name: 'JavaScript', color: 'F0DB4F', logo: 'javascript', logoColor: '323330' }, // 降低刺眼感，更像官方調色
  { name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white' }, // 保持經典微調極客藍

  // 框架與工具
  { name: 'React', color: '00D8FF', logo: 'react', logoColor: '1C2022' },       // 飽和度更高的霓虹青（字改深色才清晰）
  { name: 'Vue.js', color: '42B883', logo: 'vue.js', logoColor: 'white' },      // 官方現代翡翠綠
  { name: 'Vite', color: 'BD34FE', logo: 'vite', logoColor: 'white' },          // 現代感極強的幻彩紫
  { name: 'Nuxt.js', color: '00DC82', logo: 'nuxt.js', logoColor: 'white' },    // Nuxt 3/4 官方最新螢光綠

  // 版控與資料庫
  { name: 'Git', color: 'F05032', logo: 'git', logoColor: 'white' },            // 經典亮橘紅
  { name: 'SVN', color: '5D7CA6', logo: 'subversion', logoColor: 'white' },     // 將古董藍調為洗鍊的莫蘭迪藍灰色
  { name: 'SQL', color: '336791', logo: 'sqlite', logoColor: 'white' },         // 深邃洗鍊的商務藍

  // 開發工具
  { name: 'VSCode', color: '23A7F2', logo: 'visual-studio-code', logoColor: 'white' } // 現代微軟流暢設計的亮藍
]

const certs = [
  {
    title: '財產保險業務員資格',
    issuer: '財團法人台灣金融研訓院',
    date: '2019年8月',
    icon: 'fluent:document-ribbon-16-regular',
    color: 'emerald'
  },
  {
    title: '金融常識與職業道德',
    issuer: '財團法人台灣金融研訓院',
    date: '2019年6月',
    icon: 'fluent:currency-dollar-euro-16-filled',
    color: 'amber'
  },
  {
    title: 'TQC+ 程式語言 Python3',
    issuer: '財團法人中華民國電腦技能基金會',
    date: '2019年4月',
    icon: 'fluent:braces-16-filled',
    color: 'blue'
  },
  {
    title: 'TQC-OA-行動裝置應用',
    issuer: '財團法人中華民國電腦技能基金會',
    date: '2019年2月',
    icon: 'fluent:phone-checkmark-16-regular',
    color: 'indigo'
  },
  {
    title: '信託業業務人員信託業務專業測驗',
    issuer: '財團法人台灣金融研訓院',
    date: '2018年10月',
    icon: 'fluent:handshake-16-regular',
    color: 'teal'
  },
  {
    title: '證券商業務員',
    issuer: '證券暨期貨市場發展基金會',
    date: '2018年8月',
    icon: 'fluent:chart-person-20-regular',
    color: 'cyan'
  }
]

const colorClasses: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-600',
  amber: 'bg-amber-100 text-amber-600',
  blue: 'bg-blue-100 text-blue-600',
  indigo: 'bg-indigo-100 text-indigo-600',
  teal: 'bg-teal-100 text-teal-600',
  cyan: 'bg-cyan-100 text-cyan-600'
}
</script>

<template>
  <div class="animate-fade-in space-y-10 py-2 w-full max-w-4xl mx-auto">
    <!-- Skills Section -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner shrink-0">
          <NuxtIcon name="fluent:box-toolbox-20-regular" class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-800">技能與工具</h3>
          <p class="text-xs text-slate-500 font-medium">Skills & Tools</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-3 bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-sm hover:shadow-md transition-all">
        <img
          v-for="skill in skills"
          :key="skill.name"
          :src="`https://img.shields.io/badge/-${skill.name}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=${skill.logoColor}`"
          :alt="skill.name" class="h-6 shadow-sm cursor-default hover:scale-105 transition-transform"
        />
      </div>
    </div>

    <!-- Certifications Section -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-inner shrink-0">
          <NuxtIcon name="lucide:award" class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-800">專業證照</h3>
          <p class="text-xs text-slate-500 font-medium">Certifications</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          v-for="(cert, index) in certs"
          :key="index"
          class="bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-sm hover:shadow-md transition-all flex items-start gap-4"
        >
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center shadow-inner shrink-0', colorClasses[cert.color]]">
            <NuxtIcon :name="cert.icon" class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-base font-bold text-slate-800 leading-tight mb-1.5">{{ cert.title }}</h4>
            <p class="text-xs text-slate-500 font-medium mb-1">{{ cert.issuer }}</p>
            <p class="text-xs text-slate-400">發照日期：{{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
