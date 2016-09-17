import Vue from 'vue'
import {
  SELECT_GENERAL,
  SELECT_CARD,
  REMOVE_CARD,
  INCREMENT_CARD,
  DECREMENT_CARD,
  CLEAR_DECK,
} from '../mutation-types'

const state = {
  general: null,
  cards: [],
  totalCards: 0,
  spirit: 0,
}

const spiritCosts = {
  basic: 0,
  common: 40,
  rare: 100,
  epic: 350,
  legendary: 900
}

const mutations = {
  [SELECT_GENERAL] (state, general) {
    state.general = general
  },

  [SELECT_CARD] (state, { card, qty }) {
    Vue.set(card, 'qty', qty)
    state.cards.push(card)
    state.totalCards += qty
    if (card.rarity) state.spirit += (spiritCosts[card.rarity] * qty)
  },

  [REMOVE_CARD] (state, index) {
    if (state.cards[index].rarity) state.spirit -= spiritCosts[state.cards[index].rarity]
    state.cards.splice(index, 1)
    state.totalCards--
  },

  [INCREMENT_CARD] (state, index) {
    state.cards[index].qty++
    state.totalCards++
    if (state.cards[index].rarity) state.spirit += spiritCosts[state.cards[index].rarity]
  },

  [DECREMENT_CARD] (state, index) {
    state.cards[index].qty--
    state.totalCards--
    if (state.cards[index].rarity) state.spirit -= spiritCosts[state.cards[index].rarity]
  },

  [CLEAR_DECK] (state) {
    state.general = null
    state.cards = []
    state.totalCards = 0
    state.spirit = 0
  }
}

export default {
  state,
  mutations,
}
