import VueRouter from 'vue-router'

import Home from 'pages/Home'

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home },
  ],
})
