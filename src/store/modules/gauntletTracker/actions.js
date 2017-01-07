import * as types from 'store/mutation-types';
import { api } from 'base/api-config';
import generals from 'base/cards/generals';
import cards from 'base/cards';

module.exports = {
  getGauntlets: async ({ commit }, username) => {
    const { data } = await api.get(`/gauntlets/${username}`);

    // includes limit, page, pages, total
    if (data.docs && data.docs.length > 0) commit(types.SET_GAUNTLETS, data);
  },

  getGauntlet: async ({ commit, dispatch, state, rootState }, id) => {
    const { data } = await api.get(`/gauntlet/${id}`);

    if (data) {
      data.matches = data.matches.sort((a, b) => b.startTime - a.startTime);
      commit(types.SET_GAUNTLET, data);

      await dispatch('selectGeneral', generals.find(general => general.id === data.generalId));
      await dispatch('setCardList', [...cards[rootState.deck.faction], ...cards.neutral]);
      data.deck.forEach((card) => {
        dispatch('selectCard', { card: rootState.cardList.cards.find(c => c.id === card), qty: 1 });
      });
    }
  },

  getGauntletStats: async ({ commit }, id) => {
    const { data } = await api.get(`/gauntlets/${id}/stats`);

    if (data) {
      commit(types.SET_STATS, data);
    }
  },
};
