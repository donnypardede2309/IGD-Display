import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../view/admin_page.vue'
import View from '../view/view_page.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/admin'
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/view',
      name: 'view',
      component: View
    }
  ]
})

export default router