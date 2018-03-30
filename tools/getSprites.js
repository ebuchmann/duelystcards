#! /usr/local/bin/node
const cards = require('./cards/index');
const fs = require('fs');
const https = require('https');

const folderBase = 'sprites';

const getFactionSetIds = (faction, set) =>
  faction.filter(o => o.set === set).map(o => o.id);

const getAllFactionSetIds = (cards, set) => [
  ...getFactionSetIds(cards.abyssian, set),
  ...getFactionSetIds(cards.generals, set),
  ...getFactionSetIds(cards.lyonar, set),
  ...getFactionSetIds(cards.magmar, set),
  ...getFactionSetIds(cards.neutral, set),
  ...getFactionSetIds(cards.songhai, set),
  ...getFactionSetIds(cards.vanar, set),
  ...getFactionSetIds(cards.vetruvian, set)
];

const slugForSet = (set) => {
  switch (set) {
    case 'core':
    case 'shimzar':
      return set;
    case 'bloodbound':
      return 'bloodstorm';
    case 'ancients':
      return 'unity';
    case 'unearthed':
      return 'unearthed-prophecy';
    case 'immortal':
      return 'wartech';
    case 'mythron':
      return 'coreshatter';
  }
};

const downloadSpritesForSet = (cards, set) => {
  const setIds = getAllFactionSetIds(cards, set);
  const setSlug = slugForSet(set);

  setIds.forEach((id) => {
    const outputFile = fs.createWriteStream(`${folderBase}/${id}.gif`);
    const request = https.get(
      `https://cards.duelyst.com/img/cards/${setSlug}/${id}_idle.gif`,
      (response) => {
        if (response.statusCode === 404) {
          console.error(`Failed to DL ${setSlug}-${id}.`);
        }
        response.pipe(outputFile);
      }
    );

    request.on('error', (error) => {
      console.error(error.message);
    });
  });
};

const main = () => {
  if (fs.existsSync(folderBase)) {
    fs.rmdirSync(folderBase);
  }
  fs.mkdirSync(folderBase);

  downloadSpritesForSet(cards, 'core');
  downloadSpritesForSet(cards, 'shimzar');
  downloadSpritesForSet(cards, 'bloodbound');
  downloadSpritesForSet(cards, 'ancients');
  downloadSpritesForSet(cards, 'unearthed');
  downloadSpritesForSet(cards, 'immortal');
  downloadSpritesForSet(cards, 'mythron');
};

if (require.main === module) {
  main();
}
