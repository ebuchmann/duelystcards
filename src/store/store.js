import Vue from 'vue'
import Vuex from 'vuex'
import cardList from './modules/cardList'
import deck from './modules/deck'
import app from './modules/app'
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
  },
})
