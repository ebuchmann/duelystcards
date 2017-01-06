import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app';
import cardList from './modules/cardList'
import deck from './modules/deck'
import deckTracker from './modules/deckTracker'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    cardList,
    deck,
    deckTracker,
    user,
  },
})
