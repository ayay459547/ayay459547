<script setup lang="ts">
const projects = [
  {
    key: '1',
    title: '複雜業務邏輯轉化',
    description: '深入理解物流追蹤與倉儲管理，將龐雜的數據轉化為使用者友善的操作介面，提升內部作業效率與精準度。',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
    tags: ['物流系統', '製造業 APS']
  },
  {
    key: '2',
    title: '嚴謹與合規性確保',
    description: '處理高敏感數據與複雜表單狀態，確保金融與保險申報流程的安全、穩定，打造高信賴感的使用體驗。',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    tags: ['金融保險平台']
  }
]
</script>

<template>
  <div class="animate-fade-in space-y-6 py-2 w-full">
    <h3 class="text-xl font-bold text-slate-800 mb-6">跨領域系統整合成果</h3>

    <div class="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
      <div
        v-for="project in projects"
        :key="project.key"
        class="bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all group flex flex-col h-full min-w-0"
      >
        <div class="h-48 md:h-56 rounded-2xl mb-6 overflow-hidden relative shrink-0">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          <div class="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-medium rounded-lg border border-white/20"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="flex-1 flex flex-col">
          <h4 class="text-xl font-bold text-slate-800 mb-3 wrap-break-word">{{ project.title }}</h4>
          <p class="text-sm text-slate-600 leading-relaxed wrap-break-word">
            {{ project.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
