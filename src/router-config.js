import VueRouter from 'vue-router';
import mixpanel from 'mixpanel-browser';

import Home from 'pages/Home';
// import Gauntlet from 'pages/Gauntlet'
// import GauntletOverview from 'pages/GauntletOverview'
// import GauntletSingle from 'pages/GauntletSingle'
import Deck from 'pages/Deck';
import DeckOverview from 'pages/DeckOverview';
import DeckSingle from 'pages/DeckSingle';

export const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Home, name: 'deckbuilder' },
    // { path: '/gauntlet', component: Gauntlet, name: 'gauntlet' },
    // { path: '/gauntlet/:username', component: GauntletOverview, name: 'gauntlet-overview' },
    // { path: '/gauntlet/:username/:id', component: GauntletSingle, name: 'gauntlet-single' },
    { path: '/deck-tracker/', component: Deck, name: 'deck' },
    {
      path: '/deck-tracker/:username',
      component: DeckOverview,
      name: 'deck-overview',
      beforeRouteEnter(to, from, next) {
        mixpanel.track('Used deck tracker');
        next();
      }
    },
    {
      path: '/deck-tracker/:username/:id',
      component: DeckSingle,
      name: 'deck-single'
    }
  ]
});
