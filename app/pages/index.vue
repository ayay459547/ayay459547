<script setup lang="ts">
import ProfileTab from '~/components/ProfileTab.vue'
import ExperienceTab from '~/components/ExperienceTab.vue'
import ProjectsTab from '~/components/ProjectsTab.vue'
import SkillsCertsTab from '~/components/SkillsCertsTab.vue'

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
