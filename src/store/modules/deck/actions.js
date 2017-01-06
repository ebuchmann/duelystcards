import generals from 'base/cards/generals';
import cards from 'base/cards';
import * as types from 'store/mutation-types';

module.exports = {
  selectGeneral: ({ commit, state }, general) => new Promise((resolve) => {
    commit(types.SELECT_GENERAL, general);
    commit(types.SET_FACTION, general.faction);
    resolve();
  }),

  selectCard: ({ commit, dispatch, state, rootState }, { card, qty }) => {
    if (rootState.app.deckSideboard) {
      dispatch('selectCardSideboard', { card, qty });
      return;
    }
    if (state.totalCards >= 40) return;
    if (!card) return;

    const cards = state.cards;
    const matchingCard = cards.find(c => c.name === card.name);

    if (matchingCard) {
      if (matchingCard.qty < 3 && qty === 1) commit(types.INCREMENT_CARD, cards.indexOf(matchingCard));
    } else {
      commit(types.SELECT_CARD, { card, qty });
    }
  },

  removeCard: ({ commit, state, dispatch, rootState }, card) => {
    if (rootState.app.deckSideboard) {
      dispatch('removeCardSideboard', card);
      return;
    }
    const cards = state.cards;
    const matchingCard = cards.find(c => c.name === card.name);

    if (matchingCard) {
      if (matchingCard.qty === 1) {
        commit(types.REMOVE_CARD, cards.indexOf(matchingCard));
      } else {
        commit(types.DECREMENT_CARD, cards.indexOf(matchingCard));
      }
    }
  },

  selectCardSideboard: ({ commit, state }, { card, qty }) => {
    const sideboard = state.sideboard;
    const matchingCard = sideboard.find(c => c.name === card.name);

    if (matchingCard) {
      if (matchingCard.qty < 3 && qty === 1) commit(types.INCREMENT_CARD_SIDEBOARD, sideboard.indexOf(matchingCard));
    } else {
      commit(types.SELECT_CARD_SIDEBOARD, { card: Object.assign({}, card), qty });
    }
  },

  removeCardSideboard: ({ commit, state }, card) => {
    const sideboard = state.sideboard;
    const matchingCard = sideboard.find(c => c.name === card.name);

    if (matchingCard) {
      if (matchingCard.qty === 1) {
        commit(types.REMOVE_CARD_SIDEBOARD, sideboard.indexOf(matchingCard));
      } else {
        commit(types.DECREMENT_CARD_SIDEBOARD, sideboard.indexOf(matchingCard));
      }
    }
  },

  clearDeck: ({ commit, state, dispatch }) => new Promise((resolve) => {
    commit(types.CLEAR_DECK);
    resolve();
  }),

  loadDeck: async ({ commit, dispatch, state, rootState }, hash) => {
    try {
      // Splits the hash and removes anything with a blank id
      const cardList = atob(hash).split(',').map((card) => {
        const split = card.split(':');
        return {
          qty: Number(split[0]),
          id: Number(split[1]),
        };
      }).filter(card => card.id);

      const generalIds = generals.map(general => general.id);
      const generalList = cardList.find(card => generalIds.includes(card.id));

      if (!generalList) throw Error('General required');

      const general = generals.find(general => general.id === generalList.id);

      if (!general) throw Error('General required');

      // Remove the general from the list
      cardList.splice(cardList.indexOf(generalList), 1);

      await dispatch('selectGeneral', general);
      await dispatch('cardList/setCardList', [...cards[state.faction], ...cards.neutral], { root: true });
      cardList.forEach((card) => {
        dispatch('selectCard', { card: rootState.cardList.cards.find(c => c.id === card.id), qty: card.qty });
      });

      return general.faction;
    } catch (error) {
      throw error;
    }
  },
};
