import store from 'store/store';

export const loadStorage = () => {
  const divideDeck = localStorage.getItem('divideDeck');
  if (typeof divideDeck === 'string') store.dispatch('app/setProperty', { property: 'divideDeck', value: (divideDeck === 'true') });
};

export const setStorage = (property, value) => {
  localStorage.setItem(property, value);
};
