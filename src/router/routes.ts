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
    path: '/details/:account',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EscrowDetailPage.vue') },
    ],
  },

  {
    path: '/create',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/EditEscrowPage.vue') },
    ],
  },

  {
    path: '/faq',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/FAQPage.vue') }],
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
