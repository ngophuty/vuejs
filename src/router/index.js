import { createRouter, createWebHistory } from 'vue-router'
import Qui from '../views/Qui.vue'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'qui',
      component: Qui
    },
    {
      path: '/login',
      name: Login,
      component: Login
    }
  ]
})

export default router
