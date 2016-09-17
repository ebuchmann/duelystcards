import * as types from './mutation-types'
import { totalPages } from './getters'

export const selectGeneral = ({ commit, state }, general) => new Promise(resolve => {
  commit(types.SELECT_GENERAL, general)
  resolve()

  updateHash(state.deck)
})

export const selectCard = ({ commit, state }, { card, qty }) => {
  const cards = state.deck.cards
  const matchingCard = cards.find(c => c.name === card.name)

  if (matchingCard) {
    if (matchingCard.qty < 3 && qty === 1) commit(types.INCREMENT_CARD, cards.indexOf(matchingCard))
  } else {
    commit(types.SELECT_CARD, { card, qty })
  }

  updateHash(state.deck)
}

export const removeCard = ({ commit, state }, card) => {
  const cards = state.deck.cards
  const matchingCard = cards.find(c => c.name === card.name)

  if (matchingCard) {
    if (matchingCard.qty === 1) {
      commit(types.REMOVE_CARD, cards.indexOf(matchingCard))
    } else {
      commit(types.DECREMENT_CARD, cards.indexOf(matchingCard))
    }
  }

  updateHash(state.deck)
}

export const setCardList = ({ commit }, cards) => {
  commit(types.SET_CARDS, cards)
}

export const clearDeck = ({ commit, state }) => {
  commit(types.CLEAR_DECK)
  updateHash(state.deck)
}

export const textSearch = ({ commit }, text) => {
  commit(types.TEXT_SEARCH, text)
}

export const typeSelect = ({ commit, state }, type) => {
  const typeSelect = [...state.cardList.typeSelect]
  typeSelect.includes(type) ? typeSelect.splice(typeSelect.indexOf(type), 1) : typeSelect.push(type)
  commit(types.SELECT_TYPE, typeSelect)
}

export const raritySelect = ({ commit, state }, rarity) => {
  const raritySelect = [...state.cardList.raritySelect]
  raritySelect.includes(rarity) ? raritySelect.splice(raritySelect.indexOf(rarity), 1) : raritySelect.push(rarity)
  commit(types.SELECT_RARITY, raritySelect)
}

const updateHash = ({ general, cards }) => {
  if (!general || !cards) return

  const hash = []
  hash.push(`1:${general.id}`)
  cards.forEach(card => {
    hash.push(`${card.qty}:${card.id}`)
  })
  window.location.hash = btoa(hash.join(','))
}

export const goToPage = ({ commit, state }, direction) => {
  const currentPage = state.cardList.currentPage
  if (direction === -1 && currentPage > 1) commit(types.SET_PAGE, currentPage + direction)
  else if (direction === 1 && currentPage < totalPages(state)) commit(types.SET_PAGE, currentPage + direction)
}
