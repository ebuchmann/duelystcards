import store from 'store/store';

export const loadStorage = () => {
  if (window.localStorage === undefined) return;
  const divideDeck = localStorage.getItem('divideDeck');
  if (typeof divideDeck === 'string') store.dispatch('app/setProperty', { property: 'divideDeck', value: (divideDeck === 'true') });
};

export const setStorage = (property, value) => {
  if (window.localStorage === undefined) return;
  localStorage.setItem(property, value);
};
