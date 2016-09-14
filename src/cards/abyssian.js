const vetruvian = [
  { name: 'Darkfire Sacrifice', type: 'spell', cost: 0, rarity: 'rare', faction: 'abyssian', text: 'Destroy a friendly minion. Your next minion costs 2 less.' },
  { name: 'Abyssal Crawler', type: 'minion', cost: 1, rarity: 'core', attack: 2, health: 1, faction: 'abyssian', text: 'At the end of your turn, turn a nearby space into Shadow Creep.' },
  { name: 'Grasp of Agony', type: 'spell', cost: 1, rarity: 'common', faction: 'abyssian', text: 'Choose an enemy minion. When it dies, it deals 3 damage to enemies around it.' },
  { name: 'Horn of the Forsaken', type: 'artifact', cost: 1, rarity: 'core', faction: 'abyssian', text: 'Whenever your General deals damage, summon a 1/1 Wraithling nearby your General.' },
  { name: 'Sphere of Darkness', type: 'spell', cost: 1, rarity: 'common', faction: 'abyssian', text: 'Turn a space into Shadow Creep. Draw a card.' },
  { name: 'Void Pulse', type: 'spell', cost: 1, rarity: 'common', faction: 'abyssian', text: 'Deal 2 damage to an enemy General. Restore 3 Health to your General.' },
  { name: 'Blood Siren', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 2, faction: 'abyssian', text: 'Opening Gambit: Give a nearby enemy minion or General -2 Attack this turn.' },
  { name: 'Consuming Rebirth', type: 'spell', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Destroy a friendly minion. At the end of your turn, re-summon it on the same space and give it +1/+1.' },
  { name: 'Daemonic Lure', type: 'spell', cost: 2, rarity: 'core', faction: 'abyssian', text: 'Deal 1 damage to an enemy minion and teleport it to any space on the battlefield.' },
  { name: 'Darkspine Elemental', type: 'minion', cost: 2, rarity: 'rare', attack: 1, health: 4, faction: 'abyssian', text: 'Double the damage dealt by friendly Shadow Creep.' },
  { name: 'Echoing Shriek', type: 'spell', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Transform ALL minions that cost 2 or less into 1/1 Wraithlins.' },
  { name: 'Gloomchaser', type: 'minion', cost: 2, rarity: 'core', attack: 2, health: 2, faction: 'abyssian', text: 'Opening Gambit: Summon a 1/1 Wraithling in a random nearby space.' },
  { name: 'Gor', type: 'battle pet', cost: 2, rarity: 'common', attack: 1, health: 1, faction: 'abyssian', text: 'Dying Wish: Summon a copy of this minion in a random unoccupied corner.' },
  { name: 'Inkhorn Gaze', type: 'spell', cost: 2, rarity: 'common', faction: 'abyssian', text: 'Deal 2 damage to a minion. If it dies this turn, put a random Battle Pet into your action bar.' },
  { name: 'Lurking Fear', type: 'spell', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Lower the cost of all minions with Dying Wish in your action bar and deck by 1.' },
  { name: 'Ooz', type: 'battle pet', cost: 2, rarity: 'rare', attack: 3, health: 3, faction: 'abyssian', text: 'Whenever this minion takes damage, turn a space occupied by an enemy into Shadow Creep.' },
  { name: 'Soulshatter Pact', type: 'spell', cost: 2, rarity: 'core', faction: 'abyssian', text: 'Give all friendly minions +2 Attack this turn.' },
  { name: 'Spectral Blade', type: 'artifact', cost: 2, rarity: 'epic', faction: 'abyssian', text: 'Your General gains +2 Attack. Whenever your General destroys an enemy minion, restore 2 Health to your General.' },
  { name: 'Blood Baronette', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 3, faction: 'abyssian', text: 'Opening Gambit: Double a nearby Wraithling\'s Attack and Health.' },
  { name: 'Deathfire Crescendo', type: 'spell', cost: 3, rarity: 'legendary', faction: 'abyssian', text: 'Give a friendly minion, "Deathwatch: Gains +2/+2."' },
  { name: 'Nightsorrow Assassin', type: 'minion', cost: 3, rarity: 'common', attack: 2, health: 1, faction: 'abyssian', text: 'Opening Gambit: Destroy a nearby enemy minion with 2 or less Attack.' },
  { name: 'Ritual Banishing', type: 'spell', cost: 3, rarity: 'rare', faction: 'abyssian', text: 'Destroy a friendly minion to destroy an enemy minion.' },
  { name: 'Shadow Reflection', type: 'spell', cost: 3, rarity: 'common', faction: 'abyssian', text: 'Give a friendly minion +5 Attack.' },
  { name: 'Shadow Watcher', type: 'minion', cost: 3, rarity: 'core', attack: 2, health: 2, faction: 'abyssian', text: 'Deathwatch: Gains +1/+1.' },
  { name: 'Soul Grimwar', type: 'artifact', cost: 3, rarity: 'legendary', faction: 'abyssian', text: 'Your General gains, "Deathwatch: Gains +2 Attack."' },
  { name: 'Void Steal', type: 'spell', cost: 3, rarity: 'rare', faction: 'abyssian', text: 'Give an enemy minion +3 Attack. Nearby friendly minions gain +3 Attack.' },
  { name: 'Wraithling Fury', type: 'spell', cost: 3, rarity: 'epic', faction: 'abyssian', text: 'Give a friendly Wraithling minion +4/+4.' },
  { name: 'Wraithling Swarm', type: 'spell', cost: 3, rarity: 'core', faction: 'abyssian', text: 'Summon three 1/1 Wraithlings nearby each other.' },
  { name: 'Abyssal Juggernaut', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'abyssian', text: 'This minion has +1/+1 for each friendly Shadow Creep.' },
  { name: 'Bloodmoon Priestess', type: 'minion', cost: 4, rarity: 'rare', attack: 3, health: 3, faction: 'abyssian', text: 'Deathwatch: Summon a Wraithling on a random nearby space.' },
  { name: 'Breath of the Unborn', type: 'spell', cost: 4, rarity: 'common', faction: 'abyssian', text: 'Deal 2 damage to all enemy minions. Restore all friendly minions to full Health.' },
  { name: 'Dark Seed', type: 'spell', cost: 4, rarity: 'rare', faction: 'abyssian', text: 'Deal 1 damage to the enemy General for each card in the opponent\'s action bar.' },
  { name: 'Deepfire Devourer', type: 'minion', cost: 4, rarity: 'common', attack: 4, health: 4, faction: 'abyssian', text: 'Frenzy Opening Gambit: Destroy friendly minions around it and gain +2/+2 for each minion.' },
  { name: 'Ghost Azalea', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'abyssian', text: 'Your General gains +1 Attack for each friendly Shadow Creep.' },
  { name: 'Shadow Nova', type: 'spell', cost: 4, rarity: 'core', faction: 'abyssian', text: 'Turn a 2x2 area into Shadow Creep.' },
  { name: 'Shadow Sister Kelaino', type: 'minion', cost: 4, rarity: 'legendary', attack: 2, health: 5, faction: 'abyssian', text: 'Whenever an enemy minion or General takes damage, restore 1 Health to your General.' },
  { name: 'Black Solus', type: 'minion', cost: 5, rarity: 'epic', attack: 4, health: 7, faction: 'abyssian', text: 'Whenever you summon a Wraithling, this gains +2 Attack.' },
  { name: 'Dark Transformation', type: 'spell', cost: 5, rarity: 'core', faction: 'abyssian', text: 'Destroy an enemy minion and summon a 1/1 Wraithling on that space.' },
  { name: 'Nether Summoning', type: 'spell', cost: 5, rarity: 'artifact', faction: 'abyssian', text: 'Summon 2 non-token minions destroyed since the end of your last turn nearby.' },
  { name: 'Night Fiend', type: 'minion', cost: 5, rarity: 'common', attack: 3, health: 3, faction: 'abyssian', text: 'Opening Gambit: Deal 2 damage to each enemy on or near friendly Shadow Creep.' },
  { name: 'Reaper of the Nine Moons', type: 'minion', cost: 5, rarity: 'epic', attack: 5, health: 3, faction: 'abyssian', text: 'Flying Dying Wish: Summon a random minion from the opponent\'s deck on this space.' },
  { name: 'Rite of the Undervault', type: 'spell', cost: 5, rarity: 'epic', faction: 'abyssian', text: 'Draw to fill your action bar.' },
  { name: 'Shadowdancer', type: 'minion', cost: 5, rarity: 'rare', attack: 4, health: 4, faction: 'abyssian', text: 'Deathwatch: Deal 1 damage to the enemy General, and restore 1 Health to your General.' },
  { name: 'Klaxon', type: 'minion', cost: 6, rarity: 'legendary', attack: 6, health: 6, faction: 'abyssian', text: 'Provoke Dying Wish: Turn siz random spaces into Shadow Creep.' },
  { name: 'Vorpal Reaver', type: 'minion', cost: 6, rarity: 'legendary', attack: 6, health: 6, faction: 'abyssian', text: 'Celerity Dying Wish: Summon six Wraithlings on random spaces.' },
  { name: 'Arcane Devourer', type: 'minion', cost: 7, rarity: 'epic', attack: 8, health: 7, faction: 'abyssian', text: 'Opening Gambit: The next minion you summon this turn costs 1.' },
  { name: 'Spectral Revenant', type: 'minion', cost: 7, rarity: 'legendary', attack: 6, health: 6, faction: 'abyssian', text: 'Rush Whenever this deals damage to an enemy minion, deal 4 damage to the enemy General.' },
  { name: 'Obliterate', type: 'spell', cost: 8, rarity: 'legendary', faction: 'abyssian', text: 'Destroy all friendly Shadow Creep to deal that much damage to all enemies.' },
]

export default vetruvian
