<script setup lang="ts">
defineProps<{
  activeTab: string
}>()
</script>

<template>
  <div class="h-full">
    <ProfileTab v-show="activeTab === 'profile'" />
    <ExperienceTab v-show="activeTab === 'experience'" />
    <ProjectsTab v-show="activeTab === 'projects'" />
    <SkillsCertsTab v-show="activeTab === 'skills-certs'" />
  </div>
</template>
