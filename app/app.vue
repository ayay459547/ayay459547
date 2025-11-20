<script lang="ts" setup>
// import background from '~/assets/images/background.jpg'

const imgSrc = usePublicUrl('/images/background.png')

// const config = useRuntimeConfig()
// const type = config.public.type
// const version = config.public.version
</script>

<template>
  <div class="app-wrapper">
    <img :src="imgSrc" alt="Background" class="app-img" />
    <div class="app-bg" />

    <div class="app-container">
      <div class="app-side-bar">
        <SideBar />
      </div>
      <div class="app-content-view">
        <ContentView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div image {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

.app {
  &-wrapper {
    position: relative;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  &-img,
  &-bg,
  &-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
  }

  &-img {
    z-index: 1;
    object-fit: cover;
  }

  &-bg {
    z-index: 2;
  }

  &-container {
    z-index: 3;
    width: 100%;
    height: 100%;
    overflow: auto;

    display: flex;
    gap: 4rem;
    padding: 4rem;

    @media screen and (max-width: 768px) {
      gap: 2rem;
      padding: 2rem;
    }
  }

  &-side-bar {
    width: 320px;

    @media screen and (max-width: 768px) {
      width: 240px;
    }
  }

  &-content-view {
    flex: 1;
  }
}
</style>
