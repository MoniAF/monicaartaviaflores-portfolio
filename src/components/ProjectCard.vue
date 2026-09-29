<script setup>
defineProps({ project: { type: Object, required: true } })
</script>

<template>
  <article class="project-card" :class="{ 'project-card--featured': project.featured }">
    <RouterLink
      :to="'/project/' + project.slug"
      class="project-card__visual"
      :class="{ 'has-screenshot': project.screenshots.length }"
      :aria-label="'Explore ' + project.title"
    >
      <img
        :src="project.screenshots[0]?.src || project.logo"
        :alt="project.screenshots[0]?.alt || project.logoAlt"
        loading="lazy"
        width="720"
        height="450"
      />
      <span class="project-card__category">{{ project.category }}</span>
    </RouterLink>
    <div class="project-card__body">
      <p class="eyebrow">{{ project.eyebrow }}</p>
      <h3>
        <RouterLink :to="'/project/' + project.slug">{{ project.title }}</RouterLink>
      </h3>
      <p>{{ project.summary }}</p>
      <ul class="tags" aria-label="Technologies">
        <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
      </ul>
      <RouterLink class="text-link" :to="'/project/' + project.slug"
        >Explore project <span aria-hidden="true">↗</span></RouterLink
      >
    </div>
  </article>
</template>
