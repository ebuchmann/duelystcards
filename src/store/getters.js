import generals from '../cards/generals'
import allCards from '../cards'

const getCardText = card => {
  return `${card.name} ${card.type} ${card.cost} ${card.rarity} ${card.text} ${card.race} ${card.set} ${card.faction}`.toLowerCase()
}

const filter = (text, searchString) => {
  const regexStr = '(?=.*' + searchString.split(/\,|\s/).join(')(?=.*') + ')'
  const searchRegEx = new RegExp(regexStr, 'gi')
  return text.match(searchRegEx) !== null
}

export const filteredCards = ({ route, deck, cardList }) => {
  let cards = deck.general
  ? [...generals.filter(card => card.faction === deck.general.faction), ...allCards[deck.general.faction], ...allCards.neutral]
  : generals

  const { textSearch, typeSelect, raritySelect, factionSelect, manaSelect, tribeSelect } = cardList

  if (typeSelect.length) cards = cards.filter(card => typeSelect.includes(card.type))
  if (raritySelect.length) cards = cards.filter(card => raritySelect.includes(card.rarity))
  if (factionSelect.length) cards = cards.filter(card => factionSelect.includes(card.faction))
  if (tribeSelect.length) cards = cards.filter(card => card.race && tribeSelect.includes(card.race))
  if (manaSelect.length) {
    cards = cards.filter(card => {
      if (manaSelect.includes(9)) return card.cost >= 9 || manaSelect.includes(card.cost)
      return manaSelect.includes(card.cost)
    })
  }
  if (textSearch) cards = cards.filter(card => filter(getCardText(card), textSearch))
  // if (!deck.general) cards = cards.filter(card => card.type === 'general')

  return cards
}

export const visibleCards = (state) => {
  if (!state.deck.general) return generals
  return [...allCards[state.deck.general.faction], ...allCards.neutral]
}

export const general = ({ deck }) => deck.general

export const searchText = ({ cardList }) => cardList.textSearch

export const hasActiveFilters = ({ cardList }) => cardList.typeSelect.length || cardList.raritySelect.length || cardList.factionSelect.length || cardList.manaSelect.length || cardList.tribeSelect.length

export const currentFaction = ({ deck }) => deck.general ? deck.general.faction : null

export const canEditDeck = ({ user, deckTracker}) => {
  if (user.user && deckTracker.currentDeck) return (user.user._id === deckTracker.currentDeck.user_id)
}
