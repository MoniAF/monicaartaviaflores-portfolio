import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import Projectview from '@/views/Projectview.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },

    {
        path: '/project/:name',
        component: Projectview
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    // ¡Agrega esta función clave aquí abajo!
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 80 // Ajusta este margen para que el menú flotante no tape los títulos de tus secciones
            }
        }
        return { top: 0 }
    }
})

export default router