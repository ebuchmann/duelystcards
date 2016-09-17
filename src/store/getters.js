import generals from '../cards/generals'
import allCards from '../cards'

export const filteredCards = ({ route, cardList }) => {
  const faction = route.params.faction

  let cards = [...generals.filter(card => card.faction === faction), ...allCards[faction], ...allCards.neutral]
  const { textSearch, typeSelect, raritySelect, currentPage } = cardList

  if (textSearch) cards = cards.filter(card => card.name.toLowerCase().includes(textSearch.toLowerCase()))
  if (typeSelect.length) cards = cards.filter(card => typeSelect.includes(card.type))
  if (raritySelect.length) cards = cards.filter(card => raritySelect.includes(card.rarity))

  return cards.slice((currentPage - 1) * 8, currentPage * 8)
}

export const general = ({ deck }) => deck.general
