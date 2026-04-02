<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-slate-900 py-12 border-t border-slate-800 text-center">
    <div class="max-w-7xl mx-auto px-6">
      <div
        class="flex items-center justify-center gap-2 mb-6 text-xl font-bold text-white"
      >
        <IconifyIcon icon="ph:code-bold" class="text-brand-500"></IconifyIcon>
        謝禎展 <span class="text-slate-500 font-light">| 前端工程師</span>
      </div>
      <p class="text-slate-500 text-sm">
        &copy;
        {{ year }}
        Zhen-Zhan Xie. All rights reserved. <br class="md:hidden" />Crafted with
        React, Vue & Tailwind.
      </p>
    </div>
  </footer>
</template>

<style lang="sass" scoped></style>
