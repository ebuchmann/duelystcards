import * as types from 'store/mutation-types';

module.exports = {
  [types.SET_DECKS] (state, payload) {
    state.decks = payload.decks
    state.lastUsername = payload.username
  },

  [types.SET_CURRENT_DECK] (state, deck) {
    state.currentDeck = deck
  },

  [types.SET_CURRENT_DECK_STATS] (state, stats) {
    state.stats = stats
  },

  [types.REMOVE_DECK] (state, id) {
    state.decks = state.decks.filter(deck => deck._id !== id)
  },
};
