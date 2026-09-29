import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/project/:name', component: () => import('@/views/Projectview.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('@/views/NotFoundView.vue') }
  ],
  async scrollBehavior(to, from, savedPosition) {
    await nextTick()
    if (savedPosition) return savedPosition
    const target = to.hash ? document.getElementById(to.hash.slice(1)) : null
    if (target)
      return {
        el: target,
        top: 100,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth'
      }
    return { top: 0 }
  }
})
router.afterEach((to, from) => {
  if (to.path === '/') document.title = 'Mónica Artavia Flores | Software Developer'
  else if (!to.path.startsWith('/project/'))
    document.title = 'Page not found | Mónica Artavia Flores'
  if (to.path !== from.path)
    nextTick(() => document.getElementById('main')?.focus({ preventScroll: true }))
})
export default router
