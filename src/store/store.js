import Vue from 'vue'
import Vuex from 'vuex'
import cardList from './modules/cardList'
import deck from './modules/deck'
import * as actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    cardList,
    deck,
  },
})
