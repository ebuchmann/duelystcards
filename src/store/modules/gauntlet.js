import {
  SET_GAUNTLETS,
  SET_GAUNTLET,
} from '../mutation-types'

const state = {
  gauntlets: [],
  currentGauntlet: {},
}

const mutations = {
  [SET_GAUNTLETS] (state, gauntlets) {
    state.gauntlets = gauntlets
  },

  [SET_GAUNTLET] (state, gauntlet) {
    state.currentGauntlet = gauntlet
  }
}

export default {
  state,
  mutations,
}
