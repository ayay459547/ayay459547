<script setup lang="ts">
import { ref } from 'vue'

const card = ref<HTMLElement | null>(null)

const props = defineProps<{
  title?: string,
  width?: string,
  height?: string
}>()

const bindStyle = computed(() => {
  return {
    width: props.width || '300px',
    height: props.height || '300px'
  }
})
</script>

<template>
  <div ref="card" class="card" :style="bindStyle">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.card {
  min-width: fit-content;
  min-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 36px;
  font-size: 24px;
  font-weight: bold;
  overflow: hidden;
}
</style>
