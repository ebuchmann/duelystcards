/* eslint no-param-reassign: 0*/

import * as types from 'store/mutation-types';

module.exports = {
  [types.SET_USER](state, user) {
    state.user = user;
  },

  [types.SET_API_KEY](state, apiKey) {
    state.user.apiKey = apiKey;
  },
};
