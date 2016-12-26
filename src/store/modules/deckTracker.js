import {
  SET_DECKS,
  SET_CURRENT_DECK,
  SET_CURRENT_DECK_STATS,
} from '../mutation-types'

const state = {
  decks: [],
  currentDeck: {},
  stats: {},
}

const mutations = {
  [SET_DECKS] (state, decks) {
    state.decks = decks
  },

  [SET_CURRENT_DECK] (state, deck) {
    state.currentDeck = deck
  },

  [SET_CURRENT_DECK_STATS] (state, stats) {
    state.stats = stats
  },
}

export default {
  state,
  mutations,
}
