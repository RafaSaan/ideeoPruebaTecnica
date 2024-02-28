import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AOS from "aos";
import 'aos/dist/aos.css';
import PartnersView from '@/views/PartnersView.vue';
import ContactUsAdminView from '@/views/ContactUsAdminView.vue';

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
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
      beforeEnter: (to, from, next) => {
        const prefix = 'grp_token_/'.replace('/', '_')
        if (sessionStorage.getItem(prefix)) {
          next();
        } else {
          next('/login');
        }
      },
      children: [
        { path: '', name:'dashboard', component: ContactUsAdminView },
        { path: 'partners', name:'dashboard.partners', component: PartnersView }
      ]
    },
  ]
})
router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router
