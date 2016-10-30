import {
  SET_PROPERTY
} from '../mutation-types'

const state = {
  // state toggles
  drawerOpen: true,
  importDeck: false,
  saveDeck: false,
  savingDeck: false,
  imgurModal: false,

  // data
  imgurLink: '',
  imgurHash: '',
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
