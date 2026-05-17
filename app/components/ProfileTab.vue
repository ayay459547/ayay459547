<script setup lang="ts"></script>

<template>
  <div class="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-full animate-fade-in py-8">
    <!-- 3D-like Glowing Element -->
    <div class="relative w-32 h-32 md:w-48 md:h-48 mb-8 group perspective-1000">
      <div class="absolute inset-0 bg-linear-to-br from-blue-400 to-indigo-600 rounded-4xl shadow-[0_0_80px_-20px_rgba(59,130,246,0.6)] transform transition-transform duration-500 group-hover:rotate-x-12 group-hover:rotate-y-12" style="transform-style: preserve-3d;">
        <div class="absolute inset-0 bg-white/20 rounded-4xl backdrop-blur-sm border border-white/40"></div>
        <!-- Inner concentric rings -->
        <div class="absolute inset-4 rounded-[1.5rem] border border-white/30 bg-linear-to-t from-white/10 to-transparent flex items-center justify-center shadow-inner">
          <div class="w-16 h-16 bg-white/90 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.1)] backdrop-blur-md flex items-center justify-center">
            <NuxtIcon name="lucide:code-2" class="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <!-- Glossy highlight -->
        <div class="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-white/40 to-transparent rounded-t-4xl pointer-events-none"></div>
      </div>
    </div>

    <div class="text-center space-y-4">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-sm">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Available for New Opportunities
      </div>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
        建構具備商業價值的 <br />
        <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">現代化前端應用</span>
      </h2>

      <p class="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed pt-2">
        專注於前端開發，曾參與物流、製造與金融保險相關專案，熟悉 Vue、React、TypeScript，以及 Vite 等開發工具。平常主要負責把需求轉成清楚、好操作的使用介面，讓整體操作流程更順暢。<br><br>
        除了技術之外，也很重視溝通與協作，能和產品、後端一起討論需求、分工合作，把功能順利完成。同時也會持續學習新的技術，並嘗試應用在實際專案中。
      </p>
    </div>
  </div>
</template>
