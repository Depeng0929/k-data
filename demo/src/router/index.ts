import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../views/home.vue'),

  },
  {
    path: '/link-list',
    component: () => import('../views/linkList.vue'),
  },
  {
    path: '/tree-node',
    component: () => import('../views/treeNode.vue'),
  },
  {
    path: '/graph',
    component: () => import('../views/graph.vue'),
  },
  {
    path: '/priority',
    component: () => import('../views/priorityQueue.vue'),
  },
  {
    path: '/lru',
    component: () => import('../views/lru.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
