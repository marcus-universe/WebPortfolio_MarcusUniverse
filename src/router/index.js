import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: () => import('../views/Impressum.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
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
