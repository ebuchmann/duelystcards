import VueRouter from 'vue-router'

import Home from 'pages/Home'
import Gauntlet from 'pages/Gauntlet'
import GauntletOverview from 'pages/GauntletOverview'
import GauntletSingle from 'pages/GauntletSingle'

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home, name: 'deckbuilder' },
    { path: '/gauntlet', component: Gauntlet, name: 'gauntlet' },
    { path: '/gauntlet/:username', component: GauntletOverview, name: 'gauntlet-overview' },
    { path: '/gauntlet/:username/:id', component: GauntletSingle, name: 'gauntlet-single' },
  ],
})
