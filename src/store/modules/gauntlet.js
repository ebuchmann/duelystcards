import {
  SET_GAUNTLETS,
  SET_GAUNTLET,
  SET_STATS,
} from '../mutation-types'

const state = {
  gauntlets: [],
  currentGauntlet: {},
  stats: {},
  paginate: {
    limit: 0,
    page: 0,
    pages: 0,
    total: 0,
  },
}

const mutations = {
  [SET_GAUNTLETS] (state, gauntlets) {
    state.gauntlets = gauntlets.docs
    state.paginate.limit = gauntlets.limit
    state.paginate.page = gauntlets.page
    state.paginate.pages = gauntlets.pages
    state.paginate.total = gauntlets.total
  },

  [SET_GAUNTLET] (state, gauntlet) {
    state.currentGauntlet = gauntlet
  },

  [SET_STATS] (state, stats) {
    state.stats = stats
  },
}

export default {
  state,
  mutations,
}
