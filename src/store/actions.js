import * as types from './mutation-types'
import generals from '../cards/generals'
import cards from '../cards'
import updateHash from 'utils/updateHash'
import { api } from '../api-config'





// USER ACTIONS


// GAUNTLET ACTIONS
export const getGauntlets = async ({ commit }, username) => {
  const { data } = await api.get(`/gauntlets/${username}`)

  // includes limit, page, pages, total
  if (data.docs && data.docs.length > 0) commit(types.SET_GAUNTLETS, data)
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

export const getGauntletStats = async ({ commit }, id) => {
  const { data } = await api.get(`/gauntlets/${id}/stats`)

  if (data) {
    commit(types.SET_STATS, data)
  }
}

// DECK TRACKER ACTIONS
