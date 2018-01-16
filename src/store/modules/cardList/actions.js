import * as types from 'store/mutation-types';
import updateHash from 'utils/updateHash';

module.exports = {
  setCardList: ({ commit }, cards) =>
    new Promise((resolve) => {
      commit(types.SET_CARDS, cards);
      resolve();
    }),

  textSearch: ({ commit }, text) => {
    commit(types.TEXT_SEARCH, text);
  },

  toggleFilter: ({ commit, state }, { type, value }) => {
    const select = [...state[type]];

    if (select.includes(value)) select.splice(select.indexOf(value), 1);
    else select.push(value);
    commit(types.SET_FILTERS, { type, value: select });
  },

  resetFilters: ({ commit }) => {
    commit(types.SET_FILTERS, { type: 'raritySelect', value: [] });
    commit(types.SET_FILTERS, { type: 'typeSelect', value: [] });
    commit(types.SET_FILTERS, { type: 'factionSelect', value: [] });
    commit(types.SET_FILTERS, { type: 'manaSelect', value: [] });
    commit(types.SET_FILTERS, { type: 'tribeSelect', value: [] });
  },

  resetAll: ({ commit, state, dispatch }) => {
    dispatch('resetFilters');
    commit(types.TEXT_SEARCH, '');
    commit(`deck/${types.CLEAR_DECK}`, null, { root: true });
    updateHash(state);
  }
};
