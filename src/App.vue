<script setup>
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>
<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <SiteNavbar />
  <main id="main" tabindex="-1"><RouterView /></main>
  <SiteFooter />
</template>
