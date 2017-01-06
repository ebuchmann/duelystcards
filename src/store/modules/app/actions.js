import * as types from 'store/mutation-types';

module.exports = {
  toggleProperty: ({ commit, state }, payload) => {
    commit(types.SET_PROPERTY, { property: payload, value: !state[payload] });
  },

  setProperty: ({ commit, state }, payload) => {
    commit(types.SET_PROPERTY, payload);
  },
};
