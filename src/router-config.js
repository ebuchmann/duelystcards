import VueRouter from 'vue-router'

import Home from 'pages/Home'
import Deck from 'pages/Deck'

export const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/deck/:faction', component: Deck },
  ],
})
