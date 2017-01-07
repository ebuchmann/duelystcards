/* eslint no-param-reassign: 0*/

import * as types from 'store/mutation-types';

module.exports = {
  [types.SET_PROPERTY](state, { property, value }) {
    state[property] = value;
  },
};
