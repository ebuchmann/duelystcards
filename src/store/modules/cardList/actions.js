import * as types from 'store/mutation-types';
import updateHash from 'utils/updateHash';

module.exports = {
  setCardList: ({ commit }, cards) => new Promise((resolve) => {
    commit(types.SET_CARDS, cards);
    resolve();
  }),

  textSearch: ({ commit }, text) => {
    commit(types.TEXT_SEARCH, text);
  },

  typeSelect: ({ commit, state }, type) => {
    const typeSelect = [...state.typeSelect];
    typeSelect.includes(type) ? typeSelect.splice(typeSelect.indexOf(type), 1) : typeSelect.push(type);
    commit(types.SELECT_TYPE, typeSelect);
  },

  raritySelect: ({ commit, state }, rarity) => {
    const raritySelect = [...state.raritySelect];
    raritySelect.includes(rarity) ? raritySelect.splice(raritySelect.indexOf(rarity), 1) : raritySelect.push(rarity);
    commit(types.SELECT_RARITY, raritySelect);
  },

  manaSelect: ({ commit, state }, mana) => {
    const manaSelect = [...state.manaSelect];
    manaSelect.includes(mana) ? manaSelect.splice(manaSelect.indexOf(mana), 1) : manaSelect.push(mana);
    commit(types.SELECT_MANA, manaSelect);
  },

  factionSelect: ({ commit, state }, faction) => {
    const factionSelect = [...state.factionSelect];
    factionSelect.includes(faction) ? factionSelect.splice(factionSelect.indexOf(faction), 1) : factionSelect.push(faction);
    commit(types.SELECT_FACTION, factionSelect);
  },

  tribeSelect: ({ commit, state }, tribe) => {
    const tribeSelect = [...state.tribeSelect];
    tribeSelect.includes(tribe) ? tribeSelect.splice(tribeSelect.indexOf(tribe), 1) : tribeSelect.push(tribe);
    commit(types.SELECT_TRIBE, tribeSelect);
  },

  resetFilters: ({ commit }) => {
    commit(types.SELECT_RARITY, []);
    commit(types.SELECT_TYPE, []);
    commit(types.SELECT_FACTION, []);
    commit(types.SELECT_MANA, []);
    commit(types.SELECT_TRIBE, []);
  },

  resetAll: ({ commit, state, dispatch }) => {
    dispatch('resetFilters');
    commit(types.TEXT_SEARCH, '');
    commit(`deck/${types.CLEAR_DECK}`, null, { root: true });
    updateHash(state);
  },
};
