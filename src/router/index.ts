// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

import WcHome from '../wc-home/wc-home.vue';
import wcLogin from '../wc-login/wc-login.vue';

const routes = [
  { path: '/', component: WcHome, name: 'Home' },
  { path: '/songs', component: wcLogin, name: 'Login' },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
