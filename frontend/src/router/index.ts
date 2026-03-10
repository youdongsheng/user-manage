import { createRouter, createWebHistory } from 'vue-router'
import UserManage from '../views/UserManage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/users'
    },
    {
      path: '/users',
      name: 'users',
      component: UserManage
    }
  ]
})

export default router
