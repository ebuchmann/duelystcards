const updateHash = ({ general, cards }) => {
  if (!general || !cards) return

  const hash = []
  hash.push(`1:${general.id}`)
  cards.forEach(card => {
    hash.push(`${card.qty}:${card.id}`)
  })
  window.location.hash = btoa(hash.join(','))
}

export default updateHash
