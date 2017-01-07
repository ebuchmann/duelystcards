import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import sanitize from 'sanitize-filename';
import store from 'store/store';
import credentials from '../../credentials';
import { api, imgur } from '../api-config';

const getImage = (type) => {
  const element = type === 'horizontal' ? document.querySelector('.horizontal-deck-modal .modal-wrapper .modal-container') : document.querySelector('.modal-vertical-deck');
  const options = type === 'horizontal' ? {} : { style: { padding: '40px 20px 20px 20px' } };
  return domtoimage.toBlob(element, options);
};

const getShortUrl = async () => {
  const shortUrl = await api.post('/save-deck', { hash: store.state.route.hash });
  store.dispatch('app/setProperty', { property: 'shortUrl', value: `${credentials.api.url}/${shortUrl.data.id}` });
};

export const saveToComputer = async (type, currentFaction) => {
  try {
    const deckName = store.state.deck.deckName;
    const fileName = deckName ? sanitize(deckName).replace(/ /g, '-') : `${currentFaction}-deck`;
    store.dispatch('app/setProperty', { property: 'saveType', value: type });
    store.dispatch('app/toggleProperty', 'savingDeck');
    ga('send', 'event', 'Save deck', 'Computer', type);
    await getShortUrl();
    const image = await getImage(type);
    saveAs(image, `${fileName}.png`);
  } catch (error) {
    console.log(error.response);
  }
  store.dispatch('app/toggleProperty', 'savingDeck');
};

export const saveToImgur = async (type) => {
  try {
    store.dispatch('app/setProperty', { property: 'saveType', value: type });
    store.dispatch('app/toggleProperty', 'savingDeck');
    ga('send', 'event', 'Save deck', 'Imgur', type);
    await getShortUrl();
    const image = await getImage(type);
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = async () => {
      const imgurData = await imgur.post('/3/image', { image: reader.result.split(',')[1], type: 'base64' });
      store.dispatch('app/setProperty', { property: 'imgurLink', value: imgurData.data.data.link });
      store.dispatch('app/setProperty', { property: 'imgurHash', value: window.location.hash });
      store.dispatch('app/toggleProperty', 'imgurModal');
      store.dispatch('app/toggleProperty', 'savingDeck');
    };
  } catch (error) {
    store.dispatch('app/toggleProperty', 'savingDeck');
  }
};
