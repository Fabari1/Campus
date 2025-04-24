// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'SignIn', component: () => import('@/views/SignIn.vue'), meta:{ transition: 'zoom'} },
  { path: '/home', name: 'Home', component: () => import('@/views/Home.vue'), meta:{ transition: 'fade'} }, 
  { path: '/courses', name: 'Courses', component: () => import('@/views/Courses.vue'), meta:{ transition: 'fade'} },
  { path: '/course/:id', name: 'Course', component: () => import('@/views/Course.vue'), meta:{ transition: 'fade'} },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// Navigation Guards
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('signedIn') === 'true';

  if (to.name !== 'SignIn' && !isAuthenticated) {
    next({ name: 'SignIn' });
  }
  else if (to.name === 'SignIn' && isAuthenticated) {
    next({ name: 'Courses' });
  } else {
    next();
  }
})

export default router
