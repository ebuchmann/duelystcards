const magmar = [
  { id: 20111, name: 'Dampening Wave', set: 'core', type: 'spell', cost: 0, rarity: 'basic', faction: 'magmar', text: 'Choose an enemy minion. It can no longer couterattack.' },
  { id: 20112, name: 'Flash Reincarnation', set: 'core', type: 'spell', cost: 0, rarity: 'rare', faction: 'magmar', text: 'The next minion you summon this turn costs 2 less and takes 2 damage.' },
  { id: 20119, name: 'Amplification', set: 'core', type: 'spell', cost: 1, rarity: 'common', faction: 'magmar', text: 'Give a friendly damaged minion +2 Attack and +4 Health.' },
  { id: 20115, name: 'Dance of Dreams', set: 'core', type: 'spell', cost: 1, rarity: 'basic', faction: 'magmar', text: 'Whenever a friendly minion dies this turn, draw a card.' },
  { id: 20116, name: 'Greater Fortitude', set: 'core', type: 'spell', cost: 1, rarity: 'basic', faction: 'magmar', text: 'Give a friendly minion +2/+2.' },
  { id: 20203, name: 'Lava Lance', set: 'shimzar', type: 'spell', cost: 1, rarity: 'common', faction: 'magmar', text: 'Deal 2 damage to a minion. If you have an Egg, deal 4 damage instead.' },
  { id: 20202, name: 'Razor Skin', set: 'shimzar', type: 'spell', cost: 1, rarity: 'common', faction: 'magmar', text: 'Give all friendly minions +1 Attack. Put a random Battle Pet into your action bar.' },
  { id: 421, name: 'Rex', set: 'shimzar', type: 'minion', race: 'battle pet', cost: 1, rarity: 'common', attack: 3, health: 1, faction: 'magmar', text: '<b>Rebirth</b>' },
  { id: 20113, name: 'Diretide Frenzy', set: 'core', type: 'spell', cost: 2, rarity: 'common', faction: 'magmar', text: 'Give a friendly minion +1 Attack and <b>Frenzy</b>.' },
  { id: null, name: 'Entropic Gaze', set: 'bloodborn', type: 'spell', cost: 2, rarity: 'common', faction: 'magmar', spirit: 0, text: 'Deal 4 damage to the enemy General. Both players draw a card.' },
  { id: 420, name: 'Gro', set: 'shimzar', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 2, health: 4, faction: 'magmar', text: '<b>Grow</b>: +1/+1.' },
  { id: 30013, name: 'Iridium Scale', set: 'core', type: 'artifact', cost: 2, rarity: 'epic', faction: 'magmar', text: 'Your General gains <b>Frenzy</b>.' },
  { id: 409, name: 'Kujata', set: 'core', type: 'minion', cost: 2, rarity: 'epic', attack: 2, health: 2, faction: 'magmar', text: 'Your minions cost 1 less to summon and take 1 damage when summoned from your action bar.' },
  { id: 20125, name: 'Natural Selection', set: 'core', type: 'spell', cost: 2, rarity: 'basic', faction: 'magmar', text: 'Destroy ANY minion with the lowest Attack or tied for the lowest Attack.' },
  { id: 406, name: 'Phalanxar', set: 'core', type: 'minion', cost: 2, rarity: 'basic', attack: 6, health: 1, faction: 'magmar', text: '' },
  { id: null, name: 'Rancour', set: 'bloodborn', type: 'minion', cost: 2, rarity: 'epic', attack: 1, health: 3, faction: 'magmar', spirit: 0, text: 'Whenever your General takes damage, this minion gains that much Attack.' },
  { id: 20114, name: 'Tremor', set: 'core', type: 'spell', cost: 2, rarity: 'common', faction: 'magmar', text: '<b>Stun</b> enemy minions in a 2x2 area.' },
  { id: 412, name: 'Young Silithar', set: 'core', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'magmar', text: '<b>Rebirth</b>' },
  { id: 402, name: 'Earth Walker', set: 'core', type: 'minion', cost: 3, rarity: 'basic', attack: 3, health: 3, faction: 'magmar', text: '<b>Grow</b>: +1/+1.' },
  { id: 20162, name: 'Kinetic Equilibrium', set: 'core', type: 'spell', cost: 3, rarity: 'rare', faction: 'magmar', text: 'Deal 2 damage to ALL minion in a 3x3 area. Friendly minions in the area also gain +2 Attack.' },
  { id: 423, name: 'Moloki Huntress', set: 'shimzar', type: 'minion', cost: 3, rarity: 'epic', attack: 1, health: 2, faction: 'magmar', text: '<b>Grow</b>: +1/+1. Friendly minions grow at the start of BOTH player\'s turns.' },
  { id: 410, name: 'Primordial Gazer', set: 'core', type: 'minion', cost: 3, rarity: 'basic', attack: 2, health: 2, faction: 'magmar', text: '<b>Opening Gambit</b>: Give a nearby friendly minion +2/+2.' },
  { id: null, name: 'Tectonic Spikes', set: 'bloodborn', type: 'spell', cost: 3, rarity: 'rare', faction: 'magmar', spirit: 0, text: 'Both players draw 3 cards. Deal 3 damage to both Generals.' },
  { id: null, name: 'Thraex', set: 'bloodborn', type: 'minion', cost: 3, rarity: 'common', attacK: 2, health: 4, faction: 'magmar', spirit: 0, text: '<b>Blood Surge:</b> All friendly minions gain +1 Attack (including itself).' },
  { id: 20218, name: 'Thumping Wave', set: 'shimzar', type: 'spell', cost: 3, rarity: 'rare', faction: 'magmar', text: 'Give a minion +5 Attack. At the end of turn, transform it into a 3/3 Kin.' },
  { id: 30017, name: 'Twin Fang', set: 'core', type: 'artifact', cost: 3, rarity: 'legendary', faction: 'magmar', text: 'Whenever a friendly minion or your General takes damage, your General gains +2 Attack.' },
  { id: 417, name: 'Vindicator', set: 'core', type: 'minion', cost: 3, rarity: 'legendary', attack: 1, health: 3, faction: 'magmar', text: 'Whenever your opponent draws a card, this minion gains +2/+2.' },
  { id: 30012, name: 'Adamantite Claws', set: 'core', type: 'artifact', cost: 4, rarity: 'basic', faction: 'magmar', text: 'Your General gains +4 Attack.' },
  { id: 20124, name: 'Chrysalis Burst', set: 'core', type: 'spell', cost: 4, rarity: 'legendary', faction: 'magmar', text: 'Summon a random Egg in 4 random spaces on the battlefield.' },
  { id: null, name: 'Drogon', set: 'bloodborn', type: 'minion', cost: 4, rarity: 'legendary', attack: 5, health: 4, faction: 'magmar', spirit: 0, text: `<b>Blood Surge:</b> Double your General's Attack this turn.` },
  { id: 419, name: 'Earth Sister Taygete', set: 'core', type: 'minion', cost: 4, rarity: 'legendary', attack: 3, health: 4, spirit: 0, faction: 'magmar', text: 'Whenever this minion takes damage, deal that much damage to all nearby enemies.' },
  { id: 20117, name: 'Earth Sphere', set: 'core', type: 'spell', cost: 4, rarity: 'common', faction: 'magmar', text: 'Restore 8 Health to your General.' },
  { id: 20157, name: 'Egg Morph', set: 'core', type: 'spell', cost: 4, rarity: 'rare', faction: 'magmar', text: 'Turn a non-Egg minion into an Egg, or hatch an Egg.' },
  { id: 407, name: 'Elucidator', set: 'core', type: 'minion', cost: 4, rarity: 'rare', attack: 5, health: 4, faction: 'magmar', text: '<b>Rush</b><br> <b>Opening Gambit</b>: Deal 4 damage to your General.' },
  { id: 403, name: 'Grimrock', set: 'core', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 4, faction: 'magmar', text: '<b>Grow</b>: +2/+2.' },
  { id: 20156, name: 'Mind Steal', set: 'core', type: 'spell', cost: 4, rarity: 'epic', faction: 'magmar', text: `Steal a random minion from your opponent's deck and summon it.` },
  { id: null, name: `Valknu's Seal`, set: 'bloodborn', type: 'spell', cost: 4, rarity: 'epic', faction: 'magmar', spirit: 0, text: 'Summoon an Egg that hatches into a copy of your General.' },
  { id: 413, name: 'Veteran Silithar', set: 'core', type: 'minion', cost: 4, rarity: 'common', attack: 4, health: 3, faction: 'magmar', text: '<b>Rebirth</b>' },
  { id: 422, name: 'Wild Inceptor', set: 'shimzar', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 3, faction: 'magmar', text: '<b>Opening Gambit</b>: Hatch a friendly Egg.' },
  { id: 404, name: 'Kolossus', set: 'core', type: 'minion', cost: 5, rarity: 'common', attack: 1, health: 7, faction: 'magmar', text: '<b>Grow</b>: +4/+4.' },
  { id: 30025, name: 'Morin-Khur', set: 'shimzar', type: 'artifact', cost: 5, rarity: 'legendary', faction: 'magmar', text: 'Your General gains +3 Attack. Whenever your General deals damage, hatch all friendly Eggs.' },
  { id: 20206, name: `Nature's Confluence`, set: 'shimzar', type: 'spell', cost: 5, rarity: 'epic', faction: 'magmar', text: 'Summon four copies of a random Battle Pet in a 2x2 area.' },
  { id: 20122, name: 'Plasma Storm', set: 'core', type: 'spell', cost: 5, rarity: 'basic', faction: 'magmar', text: 'Destroy ALL minions with 3 or less Attack.' },
  { id: 415, name: 'Spirit Harvester', set: 'core', type: 'minion', cost: 5, rarity: 'rare', attack: 5, health: 5, faction: 'magmar', text: 'At the end of your turn, deal 1 damage to ALL other minions.' },
  { id: 426, name: 'Visionar', set: 'shimzar', type: 'minion', cost: 5, rarity: 'epic', attack: 6, health: 3, faction: 'magmar', text: 'Whenever ANY player draws a card, this minion gains +1/+1.' },
  { id: 424, name: 'Dreadnought', set: 'shimzar', type: 'minion', cost: 6, rarity: 'legendary', attack: 4, health: 6, faction: 'magmar', text: '<b>Rebirth</b><br> Egg minions you summon gain +2/+2.' },
  { id: 20063, name: 'Fractal Replication', set: 'core', type: 'spell', cost: 6, rarity: 'epic', faction: 'magmar', text: 'Summon two copies of a friendly minion nearby that minion.' },
  { id: 405, name: 'Makantor Warbeast', set: 'core', type: 'minion', cost: 6, rarity: 'epic', attack: 4, health: 4, faction: 'magmar', text: '<b>Frenzy</b>, <b>Rush</b>' },
  { id: 20121, name: 'Metamorphosis', set: 'core', type: 'spell', cost: 6, rarity: 'legendary', faction: 'magmar', text: 'Transform all enemy minions into 1/1 Magma with no abilities until the end of your opponent\'s turn.' },
  { id: 20118, name: 'Bounded Lifeforce', set: 'core', type: 'spell', cost: 7, rarity: 'epic', faction: 'magmar', text: 'Your General becomes 10/10.' },
  { id: 414, name: 'Silithar Elder', set: 'core', type: 'minion', cost: 7, rarity: 'legendary', attack: 6, health: 6, faction: 'magmar', text: '<b>Rebirth</b><br> At the end of your turn, summon a Silithar Elder Egg nearby.' },
  { id: 408, name: 'Unstable Leviathan', set: 'core', type: 'minion', cost: 7, rarity: 'rare', attack: 11, health: 11, faction: 'magmar', text: 'At the start of your turn, deal 4 damage to a random minion or General.' },
  { id: 20219, name: 'Flaming Stampede', set: 'shimzar', type: 'spell', cost: 8, rarity: 'legendary', faction: 'magmar', text: 'Deal 5 damage to ALL non-Egg minions and Generals.' },
  { id: 425, name: 'Mandrake', set: 'shimzar', type: 'minion', cost: 12, rarity: 'rare', attack: 6, health: 6, faction: 'magmar', text: 'Costs 1 less for each minion summoned from ANY player\'s action bar this game.' },
]

export default magmar
