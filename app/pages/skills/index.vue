<script setup lang="ts">
import SkillsSvg from '~/assets/svg/Professional-Skills.svg?url'

</script>

<template>
  <div class="skills-page">
    <h3>專業技能 Professional Skills</h3>

    <ul>
      <li>Vue</li>
      <li>React</li>
      <li>JavaScript (TypeScript)</li>
      <li>HTML</li>
      <li>CSS (SCSS)</li>
    </ul>

    <img :src="SkillsSvg" alt="svg" />
  </div>
</template>

<style lang="scss" scoped>
.skills-page {
  width: 100%;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 2rem;
  font-size: 1.3rem;

  ul {
    font-size: 1.5rem;
  }

  img {
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
