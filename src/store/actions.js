import * as types from './mutation-types'
import generals from '../cards/generals'
import cards from '../cards'

export const selectGeneral = ({ commit, state }, general) => new Promise(resolve => {
  commit(types.SELECT_GENERAL, general)
  commit(types.SET_FACTION, general.faction)
  resolve()
})

export const selectCard = ({ commit, state }, { card, qty }) => {
  if (state.deck.totalCards >= 40) return

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
  try {
    const cardList = atob(hash).split(',').map(card => {
      const split = card.split(':')
      return {
        qty: Number(split[0]),
        id: Number(split[1]),
      }
    })

    const generalIds = generals.map(general => general.id)
    const generalList = cardList.find(card => generalIds.includes(card.id))

    const general = generals.find(general => general.id === generalList.id)

    if (!general) throw Error('General required')

    // Remove the general from the list
    cardList.splice(cardList.indexOf(generalList), 1)

    await dispatch('selectGeneral', general)
    await dispatch('setCardList', [...cards[state.deck.faction], ...cards.neutral])
    cardList.forEach(card => {
      dispatch('selectCard', { card: state.cardList.cards.find(c => c.id === card.id), qty: card.qty })
    })

    return general.faction
  } catch (error) {
    throw error
  }
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

export const factionSelect = ({ commit, state }, faction) => {
  const factionSelect = [...state.cardList.factionSelect]
  factionSelect.includes(faction) ? factionSelect.splice(factionSelect.indexOf(faction), 1) : factionSelect.push(faction)
  commit(types.SELECT_FACTION, factionSelect)
}

export const resetAll = ({ commit, state }) => {
  commit(types.TEXT_SEARCH, '')
  commit(types.SELECT_RARITY, [])
  commit(types.SELECT_TYPE, [])
  commit(types.SELECT_FACTION, [])
  commit(types.CLEAR_DECK)
}
