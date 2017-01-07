import sortBy from 'lodash.sortby';
import generals from 'base/cards/generals';
import allCards from 'base/cards';

const getCardText = card => `${card.name} ${card.type} ${card.cost} ${card.rarity} ${card.text} ${card.race} ${card.set} ${card.faction}`.toLowerCase();

const filter = (text, searchString) => {
  const regexStr = `(?=.*${searchString.split(/\,|\s/).join(')(?=.*')})`;
  const searchRegEx = new RegExp(regexStr, 'gi');
  return text.match(searchRegEx) !== null;
};

module.exports = {
  filteredCards: (state, getters, rootState) => {
    let cards = state.general
    ? [...generals.filter(card => card.faction === state.general.faction), ...allCards[state.general.faction], ...allCards.neutral]
    : generals;

    const { textSearch, typeSelect, raritySelect, factionSelect, manaSelect, tribeSelect } = rootState.cardList;

    if (typeSelect.length) cards = cards.filter(card => typeSelect.includes(card.type));
    if (raritySelect.length) cards = cards.filter(card => raritySelect.includes(card.rarity));
    if (factionSelect.length) cards = cards.filter(card => factionSelect.includes(card.faction));
    if (tribeSelect.length) cards = cards.filter(card => card.race && tribeSelect.includes(card.race));
    if (manaSelect.length) {
      cards = cards.filter((card) => {
        if (manaSelect.includes(9)) return card.cost >= 9 || manaSelect.includes(card.cost);
        return manaSelect.includes(card.cost);
      });
    }
    if (textSearch) cards = cards.filter(card => filter(getCardText(card), textSearch));

    return cards;
  },

  visibleCards: (state) => {
    if (!state.general) return generals;
    return [...allCards[state.general.faction], ...allCards.neutral];
  },

  general: state => state.general,

  currentFaction: state => state.general ? state.general.faction : null,

  factionCards: state => sortBy(state.cards.filter(card => card.faction !== 'neutral'), ['cost', 'name']),

  neutralCards: state => sortBy(state.cards.filter(card => card.faction === 'neutral'), ['cost', 'name']),

  sortedCards: state => sortBy(state.cards, ['cost', 'name']),

  sortedSideboard: state => sortBy(state.sideboard, ['cost', 'name']),
};
