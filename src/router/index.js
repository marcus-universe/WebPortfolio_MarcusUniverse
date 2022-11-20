import { createRouter, createWebHistory  } from 'vue-router'
const Home = () => import('@/views/Home.vue')
const Impressum = () => import('@/views/Impressum.vue')
const About = () => import('@/views/About.vue')
const Explore = () => import('@/views/Explore.vue')
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/explore',
    name: 'Explore',
    component: Explore
  }
]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),  
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => {
        resolve({top: 0 })
      }, 500)
    }
    )}
})

export default router
