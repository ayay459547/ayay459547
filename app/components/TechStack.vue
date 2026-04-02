<script setup lang="ts"></script>

<template>
  <section id="stack" class="py-24 relative bg-slate-50">
    <!-- Background Halo -->
    <div
      class="absolute right-0 top-0 w-96 h-96 bg-brand-100/50 rounded-full blur-3xl pointer-events-none"
    ></div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 text-center">
      <h3 class="text-3xl font-bold text-slate-900 mb-12 js-fade-up">
        核心技術堆疊
      </h3>

      <div class="flex flex-wrap justify-center gap-4 md:gap-6 js-fade-up">
        <!-- Tech Pills -->
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:vue" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">Vue.js</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:react" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">React</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:vitejs" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">Vite</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon
            icon="logos:typescript-icon"
            class="text-3xl"
          ></IconifyIcon>
          <span class="font-semibold text-slate-700">TypeScript</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:javascript" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">JavaScript</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon
            icon="vscode-icons:file-type-sql"
            class="text-3xl"
          ></IconifyIcon>
          <span class="font-semibold text-slate-700">SQL</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:html-5" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">HTML5</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:css-3" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">CSS3</span>
        </div>
        <div
          class="glass-card flex items-center gap-3 px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform cursor-default"
        >
          <IconifyIcon icon="logos:sass" class="text-3xl"></IconifyIcon>
          <span class="font-semibold text-slate-700">SCSS</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
