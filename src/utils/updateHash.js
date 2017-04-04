import sortBy from 'lodash.sortby';

const updateHash = ({ general, cards, sideboard = [] }) => {
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

export default updateHash;
