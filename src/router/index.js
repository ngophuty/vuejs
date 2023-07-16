import { createRouter, createWebHistory } from 'vue-router'
import Qui from '../views/Qui.vue'
import Login from '../views/Login.vue'
import Test from '../components/Test.vue'
import FormChat from '../views/FormChat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: FormChat
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {path:'/test',
    name: 'test',
    component: Test
    },
    // {
    //   path:'/chat',
    //   name: 'chat',
    //   component: FormChat
    // }
  ]
})

export default router
