<script setup lang="ts">
defineProps<{
  activeTab: string
}>()
</script>

<template>
  <div class="h-full">
    <ProfileTab v-if="activeTab === 'profile'" />
    <ExperienceTab v-else-if="activeTab === 'experience'" />
    <ProjectsTab v-else-if="activeTab === 'projects'" />
    <SkillsCertsTab v-else-if="activeTab === 'skills-certs'" />
  </div>
</template>
