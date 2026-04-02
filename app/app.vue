<script setup lang="ts">
import NavbarView from '~/components/NavbarView.vue'
import FooterView from '~/components/FooterView.vue'
import type { NavList } from '~/types/nav'

const navList: NavList = [
  { to: 'about', title: '關於我' },
  { to: 'expertise', title: '領域與價值' },
  { to: 'stack', title: '技術棧' }
]
</script>

<template>
  <div
    class="app text-slate-800 antialiased selection:bg-brand-100 selection:text-brand-700"
  >
    <!-- Navbar -->
    <NavbarView :navList="navList" />

    <RouterView />
    <!-- <NuxtRouteAnnouncer /> -->
    <!-- <NuxtWelcome /> -->

    <!-- Footer -->
    <FooterView />
  </div>
</template>

<style lang="scss" scoped>
.app {
  background-color: #f8fafc;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
