import VueRouter from 'vue-router'

import Home from 'pages/Home'
import Deck from 'pages/Deck'

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home },
    { path: '/deck', component: Home },
    { path: '/deck/:faction', component: Deck },
  ],
})
