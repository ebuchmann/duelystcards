import {
  SET_CARDS,
  TEXT_SEARCH,
  SELECT_TYPE,
  SELECT_RARITY,
  SELECT_FACTION,
} from '../mutation-types'

const state = {
  cards: [],
  textSearch: '',
  typeSelect: [],
  raritySelect: [],
  factionSelect: [],
}

const mutations = {
  [SET_CARDS] (state, cards) {
    state.cards = cards
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
