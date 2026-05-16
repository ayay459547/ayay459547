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
    <KeepAlive>
      <ProfileTab v-if="activeTab === 'profile'" />
    </KeepAlive>
    <KeepAlive>
      <ExperienceTab v-if="activeTab === 'experience'" />
    </KeepAlive>
    <KeepAlive>
      <ProjectsTab v-if="activeTab === 'projects'" />
    </KeepAlive>
    <KeepAlive>
      <SkillsCertsTab v-if="activeTab === 'skills-certs'" />
    </KeepAlive>
  </div>
</template>
