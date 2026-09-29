<script setup>
import { computed, ref } from 'vue'
import { projects, projectCategories } from '@/data/projects'
import ProjectCard from './ProjectCard.vue'
const selectedCategory = ref('All')
const filteredProjects = computed(() =>
  projects.filter(
    (project) => selectedCategory.value === 'All' || project.category === selectedCategory.value
  )
)
</script>

<template>
  <section id="projects" class="section shell" aria-labelledby="projects-title">
    <div class="section-heading">
      <div>
        <p class="eyebrow">Explore my work</p>
        <h2 id="projects-title">Projects with <em>purpose.</em></h2>
      </div>
      <p>From full stack applications and databases to creative community work.</p>
    </div>
    <div class="filters" role="group" aria-label="Filter projects by category">
      <button
        v-for="category in projectCategories"
        :key="category"
        :aria-pressed="selectedCategory === category"
        @click="selectedCategory = category"
      >
        {{ category }}
      </button>
    </div>
    <p class="visually-hidden" role="status">{{ filteredProjects.length }} projects shown</p>
    <div class="project-grid">
      <ProjectCard v-for="project in filteredProjects" :key="project.slug" :project="project" />
    </div>
  </section>
</template>
