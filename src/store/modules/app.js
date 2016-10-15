import {
  SET_PROPERTY
} from '../mutation-types'

const state = {
  drawerOpen: true,
  importDeck: false,
  saveDeck: false,
}

const mutations = {
  [SET_PROPERTY] (state, { property, value }) {
    state[property] = value
  },
}

export default {
  state,
  mutations,
}
