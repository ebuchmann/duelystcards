import {
  SET_DECKS,
  SET_CURRENT_DECK,
  SET_CURRENT_DECK_STATS,
  REMOVE_DECK,
} from '../mutation-types'

const state = {
  decks: [],
  currentDeck: {},
  stats: {},
  lastUsername: '',
}

const mutations = {
  [SET_DECKS] (state, payload) {
    state.decks = payload.decks
    state.lastUsername = payload.username
  },

  [SET_CURRENT_DECK] (state, deck) {
    state.currentDeck = deck
  },

  [SET_CURRENT_DECK_STATS] (state, stats) {
    state.stats = stats
  },

  [REMOVE_DECK] (state, id) {
    state.decks = state.decks.filter(deck => deck._id !== id)
  },
}

export default {
  state,
  mutations,
}
