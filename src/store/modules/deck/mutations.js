/* eslint no-param-reassign: 0*/

import Vue from 'vue';
import * as types from 'store/mutation-types';

const spiritCosts = {
  basic: 0,
  common: 40,
  rare: 100,
  epic: 350,
  legendary: 900,
};

module.exports = {
  [types.SELECT_GENERAL](state, general) {
    if (state.general === null) state.totalCards++;
    state.general = general;
  },

  [types.SELECT_CARD](state, { card, qty }) {
    Vue.set(card, 'qty', qty);
    state.cards.push(card);
    state.totalCards += qty;
    if (card.rarity && card.spirit !== 0) state.spirit += (spiritCosts[card.rarity] * qty);
  },

  [types.SET_FACTION](state, faction) {
    state.faction = faction;
  },

  [types.REMOVE_CARD](state, index) {
    if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit -= spiritCosts[state.cards[index].rarity];
    state.cards.splice(index, 1);
    state.totalCards--;
  },

  [types.INCREMENT_CARD](state, index) {
    state.cards[index].qty++;
    state.totalCards++;
    if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit += spiritCosts[state.cards[index].rarity];
  },

  [types.DECREMENT_CARD](state, index) {
    state.cards[index].qty--;
    state.totalCards--;
    if (state.cards[index].rarity && state.cards[index].spirit !== 0) state.spirit -= spiritCosts[state.cards[index].rarity];
  },

  [types.CLEAR_DECK](state) {
    state.general = null;
    state.cards = [];
    state.sideboard = [];
    state.totalCards = 0;
    state.spirit = 0;
    state.deckName = '';
  },

  [types.SELECT_CARD_SIDEBOARD](state, { card, qty }) {
    Vue.set(card, 'qty', qty);
    state.sideboard.push(card);
  },

  [types.INCREMENT_CARD_SIDEBOARD](state, index) {
    state.sideboard[index].qty++;
  },

  [types.REMOVE_CARD_SIDEBOARD](state, index) {
    state.sideboard.splice(index, 1);
  },

  [types.DECREMENT_CARD_SIDEBOARD](state, index) {
    state.sideboard[index].qty--;
  },

  [types.UPDATE_DECK_NAME](state, name) {
    state.deckName = name;
  },
};
