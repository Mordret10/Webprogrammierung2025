import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/cv',
      name: 'cv',

      component: () => import('../views/CurriculumVitaeView.vue'),
    },
    {
      path: '/gigs',
      name: 'gigs',

      component: () => import('../views/LocationsView.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',

      component: () => import('../views/GalleryView.vue'),
    },
    {
      path: '/booking',
      name: 'booking',

      component: () => import('../views/BookingView.vue'),
    },
    {
      path: '/dryhire',
      name: 'dryhire',

      component: () => import('../views/DryhireView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/legalinfo',
      name: 'legalinfo',

      component: () => import('../views/LegalInfoView.vue'),
    },
  ],
})

export default router
