import sortBy from 'lodash.sortby';

const updateHash = ({ general, cards }) => {
  if (!general || !cards) {
    window.location.hash = '';
    return;
  }

  const hash = [];
  hash.push(`1:${general.id}`);
  sortBy(cards, ['cost', 'name']).forEach((card) => {
    hash.push(`${card.qty}:${card.id}`);
  });
  window.location.hash = btoa(hash.join(','));
};

export default updateHash;
