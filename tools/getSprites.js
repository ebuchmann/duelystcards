#! /usr/local/bin/node
const cards = require('./cards/index');
const fs = require('fs');
const https = require('https');
const folderBase = 'sprites';

const main = () => {
  if (fs.existsSync(folderBase)) {
    fs.rmdirSync(folderBase);
  }
  fs.mkdirSync(folderBase);

  downloadSpritesForSet(cards, 'core');
  downloadSpritesForSet(cards, 'shimzar');
  downloadSpritesForSet(cards, 'bloodbound');
  downloadSpritesForSet(cards, 'ancient bonds');
  downloadSpritesForSet(cards, 'unearthed prophecy');
}

const downloadSpritesForSet = (cards, set) => {
  const setIds = getAllFactionSetIds(cards, set)
  const setSlug = slugForSet(set);  
  
  setIds.forEach(id => {
    const outputFile = fs.createWriteStream(`${folderBase}/${id}.gif`);
    const request = https.get(`https://cards.duelyst.com/img/cards/${setSlug}/${id}_idle.gif`, (response) => {
      response.pipe(outputFile);
    });
  });
}

const slugForSet = (set) => {
  switch (set) {
    case 'core':
    case 'shimzar':
      return set;
    case 'bloodbound':
      return 'bloodstorm';
    case 'ancient bonds':
      return 'unity';
    case 'unearthed prophecy':
      return 'unearthed-prophecy';
  };
}

const getAllFactionSetIds = (cards, set) => {
  return [
    ...getFactionSetIds(cards.abyssian, set),
    ...getFactionSetIds(cards.generals, set),
    ...getFactionSetIds(cards.lyonar, set),
    ...getFactionSetIds(cards.magmar, set),
    ...getFactionSetIds(cards.neutral, set),
    ...getFactionSetIds(cards.songhai, set),
    ...getFactionSetIds(cards.vanar, set),
    ...getFactionSetIds(cards.vetruvian, set)
  ];
};

const getFactionSetIds = (faction, set) => {
  return faction.filter(o => o.set === set).map(o => o.id);
};

if (require.main === module) {
  main();
}