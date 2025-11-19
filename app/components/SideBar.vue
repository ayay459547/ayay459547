<script setup lang="ts">
const imgSrc = usePublicUrl('/images/Caleb.jpg')
</script>

<template>
  <CardView width="100%" height="100%">
    <div class="side-bar">
      <img
        :src="imgSrc"
        alt="Caleb"
        class="side-bar-img"
      >
      <h1 class="side-bar-title">Chen Chan Hsieh</h1>
    </div>
  </CardView>
</template>

<style lang="scss" scoped>
.side-bar {
  width: 100%;
  height: 100%;

  &-img {
    width: 100%;
    height: auto;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &-title {
    font-weight: bold;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px 4px #00000080;
  }
}
</style>
