<template>
  <div class="content-view">
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.content-view {
  width: 100%;
  height: 100%;
  overflow: hidden;
  // border: 1px solid #8b8b8b;
  border-radius: 36px;
  color: #e9e9e9;
  text-shadow: 2px 2px 4px #00000080;
  background-color: #b9854245;
}
</style>
