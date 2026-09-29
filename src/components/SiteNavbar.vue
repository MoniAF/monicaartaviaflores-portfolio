<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const menuOpen = ref(false)
const navigation = ref(null)
const toggle = ref(null)
const activeSection = ref('home')
const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'community', label: 'TCU' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]
function closeMenu(event) {
  if (event.type === 'keydown' && event.key !== 'Escape') return
  if (event.type === 'click' && navigation.value?.contains(event.target)) return
  if (menuOpen.value && event.type === 'keydown') toggle.value?.focus()
  menuOpen.value = false
}
function trackSection() {
  const lastSection = sections.at(-1)?.id
  const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
  if (isAtBottom && lastSection) {
    activeSection.value = lastSection
    return
  }
  const elements = ['home', ...sections.map((section) => section.id)]
  let currentSection = 'home'
  for (const id of elements) {
    const element = document.getElementById(id)
    if (element && element.getBoundingClientRect().top <= 150) currentSection = id
  }
  activeSection.value = currentSection
}
function isActive(id) {
  return route.path.startsWith('/project/')
    ? id === (route.params.name === 'tcu' ? 'community' : 'projects')
    : route.path === '/' && activeSection.value === id
}
watch(
  () => route.fullPath,
  async () => {
    menuOpen.value = false
    await nextTick()
    trackSection()
  }
)
onMounted(() => {
  window.addEventListener('scroll', trackSection, { passive: true })
  document.addEventListener('click', closeMenu)
  document.addEventListener('keydown', closeMenu)
  trackSection()
})
onUnmounted(() => {
  window.removeEventListener('scroll', trackSection)
  document.removeEventListener('click', closeMenu)
  document.removeEventListener('keydown', closeMenu)
})
</script>

<template>
  <header class="site-header" ref="navigation">
    <nav class="shell nav" aria-label="Main navigation">
      <RouterLink
        class="brand"
        to="/#home"
        aria-label="Mónica Artavia Flores, home"
        @click="menuOpen = false"
        >MAF<span aria-hidden="true">✿</span></RouterLink
      >
      <button
        ref="toggle"
        class="nav-toggle"
        :aria-expanded="menuOpen"
        aria-controls="main-menu"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? 'Close ×' : 'Menu ☰' }}
      </button>
      <ul id="main-menu" class="nav-links" :class="{ 'is-open': menuOpen }">
        <li v-for="section in sections" :key="section.id">
          <RouterLink
            :to="{ path: '/', hash: '#' + section.id }"
            :aria-current="isActive(section.id) ? 'location' : undefined"
            @click="menuOpen = false"
            >{{ section.label }}</RouterLink
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
