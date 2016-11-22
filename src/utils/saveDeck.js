import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import store from 'store/store'
import { toggleProperty, setProperty } from 'store/actions'

import axios from 'axios'
import credentials from '../../credentials.js'

function getImage (type) {
  const element = type === 'horizontal' ? document.querySelector('.horizontal-deck') : document.querySelector('.deck-list')
  const options = type === 'horizontal' ? {} : { width: element.offsetWidth + 40, bgcolor: '#0b1c27', style: { padding: '40px 20px 20px 20px' } }
  return domtoimage.toBlob(element, options)
}

async function getShortUrl () {
  const shortUrl = await axios.post('http://localhost:3000/save-deck', { hash: store.state.route.hash })
  setProperty(store, { property: 'shortUrl', value: `http://duelyst.cards/${shortUrl.data.id}` })
}

export const saveToComputer = async (type, currentFaction) => {
  try {
    toggleProperty(store, 'savingDeck')
    ga('send', 'event', 'Save deck', 'Computer', type)
    await getShortUrl()
    const image = await getImage(type)
    saveAs(image, `${currentFaction}-deck.png`)
    toggleProperty(store, 'savingDeck')
  } catch (error) {
    toggleProperty(store, 'savingDeck')
  }
}

export const saveToImgur = async (type) => {
  try {
    toggleProperty(store, 'savingDeck')
    ga('send', 'event', 'Save deck', 'Imgur', type)
    await getShortUrl()
    const image = await getImage(type)
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = async () => {
      axios.defaults.headers.common['Authorization'] = `Client-ID ${credentials.imgur.clientId}`
      const imgur = await axios.post('https://api.imgur.com/3/image', { image: reader.result.split(',')[1], type: 'base64' })
      setProperty(store, { property: 'imgurLink', value: imgur.data.data.link })
      setProperty(store, { property: 'imgurHash', value: window.location.hash })
      toggleProperty(store, 'imgurModal')
      toggleProperty(store, 'savingDeck')
    }
  } catch (error) {
    toggleProperty(store, 'savingDeck')
  }
}
