<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
const props = defineProps({
  images: { type: Array, required: true },
  title: { type: String, required: true }
})
const dialog = ref(null)
const closeButton = ref(null)
const selectedIndex = ref(0)
const currentImage = computed(() => props.images[selectedIndex.value])
let trigger = null
let previousOverflow = ''
async function openImage(index, event) {
  selectedIndex.value = index
  trigger = event.currentTarget
  await nextTick()
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  dialog.value.showModal()
  closeButton.value?.focus()
}
function restoreFocus() {
  document.body.style.overflow = previousOverflow
  trigger?.focus()
}
function closeImage() {
  dialog.value?.close()
}
function closeOnBackdrop(event) {
  if (event.target === event.currentTarget) closeImage()
}
function moveImage(direction) {
  selectedIndex.value =
    (selectedIndex.value + direction + props.images.length) % props.images.length
}
watch(
  () => props.images,
  () => {
    closeImage()
    selectedIndex.value = 0
  }
)
onBeforeUnmount(() => {
  if (dialog.value?.open) document.body.style.overflow = previousOverflow
})
</script>

<template>
  <section v-if="images.length" class="project-gallery" aria-labelledby="gallery-title">
    <p class="eyebrow">A closer look</p>
    <h2 id="gallery-title">Project gallery</h2>
    <div class="gallery-grid">
      <figure v-for="(picture, index) in images" :key="picture.src">
        <button
          class="gallery-thumbnail"
          :aria-label="'Enlarge: ' + picture.alt"
          @click="openImage(index, $event)"
        >
          <img :src="picture.src" :alt="picture.alt" loading="lazy" width="960" height="600" /><span
            aria-hidden="true"
            >View full image ↗</span
          >
        </button>
        <figcaption v-if="picture.caption">{{ picture.caption }}</figcaption>
      </figure>
    </div>
    <dialog
      ref="dialog"
      class="lightbox"
      :aria-label="title + ' image gallery'"
      @close="restoreFocus"
      @click="closeOnBackdrop"
      @keydown.left.prevent="moveImage(-1)"
      @keydown.right.prevent="moveImage(1)"
    >
      <div class="lightbox__bar">
        <p aria-live="polite">{{ selectedIndex + 1 }} / {{ images.length }}</p>
        <button ref="closeButton" class="button button--light" @click="closeImage">Close ×</button>
      </div>
      <img v-if="currentImage" :src="currentImage.src" :alt="currentImage.alt" />
      <p v-if="currentImage?.caption">{{ currentImage.caption }}</p>
      <div v-if="images.length > 1" class="actions">
        <button class="button button--light" @click="moveImage(-1)">← Previous</button
        ><button class="button button--light" @click="moveImage(1)">Next →</button>
      </div>
    </dialog>
  </section>
</template>
