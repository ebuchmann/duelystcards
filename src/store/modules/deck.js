import Vue from 'vue'
import {
  SELECT_GENERAL,
  SELECT_CARD,
  REMOVE_CARD,
  INCREMENT_CARD,
  DECREMENT_CARD,
} from '../mutation-types'

const state = {
  general: null,
  cards: [],
  totalCards: 0,
  spirit: 0,
}

const spiritCosts = {
  core: 0,
  common: 40,
  rare: 100,
  epic: 350,
  legendary: 900
}

const mutations = {
  [SELECT_GENERAL] (state, general) {
    state.general = general
  },

  [SELECT_CARD] (state, card) {
    Vue.set(card, 'qty', 1)
    state.cards.push(card)
    state.totalCards++
    if (card.rarity) state.spirit += spiritCosts[card.rarity]
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
  }
}

export default {
  state,
  mutations,
}
