import * as types from './mutation-types'
import generals from '../cards/generals'
import cards from '../cards'
import { totalPages } from './getters'

export const selectGeneral = ({ commit, state }, general) => new Promise(resolve => {
  commit(types.SELECT_GENERAL, general)
  commit(types.SET_FACTION, general.faction)
  resolve()
})

export const selectCard = ({ commit, state }, { card, qty }) => {
  const cards = state.deck.cards
  const matchingCard = cards.find(c => c.name === card.name)

  if (matchingCard) {
    if (matchingCard.qty < 3 && qty === 1) commit(types.INCREMENT_CARD, cards.indexOf(matchingCard))
  } else {
    commit(types.SELECT_CARD, { card, qty })
  }
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
}

export const clearDeck = ({ commit, state, dispatch }) => new Promise(resolve => {
  commit(types.CLEAR_DECK)
  resolve()
})

export const setCardList = ({ commit }, cards) => new Promise(resolve =>{
  commit(types.SET_CARDS, cards)
  resolve()
})

export const loadDeck = async ({ commit, dispatch, state }, hash) => {
  const cardList = atob(hash.slice(1)).split(',')
  const generalList = cardList.splice(0, 1)[0]

  const [, id] = generalList.split(':')
  const general = generals.find(general => general.id === Number(id))

  if (!general) throw Error('General required')

  await dispatch('selectGeneral', general)
  await dispatch('setCardList', [...cards[state.deck.faction], ...cards.neutral])
  cardList.forEach(card => {
    const [qty, id] = card.split(':')
    dispatch('selectCard', { card: state.cardList.cards.find(c => c.id === Number(id)), qty: Number(qty) })
  })

  return general.faction
}

export const textSearch = ({ commit }, text) => {
  commit(types.TEXT_SEARCH, text)
  commit(types.SET_PAGE, 1)
}

export const typeSelect = ({ commit, state }, type) => {
  const typeSelect = [...state.cardList.typeSelect]
  typeSelect.includes(type) ? typeSelect.splice(typeSelect.indexOf(type), 1) : typeSelect.push(type)
  commit(types.SELECT_TYPE, typeSelect)
  commit(types.SET_PAGE, 1)
}

export const raritySelect = ({ commit, state }, rarity) => {
  const raritySelect = [...state.cardList.raritySelect]
  raritySelect.includes(rarity) ? raritySelect.splice(raritySelect.indexOf(rarity), 1) : raritySelect.push(rarity)
  commit(types.SELECT_RARITY, raritySelect)
  commit(types.SET_PAGE, 1)
}

export const goToPage = ({ commit, state }, direction) => {
  const currentPage = state.cardList.currentPage
  if (direction === -1 && currentPage > 1) commit(types.SET_PAGE, currentPage + direction)
  else if (direction === 1 && currentPage < totalPages(state)) commit(types.SET_PAGE, currentPage + direction)
}
