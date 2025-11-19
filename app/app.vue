<script lang="ts" setup>
// import background from '~/assets/images/background.jpg'

</script>

<template>
  <div class="app-wrapper">
    <img
      src="/images/background.png"
      alt="Background"
      class="app-img"
    >
    <div class="app-bg"/>

    <div class="app-container">
      <div class="app-content">
        <CardView width="100%">
          Chen Chan Hsieh
        </CardView>
        <CardView width="100%">
          Skills
        </CardView>
        <CardView width="100%">
          Work Experience
        </CardView>
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
    overflow: auto;
  }

  &-content {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 8rem;
  }
}
</style>
