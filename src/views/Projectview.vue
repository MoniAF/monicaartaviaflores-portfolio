<script setup>
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '@/data/projects'
import MediaGallery from '@/components/MediaGallery.vue'
import ProjectCard from '@/components/ProjectCard.vue'
const route = useRoute()
const project = computed(() => projects.find((item) => item.slug === route.params.name))
const otherProjects = computed(() =>
  projects
    .filter((item) => item.slug !== project.value?.slug)
    .slice(0, 2)
    .map((item) => ({ ...item, featured: false }))
)
watch(
  project,
  (value) => {
    document.title = `${value?.title || 'Project not found'} | Mónica Artavia Flores`
  },
  { immediate: true }
)
</script>

<template>
  <div v-if="project" class="project-page shell section">
    <RouterLink class="text-link back-link" to="/#projects">← All projects</RouterLink>
    <header class="project-heading">
      <div>
        <p class="eyebrow">{{ project.eyebrow }}</p>
        <h1>{{ project.title }}</h1>
        <p class="project-lead">{{ project.summary }}</p>
        <div class="actions">
          <a
            v-for="(link, index) in project.links"
            :key="link.url"
            class="button"
            :class="index === 0 ? 'button--primary' : 'button--outline'"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            >{{ link.label }} ↗</a
          >
        </div>
      </div>
      <div class="project-emblem">
        <img
          :src="project.screenshots[0]?.src || project.logo"
          :alt="project.screenshots[0]?.alt || project.logoAlt"
          :class="{ 'is-screenshot': project.screenshots.length }"
          width="720"
          height="450"
        />
      </div>
    </header>
    <dl class="project-facts">
      <div>
        <dt>Focus</dt>
        <dd>{{ project.role }}</dd>
      </div>
      <div>
        <dt>Period</dt>
        <dd>{{ project.period }}</dd>
      </div>
      <div>
        <dt>Category</dt>
        <dd>{{ project.category }}</dd>
      </div>
    </dl>
    <div class="project-overview">
      <section>
        <p class="eyebrow">The project</p>
        <h2>Overview</h2>
        <p>{{ project.description }}</p>
        <template v-if="project.contributions.length"
          ><h3>What the work includes</h3>
          <ul class="detail-list">
            <li v-for="point in project.contributions" :key="point">{{ point }}</li>
          </ul></template
        ><template v-if="project.evolution"
          ><h3>From original to remastered</h3>
          <p>{{ project.evolution }}</p></template
        >
        <p v-if="project.note" class="project-note">{{ project.note }}</p>
      </section>
      <aside class="technology-panel">
        <h2>Tools & skills</h2>
        <ul class="tags">
          <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
        </ul>
      </aside>
    </div>
    <MediaGallery :key="project.slug" :images="project.screenshots" :title="project.title" />
    <section class="more-projects" aria-labelledby="more-title">
      <p class="eyebrow">Keep exploring</p>
      <h2 id="more-title">More projects</h2>
      <div class="project-grid">
        <ProjectCard v-for="item in otherProjects" :key="item.slug" :project="item" />
      </div>
    </section>
  </div>
  <section v-else class="section shell not-found">
    <p class="eyebrow">404</p>
    <h1>Project not found</h1>
    <p>This project isn't in the portfolio.</p>
    <RouterLink class="button button--primary" to="/#projects">Explore projects</RouterLink>
  </section>
</template>
