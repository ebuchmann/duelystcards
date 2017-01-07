/* eslint no-param-reassign: 0*/

import * as types from 'store/mutation-types';

module.exports = {
  [types.SET_GAUNTLETS](state, gauntlets) {
    state.gauntlets = gauntlets.docs;
    state.paginate.limit = gauntlets.limit;
    state.paginate.page = gauntlets.page;
    state.paginate.pages = gauntlets.pages;
    state.paginate.total = gauntlets.total;
  },

  [types.SET_GAUNTLET](state, gauntlet) {
    state.currentGauntlet = gauntlet;
  },

  [types.SET_STATS](state, stats) {
    state.stats = stats;
  },
};
