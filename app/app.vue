<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const activeTab = ref('profile')

const navItems = [
  { id: 'profile', label: '個人簡介', sublabel: 'Profile', icon: 'lucide:user' },
  { id: 'experience', label: '工作經驗', sublabel: 'Experience', icon: 'lucide:briefcase' },
  { id: 'projects', label: '專案展示', sublabel: 'Projects', icon: 'lucide:layers' },
  { id: 'skills-certs', label: '技能與證照', sublabel: 'Skills & Certs', icon: 'lucide:award' },
]

function switchTab(tabId: string) {
  activeTab.value = tabId
  if (process.client && window.innerWidth < 768) {
    document.getElementById('mobile-scroll-wrapper')?.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="bg-slate-50 relative flex items-center justify-center h-[100dvh] w-full overflow-hidden font-sans selection:bg-blue-200 selection:text-blue-900 text-slate-800 p-2 md:p-8">
    
    <!-- Abstract Background - Liquid Gradients -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-300/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
      <div class="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-cyan-300/40 rounded-full mix-blend-multiply filter blur-[120px] animate-blob" style="animation-delay: 2s;"></div>
      <div class="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-[120px] animate-blob" style="animation-delay: 4s;"></div>
      <!-- Subtle noise texture -->
      <div class="absolute inset-0 opacity-[0.015] mix-blend-overlay" style="background-image: url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')"></div>
    </div>

    <!-- Main Glass Window Container -->
    <div class="relative z-10 w-full h-full max-w-[1400px] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2rem] flex flex-col md:flex-row overflow-hidden transition-all duration-500">
      
      <!-- --- Left Sidebar --- -->
      <div class="w-full md:w-64 bg-white/30 border-b md:border-b-0 md:border-r border-white/50 flex flex-col backdrop-blur-md flex-shrink-0 z-30">
        <!-- Top Header -->
        <div class="px-5 pt-6 pb-4 flex justify-between items-center md:block">
          <div>
            <h1 class="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <div class="w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md flex-shrink-0">
                <img src="/images/Caleb.jpg" alt="Chen Chan Hsieh" class="w-full h-full object-cover" />
              </div>
              Chen Chan Hsieh
            </h1>          </div>
          <!-- Mobile GitHub Icon -->
          <a href="https://github.com/ayay459547" target="_blank" rel="noreferrer" class="md:hidden flex items-center justify-center w-10 h-10 bg-white/80 hover:bg-white text-slate-800 rounded-xl transition-all shadow-sm border border-white/60">
            <Icon icon="lucide:github" class="w-5 h-5" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex flex-col flex-1 px-5 py-4 space-y-3 overflow-y-auto scrollbar-hide">
          <button v-for="item in navItems" :key="item.id" @click="switchTab(item.id)"
            :class="[
              'w-full flex flex-row items-center justify-start gap-4 px-5 py-5 rounded-[1.25rem] cursor-pointer transition-all duration-300 nav-item',
              activeTab === item.id 
                ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/30 scale-[1.02]' 
                : 'text-slate-500 hover:bg-white/60'
            ]">
            <Icon :icon="item.icon" class="w-5 h-5" />
            <div class="flex flex-col items-start text-left text-current">
              <span class="text-[15px] font-bold tracking-wide leading-tight">{{ item.label }}</span>
              <span class="text-[10px] font-medium opacity-80 uppercase tracking-widest leading-tight mt-0.5">{{ item.sublabel }}</span>
            </div>
          </button>
        </div>

        <!-- Bottom Actions (Desktop Only) -->
        <div class="hidden md:block p-4 border-t border-white/50 mt-auto">
          <a href="https://github.com/ayay459547" target="_blank" rel="noreferrer" class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/80 hover:bg-white text-slate-800 rounded-2xl text-sm font-bold transition-all shadow-sm border border-white/60 hover:shadow-md hover:-translate-y-0.5">
            <Icon icon="lucide:github" class="w-[18px] h-[18px]" />
            GitHub
          </a>
        </div>
      </div>

      <!-- Mobile Navigation Dock -->
      <div class="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] max-w-sm bg-white/90 backdrop-blur-2xl border border-white/60 rounded-[1.75rem] flex flex-row p-2 gap-2 z-[100] shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-x-auto scrollbar-hide">
        <button v-for="item in navItems" :key="item.id" @click="switchTab(item.id)"
          :class="[
            'flex-1 flex flex-col items-center justify-center gap-1.5 px-2 py-2.5 rounded-[1.25rem] cursor-pointer transition-all duration-300 nav-item',
            activeTab === item.id 
              ? 'bg-blue-500 text-white shadow-xl shadow-blue-500/30 scale-[1.02]' 
              : 'text-slate-500 hover:bg-white/60'
          ]">
          <Icon :icon="item.icon" class="w-5 h-5" />
          <div class="flex flex-col items-center text-current text-center">
            <span class="text-[12px] font-bold tracking-wide leading-tight whitespace-nowrap">{{ item.label === '技能與證照' ? '技能證照' : item.label }}</span>
            <span class="text-[9px] font-medium opacity-80 uppercase tracking-widest leading-tight mt-0.5">{{ item.id === 'skills-certs' ? 'Skills' : item.sublabel }}</span>
          </div>
        </button>
      </div>

      <!-- Scrollable Area -->
      <div id="mobile-scroll-wrapper" class="flex-1 flex flex-col md:flex-row min-h-0 overflow-y-auto md:overflow-hidden relative z-20 pb-28 md:pb-0">
        <div class="flex-1 min-w-0 flex flex-col relative bg-white/20 md:h-full md:overflow-y-auto scrollbar-hide">
          <div class="flex-1 p-4 md:p-8 lg:p-12 relative">
            <NuxtPage :activeTab="activeTab" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles if needed, but mostly in main.css */
</style>
