import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home.vue'),
    redirect: '/tree-node',
  },
  {
    path: '/tree-node',
    component: () => import('../views/treeNode.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
