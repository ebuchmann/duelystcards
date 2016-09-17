import {
  SET_CARDS,
  SET_PAGE,
  TEXT_SEARCH,
  SELECT_TYPE,
  SELECT_RARITY,
} from '../mutation-types'

const state = {
  cards: [],
  currentPage: 1,
  textSearch: '',
  typeSelect: [],
  raritySelect: [],
}

const mutations = {
  [SET_CARDS] (state, cards) {
    state.cards = cards
  },

  [SET_PAGE] (state, pageNumber) {
    state.currentPage = pageNumber
  },

  [TEXT_SEARCH] (state, text) {
    state.textSearch = text
  },

  [SELECT_TYPE] (state, typeSelect) {
    state.typeSelect = typeSelect
  },

  [SELECT_RARITY] (state, raritySelect) {
    state.raritySelect = raritySelect
  },
}

export default {
  state,
  mutations,
}
