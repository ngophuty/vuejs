import { createRouter, createWebHistory } from 'vue-router'
import Qui from '../views/Qui.vue'
import Login from '../views/Login.vue'
import Test from '../components/Test.vue'

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
    },
    {path:'/test',
    name: 'test',
    component: Test
    }
  ]
})

export default router
