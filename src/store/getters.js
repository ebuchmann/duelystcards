import generals from '../cards/generals'
import allCards from '../cards'

export const filteredCards = ({ route, deck, cardList }) => {
  let cards = deck.general
  ? [...generals.filter(card => card.faction === deck.general.faction), ...allCards[deck.general.faction], ...allCards.neutral]
  : generals

  const { textSearch, typeSelect, raritySelect, factionSelect, manaSelect } = cardList

  if (textSearch) cards = cards.filter(card => card.name.toLowerCase().includes(textSearch.toLowerCase()))
  if (typeSelect.length) cards = cards.filter(card => typeSelect.includes(card.type))
  if (raritySelect.length) cards = cards.filter(card => raritySelect.includes(card.rarity))
  if (factionSelect.length) cards = cards.filter(card => factionSelect.includes(card.faction))
  if (manaSelect.length) {
    cards = cards.filter(card => {
      if (manaSelect.includes(9)) return card.cost >= 9 || manaSelect.includes(card.cost)
      return manaSelect.includes(card.cost)
    })
  }
  // if (!deck.general) cards = cards.filter(card => card.type === 'general')

  return cards
}

export const visibleCards = (state) => {
  if (!state.deck.general) return generals
  return [...allCards[state.deck.general.faction], ...allCards.neutral]
}

export const general = ({ deck }) => deck.general

export const searchText = ({ cardList }) => cardList.textSearch

export const hasActiveFilters = ({ cardList }) => cardList.typeSelect.length || cardList.raritySelect.length || cardList.factionSelect.length || cardList.manaSelect.length

export const currentFaction = ({ deck }) => deck.general ? deck.general.faction : null
