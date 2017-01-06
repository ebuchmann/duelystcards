/* eslint no-param-reassign: 0*/

import * as types from 'store/mutation-types';

module.exports = {
  [types.SET_CARDS](state, cards) {
    state.cards = cards;
  },

  [types.TEXT_SEARCH](state, text) {
    state.textSearch = text;
  },

  [types.SET_FILTERS](state, payload) {
    const { type, value } = payload;
    state[type] = value;
  },
};
