import * as types from 'store/mutation-types';
import generals from 'base/cards/generals';
import cards from 'base/cards';
import { api } from 'base/api-config';

module.exports = {
  getDecks: async ({ commit }, username) => {
    const { data } = await api.get(`/decks/${username}`);

    if (data) commit(types.SET_DECKS, { decks: data, username });
  },

  getDeck: async ({ commit, dispatch, rootState }, id) => {
    const { data } = await api.get(`/deck/${id}`);
    const stats = await api.get(`/deck/${id}/stats`);

    commit(types.SET_CURRENT_DECK_STATS, stats.data);

    if (data) {
      commit(types.SET_CURRENT_DECK, data);

      await dispatch('deck/selectGeneral', generals.find(general => general.id === data.generalId), { root: true });
      await dispatch('cardList/setCardList', [...cards[rootState.deck.faction], ...cards.neutral], { root: true });
      data.cards.forEach((card) => {
        dispatch('deck/selectCard', { card: rootState.cardList.cards.find(c => c.id === card), qty: 1 }, { root: true });
      });
    }
  },

  removeDeck: async ({ commit }, id) => {
    try {
      await api.delete(`/deck/${id}`);
      commit(types.REMOVE_DECK, id);
    } catch (error) {
      throw new Error('Cant remove');
    }
  },

  updateDeck: async ({ commit }, payload) => {
    try {
      const { data } = await api.patch(`/deck/${payload.id}`, payload.update);
      commit(types.SET_CURRENT_DECK, data);
    } catch (error) {
      throw new Error('Problem updating');
    }
  },
};
