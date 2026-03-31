<script setup lang="ts">
import HomeSvg from '~/assets/svg/Home.svg?url'
</script>

<template>
  <div class="home-page">
    <div class="chart">
      <img
        src="https://github-readme-stats.vercel.app/api?username=ayay459547&show_icons=true"
        alt="GitHub stats"
      />

      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayay459547&layout=donut"
        alt="Top languages"
      />
    </div>

    <img :src="HomeSvg" class="svg" alt="svg" />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 2rem;

  .chart {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1.5rem;

    img {
      flex: 1;
    }
  }

  .svg {
    width: 240px;
    height: auto;
    position: absolute;
    bottom: 1rem;
    right: 1rem;

    @media screen and (max-width: 768px) {
      width: 160px;
    }
  }
}
</style>
