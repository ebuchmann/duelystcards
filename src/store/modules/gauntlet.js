import {
  SET_GAUNTLETS,
  SET_GAUNTLET,
  SET_STATS,
} from '../mutation-types'

const state = {
  gauntlets: [],
  currentGauntlet: {},
  stats: {},
}

const mutations = {
  [SET_GAUNTLETS] (state, gauntlets) {
    state.gauntlets = gauntlets
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
