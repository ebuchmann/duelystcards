import VueRouter from 'vue-router'

import Deck from 'pages/Deck'

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Deck },
  ],
})
