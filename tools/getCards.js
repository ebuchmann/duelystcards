const cardTypes = {
  3: 'minion',
  4: 'spell',
  6: 'artifact',
};

const searchFaction = '';

const exportable = GameDataManager.getInstance().cardsCollection.models
  .filter(card => card.attributes.isAvailable &&
                  !card.attributes.isGeneral &&
                  !card.attributes.isHiddenInCollection &&
                  String(card.id).length < 6 &&
                  card.attributes.factionName !== 'Boss' &&
                  card.attributes.factionName !== 'Tutorial Teacher')
  .filter(card => [3, 4, 6].includes(card.attributes.type))
  .map((card) => {
    const a = card.attributes;

    return {
      id: a.id,
      name: a.name,
      set: a.cardSetName.replace('\'', '').toLowerCase(),
      type: cardTypes[a.type],
      race: a.raceName,
      cost: a.manaCost,
      rarity: a.rarityName.toLowerCase(),
      faction: a.factionName.split(' ')[0].toLowerCase(),
      text: a.description,
      attack: a.atk,
      health: a.hp,
      spirit: (a.isCraftable) ? null : 0,
    };
  })
  .filter(c => c.faction === searchFaction);

console.log(JSON.stringify(exportable));
