import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/successStories/:type',
      name: 'successStories',
      component: () => import('../views/SuccessStoriesView.vue')
    },
  ]
})

export default router
