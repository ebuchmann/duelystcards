import {
  SET_CARDS,
  SET_PAGE,
} from '../mutation-types'

const state = {
  cards: [],
  currentPage: 1,
}

const mutations = {
  [SET_CARDS] (state, cards) {
    state.cards = cards
  },

  [SET_PAGE] (state, pageNumber) {
    state.currentPage = pageNumber
  },
}

export default {
  state,
  mutations,
}
