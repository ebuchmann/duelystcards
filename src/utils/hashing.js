import sortBy from 'lodash.sortby';

export const updateHash = ({ general, cards, sideboard = [] }) => {
  if (!general || !cards) {
    window.location.hash = '';
    return;
  }

  const hash = [];

  // Every deck requires a general, so we're safe just making it the front of the hash.
  hash.push(`1:general:${general.id}`);

  // Sideboard and mainboard will be divided by `sb` or `mb` so we have a way of splitting them back out when loading
  // the hash.
  sortBy(cards, ['cost', 'name']).forEach((card) => {
    hash.push(`${card.qty}:mainboard:${card.id}`);
  });
  sortBy(sideboard, ['cost', 'name']).forEach((card) => {
    hash.push(`${card.qty}:sideboard:${card.id}`);
  });

  window.location.hash = btoa(hash.join(','));
};

export const duelystToDuelystCardsHash = (duelystHash) => {
  let hash = duelystHash;
  hash = hash.replace(/\[(.*?)\]/, '');
  const cardArray = atob(hash)
    .split(',')
    .map((cardEntry) => {
      const tuple = cardEntry.split(':');

      tuple[2] = tuple[1];
      tuple[1] = 'mainboard';

      return tuple.join(':');
    });

  // change the general type. It's always the first one in the array.
  const generalTuple = cardArray[0].split(':');
  generalTuple[1] = 'general';
  cardArray[0] = generalTuple.join(':');

  return btoa(cardArray.join(','));
};

export const duelystCardsToDuelystHash = duelystCardsHash =>
  btoa(
    atob(duelystCardsHash)
      .split(',')
      .filter(s => !/sideboard/.test(s))
      .map((cardTupleString) => {
        const cardTuple = cardTupleString.split(':');
        cardTuple[1] = cardTuple[2];
        return cardTuple.splice(0, 2).join(':');
      })
      .join(',')
  );
