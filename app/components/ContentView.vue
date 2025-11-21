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
  overflow: auto;
  border: 1px solid #8b8b8b;
  border-radius: 8px;
  color: #ccc;
  padding: 2rem;
}
</style>
