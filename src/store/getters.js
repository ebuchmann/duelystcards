import generals from '../cards/generals'
import allCards from '../cards'

export const filteredCards = ({ route, cardList }) => {
  const faction = route.params.faction

  let cards = [...generals.filter(card => card.faction === faction), ...allCards[faction], ...allCards.neutral]
  const { textSearch, typeSelect, raritySelect } = cardList

  if (textSearch) cards = cards.filter(card => card.name.toLowerCase().includes(textSearch.toLowerCase()))
  if (typeSelect.length) cards = cards.filter(card => typeSelect.includes(card.type))
  if (raritySelect.length) cards = cards.filter(card => raritySelect.includes(card.rarity))

  return cards
}

export const visibleCards = (state) => {
  const { currentPage, cardsPerPage } = state.cardList
  return filteredCards(state).slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
}

export const general = ({ deck }) => deck.general

export const totalPages = (state) => Math.ceil(filteredCards(state).length / state.cardList.cardsPerPage)

export const currentPage = ({ cardList }) => cardList.currentPage

export const searchText = ({ cardList }) => cardList.textSearch
