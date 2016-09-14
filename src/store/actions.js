import * as types from './mutation-types'

export const selectGeneral = ({ commit }, general) => {
  commit(types.SELECT_GENERAL, general)
}

export const selectCard = ({ commit, state }, card) => {
  const cards = state.deck.cards
  const matchingCard = cards.find(c => c.name === card.name)

  if (matchingCard) {
    if (matchingCard.qty < 3) commit(types.INCREMENT_CARD, cards.indexOf(matchingCard))
  } else {
    commit(types.SELECT_CARD, card)
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

export const setCardList = ({ commit }, cards) => {
  commit(types.SET_CARDS, cards)
}

export const setPage = ({ commit }, pageNumber) => {
  commit(types.SET_PAGE, pageNumber)
}

export const clearDeck = ({ commit }) => {
  commit(types.CLEAR_DECK)
}
