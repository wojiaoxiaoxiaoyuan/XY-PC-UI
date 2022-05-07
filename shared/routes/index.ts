import { HOME } from '~/routes/route-names'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: HOME,
      component: () => import('@/App.vue')
    }
  ]
})

export default router
