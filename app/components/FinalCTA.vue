<script setup lang="ts"></script>

<template>
  <section id="contact" class="py-24 relative overflow-hidden">
    <div class="absolute inset-0 bg-brand-600"></div>
    <!-- Decorative abstract shapes -->
    <div
      class="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none"
    >
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
      ></div>
    </div>

    <div class="max-w-4xl mx-auto px-6 relative z-10 text-center js-fade-up">
      <h2 class="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
        準備好提升您的數位產品體驗了嗎？
      </h2>
      <p class="text-brand-100 text-lg mb-10 max-w-2xl mx-auto font-light">
        無論是企業內部系統重構、複雜業務邏輯的前端實作，或是全新數位產品的開發，我都能為您提供最專業的技術支援。
      </p>
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          href="mailto:hello@example.com"
          class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-brand-700 bg-white rounded-full font-semibold hover:bg-slate-50 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <IconifyIcon
            icon="ph:envelope-simple-bold"
            class="mr-2 text-xl"
          ></IconifyIcon>
          與我聯繫 (Email)
        </a>
        <a
          href="#"
          class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all hover:-translate-y-1 glass"
        >
          <IconifyIcon icon="mdi:github" class="mr-2 text-xl"></IconifyIcon>
          瀏覽 GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped></style>
