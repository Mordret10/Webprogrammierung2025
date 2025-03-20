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
      path: '/technician',
      name: 'technician',

      component: () => import('../views/BookingTechnicianView.vue'),
    },
    {
      path: '/musician',
      name: 'musician',

      component: () => import('../views/BookingMusicianView.vue'),
    },
    {
      path: '/dryhire',
      name: 'dryhire',

      component: () => import('../views/DryHireView.vue'),
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
    {
      path: '/overviewBookings',
      name: 'overviewBookings',

      component: () => import('../views/OverviewBookingsView.vue'),
    },
    {
      path: '/owner',
      name: 'owner',

      component: () => import('../views/GetRequestsView.vue'),
    },
  ],
})

export default router
