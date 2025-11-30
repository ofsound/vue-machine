import { createRouter, createWebHistory } from 'vue-router'
import TailwindPages from '@/components/TailwindPages.vue'
import RemoteSync from '@/components/RemoteSync.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pages',
      component: TailwindPages
    },
    {
      path: '/sync',
      name: 'sync',
      component: RemoteSync
    }
  ],
})

export default router
