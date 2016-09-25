import {
  SET_CARDS,
  SET_PAGE,
  SET_PER_PAGE,
  TEXT_SEARCH,
  SELECT_TYPE,
  SELECT_RARITY,
  SELECT_FACTION,
} from '../mutation-types'

const state = {
  cards: [],
  currentPage: 1,
  cardsPerPage: 8,
  textSearch: '',
  typeSelect: [],
  raritySelect: [],
  factionSelect: [],
}

const mutations = {
  [SET_CARDS] (state, cards) {
    state.cards = cards
  },

  [SET_PAGE] (state, pageNumber) {
    state.currentPage = pageNumber
  },

  [SET_PER_PAGE] (state, perPage) {
    state.cardsPerPage = perPage
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

  [SELECT_FACTION] (state, factionSelect) {
    state.factionSelect = factionSelect
  },
}

export default {
  state,
  mutations,
}
