import * as types from 'store/mutation-types';

module.exports = {
  [types.SET_CARDS] (state, cards) {
    state.cards = cards
  },

  [types.TEXT_SEARCH] (state, text) {
    state.textSearch = text
  },

  [types.SELECT_TYPE] (state, typeSelect) {
    state.typeSelect = typeSelect
  },

  [types.SELECT_RARITY] (state, raritySelect) {
    state.raritySelect = raritySelect
  },

  [types.SELECT_MANA] (state, manaSelect) {
    state.manaSelect = manaSelect
  },

  [types.SELECT_FACTION] (state, factionSelect) {
    state.factionSelect = factionSelect
  },

  [types.SELECT_TRIBE] (state, tribeSelect) {
    state.tribeSelect = tribeSelect
  },
};
