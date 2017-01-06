import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import store from 'store/store';
import credentials from '../../credentials';
import { api, imgur } from '../api-config';

function getImage (type) {
  const element = type === 'horizontal' ? document.querySelector('.horizontal-deck-modal .modal-wrapper .modal-container') : document.querySelector('.deck-list')
  const options = type === 'horizontal' ? {} : { width: element.offsetWidth + 40, bgcolor: '#0b1c27', style: { padding: '40px 20px 20px 20px' } }
  return domtoimage.toBlob(element, options)
}

async function getShortUrl () {
  const shortUrl = await api.post('/save-deck', { hash: store.state.route.hash });
  store.dispatch('app/setProperty', { property: 'shortUrl', value: `${credentials.api.url}/${shortUrl.data.id}` });
}

export const saveToComputer = async (type, currentFaction) => {
  try {
    store.dispatch('app/toggleProperty', 'savingDeck');
    ga('send', 'event', 'Save deck', 'Computer', type)
    await getShortUrl()
    const image = await getImage(type)
    saveAs(image, `${currentFaction}-deck.png`)
  } catch (error) {
    console.log(error.response)
  }
  store.dispatch('app/toggleProperty', 'savingDeck');
}

export const saveToImgur = async (type) => {
  try {
    store.dispatch('app/toggleProperty', 'savingDeck');
    ga('send', 'event', 'Save deck', 'Imgur', type)
    await getShortUrl()
    const image = await getImage(type)
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onloadend = async () => {
      const imgurData = await imgur.post('/3/image', { image: reader.result.split(',')[1], type: 'base64' })
      store.dispatch('app/setProperty', { property: 'imgurLink', value: imgurData.data.data.link });
      store.dispatch('app/setProperty', { property: 'imgurHash', value: window.location.hash });
      store.dispatch('app/toggleProperty', 'imgurModal');
      store.dispatch('app/toggleProperty', 'savingDeck');
    }
  } catch (error) {
    store.dispatch('app/toggleProperty', 'savingDeck');
  }
}
