<script setup lang="ts">
import type { NavList } from '~/types/nav'

const { navList = [] } = defineProps<{
  navList?: NavList
}>()
</script>

<template>
  <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 glass">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <a
        href="#"
        class="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2"
      >
        <div
          class="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-400 flex items-center justify-center text-white text-sm"
        >
          <IconifyIcon icon="ph:code-bold"></IconifyIcon>
        </div>
        Chen Chan Hsieh
      </a>
      <div class="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
        <a
          v-for="navItem in navList"
          :key="navItem.to"
          :href="`#${navItem.to}`"
          class="hover:text-brand-600 transition-colors"
        >
          {{ navItem.title }}
        </a>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
