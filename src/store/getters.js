import generals from '../cards/generals'
import allCards from '../cards'






export const canEditDeck = ({ user, deckTracker}) => {
  if (user.user && deckTracker.currentDeck) return (user.user._id === deckTracker.currentDeck.user_id)
}
