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
  divideDeck: true,
  settingsModal: false,
  loginModal: false,

  // data
  imgurLink: '',
  imgurHash: '',
  shortUrl: '',
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
