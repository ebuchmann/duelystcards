import * as types from './mutation-types'
import generals from '../cards/generals'
import cards from '../cards'
import updateHash from 'utils/updateHash'
import { api } from '../api-config'

export const selectGeneral = ({ commit, state }, general) => new Promise(resolve => {
  commit(types.SELECT_GENERAL, general)
  commit(types.SET_FACTION, general.faction)
  resolve()
})

export const selectCard = ({ commit, state }, { card, qty }) => {
  if (state.deck.totalCards >= 40) return
  if (!card) return

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
    // Splits the hash and removes anything with a blank id
    const cardList = atob(hash).split(',').map(card => {
      const split = card.split(':')
      return {
        qty: Number(split[0]),
        id: Number(split[1]),
      }
    }).filter(card => card.id)

    const generalIds = generals.map(general => general.id)
    const generalList = cardList.find(card => generalIds.includes(card.id))

    if (!generalList) throw Error('General required')

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

export const manaSelect = ({ commit, state }, mana) => {
  const manaSelect = [...state.cardList.manaSelect]
  manaSelect.includes(mana) ? manaSelect.splice(manaSelect.indexOf(mana), 1) : manaSelect.push(mana)
  commit(types.SELECT_MANA, manaSelect)
}

export const factionSelect = ({ commit, state }, faction) => {
  const factionSelect = [...state.cardList.factionSelect]
  factionSelect.includes(faction) ? factionSelect.splice(factionSelect.indexOf(faction), 1) : factionSelect.push(faction)
  commit(types.SELECT_FACTION, factionSelect)
}

export const tribeSelect = ({ commit, state }, tribe) => {
  const tribeSelect = [...state.cardList.tribeSelect]
  tribeSelect.includes(tribe) ? tribeSelect.splice(tribeSelect.indexOf(tribe), 1) : tribeSelect.push(tribe)
  commit(types.SELECT_TRIBE, tribeSelect)
}

export const resetFilters = ({ commit }) => {
  commit(types.SELECT_RARITY, [])
  commit(types.SELECT_TYPE, [])
  commit(types.SELECT_FACTION, [])
  commit(types.SELECT_MANA, [])
  commit(types.SELECT_TRIBE, [])
}

export const resetAll = ({ commit, state }) => {
  resetFilters({ commit })
  commit(types.TEXT_SEARCH, '')
  commit(types.CLEAR_DECK)
  updateHash(state)
}

export const toggleProperty = ({ commit, state }, payload) => {
  commit(types.SET_PROPERTY, { property: payload, value: !state.app[payload] })
}

export const setProperty = ({ commit, state }, payload) => {
  commit(types.SET_PROPERTY, payload)
}

// USER ACTIONS
export const login = async ({ commit }, payload) => {
  const { data } = await api.post('/login', payload)
  if (data.user) {
    commit(types.SET_USER, data.user)
  }
}

export const logout = async ({ commit }) => {
  await api.get('/logout')
  commit(types.SET_USER, null)
}

// GAUNTLET ACTIONS
export const getGauntlets = async ({ commit }, username) => {
  const { data } = await api.get(`/gauntlets/${username}`)

  if (data.length > 0)  commit(types.SET_GAUNTLETS, data)
}

export const getGauntlet = async ({ commit, dispatch, state }, id) => {
  const { data } = await api.get(`/gauntlet/${id}`)

  if (data) {
    data.matches = data.matches.sort((a, b) => b.startTime - a.startTime)
    commit(types.SET_GAUNTLET, data)

    await dispatch('selectGeneral', generals.find(general => general.id === data.generalId))
    await dispatch('setCardList', [...cards[state.deck.faction], ...cards.neutral])
    data.deck.forEach(card => {
      dispatch('selectCard', { card: state.cardList.cards.find(c => c.id === card), qty: 1 })
    })
  }
}
