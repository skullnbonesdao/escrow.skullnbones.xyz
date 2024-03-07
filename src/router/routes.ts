import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/escrow',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/EscrowPage.vue') }],
  },

  {
    path: '/p2p',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/P2PEscrowPage.vue') },
    ],
  },

  {
    path: '/deals',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/DealsPage.vue') }],
  },

  {
    path: '/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/CreateEscrowPage.vue') },
    ],
  },

  {
    path: '/settings',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/SettingsPage.vue') }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
