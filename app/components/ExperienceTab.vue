<script setup lang="ts">
const experiences = [
  {
    key: '1',
    title: '物流業 ERP 系統',
    role: '前端工程師',
    description: '參與物流追蹤與倉儲管理系統開發，負責將龐雜的數據轉化為使用者友善的操作介面，提升內部作業效率與精準度。',
    icon: 'fluent:box-16-regular',
    color: 'blue'
  },
  {
    key: '2',
    title: '製造業 APS 系統',
    role: '前端工程師',
    description: '深入理解製造業生產排程與資源規劃邏輯，負責先進排程系統(APS)之前端介面開發與架構優化，導入現代化技術棧。',
    icon: 'fluent-mdl2:production-floor-management',
    color: 'emerald'
  },
  {
    key: '3',
    title: '金融人壽業 行動保全 + 繳費平台',
    role: '前端工程師',
    description: '處理高敏感數據與複雜表單狀態，確保金融與保險申報流程的安全、穩定與合規性，打造高信賴感的使用體驗。',
    icon: 'fluent-mdl2:waitlist-confirm-mirrored',
    color: 'purple'
  },
  {
    key: '4',
    title: '金融產險業',
    role: '行政助理',
    description: '協助產險相關業務之行政作業處理、資料建檔與文件維護，確保跨部門溝通順暢並維持內部流程的高效運作。',
    icon: 'fluent-mdl2:document-set',
    color: 'slate'
  }
]

const colorClasses: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  purple: 'bg-purple-100 text-purple-600',
  slate: 'bg-slate-100 text-slate-600'
}
</script>

<template>
  <div class="animate-fade-in space-y-4 max-w-3xl mx-auto py-2">
    <h3 class="text-xl font-bold text-slate-800 mb-6">工作經驗</h3>

    <div class="space-y-4">
      <div
        v-for="exp in experiences"
        :key="exp.key"
        class="bg-white/40 backdrop-blur-md rounded-3xl p-5 md:p-6 border border-white/60 shadow-sm hover:shadow-md transition-all"
      >
        <div class="flex items-center gap-4 mb-3">
          <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner shrink-0', colorClasses[exp.color]]">
            <NuxtIcon :name="exp.icon" class="w-6 h-6" />
          </div>
          <div>
            <h4 class="text-lg font-bold text-slate-800">{{ exp.title }}</h4>
            <p class="text-sm text-slate-500 font-medium">{{ exp.role }}</p>
          </div>
        </div>
        <p class="text-sm text-slate-600 leading-relaxed md:pl-16">
          {{ exp.description }}
        </p>
      </div>
    </div>
  </div>
</template>
