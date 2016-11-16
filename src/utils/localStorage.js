import store from 'store/store'
import { setProperty } from 'store/actions'

export const loadStorage = () => {
  const divideDeck = localStorage.getItem('divideDeck')
  if (typeof divideDeck === 'string') setProperty(store, { property: 'divideDeck', value: (divideDeck === 'true') })
}

export const setStorage = (property, value) => {
  localStorage.setItem(property, value)
}
