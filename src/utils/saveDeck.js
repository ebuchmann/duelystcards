import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'
import store from 'store/store'
import { toggleProperty, setProperty } from 'store/actions'
import credentials from '../../credentials'
import { api, imgur } from '../api-config'

function getImage (type) {
  const element = type === 'horizontal' ? document.querySelector('.horizontal-deck') : document.querySelector('.deck-list')
  const options = type === 'horizontal' ? {} : { width: element.offsetWidth + 40, bgcolor: '#0b1c27', style: { padding: '40px 20px 20px 20px' } }
  return domtoimage.toBlob(element, options)
}

async function getShortUrl () {
  const shortUrl = await api.post('/save-deck', { hash: store.state.route.hash })
  setProperty(store, { property: 'shortUrl', value: `${credentials.api.url}/${shortUrl.data.id}` })
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
    console.log(error.response)
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
      const imgurData = await imgur.post('/3/image', { image: reader.result.split(',')[1], type: 'base64' })
      setProperty(store, { property: 'imgurLink', value: imgurData.data.data.link })
      setProperty(store, { property: 'imgurHash', value: window.location.hash })
      toggleProperty(store, 'imgurModal')
      toggleProperty(store, 'savingDeck')
    }
  } catch (error) {
    toggleProperty(store, 'savingDeck')
  }
}
