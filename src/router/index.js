import { createRouter, createWebHashHistory  } from 'vue-router'
const Home = () => import(/* webpackChunkName: 'Home' */ '@/views/Home.vue')
const Impressum = () => import(/* webpackChunkName: 'Impressum' */ '@/views/Impressum.vue')
const About = () => import(/* webpackChunkName: 'About' */ '@/views/About.vue')
const Explore = () => import(/* webpackChunkName: 'Explore' */ '@/views/Explore.vue')
const ContactSubmit = () => import(/* webpackChunkName: 'ContactSubmit' */ '@/views/ContactSubmit.vue')
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
  },
  {
    path: '/submit',
    name: 'Submited',
    component: ContactSubmit
  }
]

const router = createRouter({
  mode: 'history',
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
