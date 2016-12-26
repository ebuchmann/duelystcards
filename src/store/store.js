import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import cardList from './modules/cardList'
import deck from './modules/deck'
import deckTracker from './modules/deckTracker'
import gauntlet from './modules/gauntlet'
import user from './modules/user'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    app,
    cardList,
    deck,
    deckTracker,
    gauntlet,
    user,
  },
})
