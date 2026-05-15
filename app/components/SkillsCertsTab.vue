<script setup lang="ts">
import { Icon } from '@iconify/vue'

const skills = [
  { name: 'HTML5', color: 'E34F26', logo: 'html5', logoColor: 'white' },
  { name: 'CSS3', color: '1572B6', logo: 'css3', logoColor: 'white' },
  { name: 'SCSS', color: 'CC6699', logo: 'sass', logoColor: 'white' },
  { name: 'JavaScript', color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  { name: 'TypeScript', color: '3178C6', logo: 'typescript', logoColor: 'white' },
  { name: 'React', color: '61DAFB', logo: 'react', logoColor: 'black' },
  { name: 'Vue.js', color: '4FC08D', logo: 'vue.js', logoColor: 'white' },
  { name: 'Vite', color: '646CFF', logo: 'vite', logoColor: 'white' },
  { name: 'Nuxt.js', color: '00C58E', logo: 'nuxt.js', logoColor: 'white' },
  { name: 'Git', color: 'F05032', logo: 'git', logoColor: 'white' },
  { name: 'SVN', color: '809CC9', logo: 'subversion', logoColor: 'white' },
  { name: 'SQL', color: '4479A1', logo: 'sqlite', logoColor: 'white' },
  { name: 'VSCode', color: '007ACC', logo: 'visual-studio-code', logoColor: 'white' }
]

const certs = [
  {
    title: '財產保險業務員資格',
    issuer: '財團法人台灣金融研訓院',
    date: '2019年8月 · 永久有效',
    icon: 'lucide:shield-check',
    color: 'emerald'
  },
  {
    title: '金融 market 常識與職業道德',
    issuer: '財團法人台灣金融研訓院',
    date: '2019年6月 · 永久有效',
    icon: 'lucide:landmark',
    color: 'amber'
  },
  {
    title: 'TQC+ 程式語言 Python3',
    issuer: '財團法人中華民國電腦技能基金會',
    date: '2019年4月 · 永久有效',
    icon: 'lucide:terminal',
    color: 'blue'
  },
  {
    title: 'TQC-OA-行動裝置應用',
    issuer: '財團法人中華民國電腦技能基金會',
    date: '2019年2月 · 永久有效',
    icon: 'lucide:smartphone',
    color: 'indigo'
  },
  {
    title: '信託業業務人員信託業務專業測驗',
    issuer: '財團法人台灣金融研訓院',
    date: '2018年10月 · 永久有效',
    icon: 'lucide:hand-coins',
    color: 'teal'
  },
  {
    title: '證券商業務員',
    issuer: '證券暨期貨市場發展基金會',
    date: '2018年8月 · 永久有效',
    icon: 'lucide:trending-up',
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
        <div class="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shadow-inner flex-shrink-0">
          <Icon icon="lucide:sliders-horizontal" class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-800">技能與工具</h3>
          <p class="text-xs text-slate-500 font-medium">Skills & Tools</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-3 bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-sm hover:shadow-md transition-all">
        <img v-for="skill in skills" :key="skill.name"
          :src="`https://img.shields.io/badge/-${skill.name}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=${skill.logoColor}`"
          :alt="skill.name" class="h-[24px] shadow-sm cursor-default hover:scale-105 transition-transform" />
      </div>
    </div>

    <!-- Certifications Section -->
    <div>
      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shadow-inner flex-shrink-0">
          <Icon icon="lucide:award" class="w-5 h-5" />
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-800">專業證照</h3>
          <p class="text-xs text-slate-500 font-medium">Certifications</p>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div v-for="(cert, index) in certs" :key="index"
          class="bg-white/40 backdrop-blur-md rounded-2xl p-4 border border-white/60 shadow-sm hover:shadow-md transition-all flex items-start gap-4">
          <div :class="['w-12 h-12 rounded-xl flex items-center justify-center shadow-inner flex-shrink-0', colorClasses[cert.color]]">
            <Icon :icon="cert.icon" class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-base font-bold text-slate-800 leading-tight mb-1.5">{{ cert.title }}</h4>
            <p class="text-xs text-slate-500 font-medium mb-1">{{ cert.issuer }}</p>
            <p class="text-xs text-slate-400">發照日期 {{ cert.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
