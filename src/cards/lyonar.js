const lyonar = [
  { id: 20109, name: 'Beam Shock', type: 'spell', cost: 0, rarity: 'common', faction: 'lyonar', text: '<b>Stun</b> an enemy minion or General.' },
  { id: 26, name: 'Slo', type: 'minion', race: 'battle pet', cost: 0, rarity: 'common', attack: 1, health: 4, faction: 'lyonar', text: '<b>Provoke</b>' },
  { id: 30004, name: 'Sunstone Bracers', type: 'artifact', cost: 0, rarity: 'basic', faction: 'lyonar', text: 'Your General gains +1 Attack.' },
  { id: 20120, name: 'Aegis Barrier', type: 'spell', cost: 1, rarity: 'legendary', faction: 'lyonar', text: 'Choose a friendly minion. It can\'t be targeted by enemy spells. Draw a card.' },
  { id: 20158, name: 'Aerial Rift', type: 'spell', cost: 1, rarity: 'epic', faction: 'lyonar', text: 'Give your minions <b>Airdrop</b> this turn. Draw a card.' },
  { id: 20045, name: 'Auryn Nexus', type: 'spell', cost: 1, rarity: 'common', faction: 'lyonar', text: 'Give a friendly minion +3 Health' },
  { id: 20189, name: 'Fighting Spirit', type: 'spell', cost: 1, rarity: 'epic', faction: 'lyonar', text: 'Give all friendly minions +1 Health. Put a random Battle Pet into your action bar.' },
  { id: 20062, name: 'Lionheart Blessing', type: 'spell', cost: 1, rarity: 'rare', faction: 'lyonar', text: 'Give a friendly minion, "<b>Zeal</b>: Whenever this minion deals damage, draw a card."' },
  { id: 20161, name: 'Magnetize', type: 'spell', cost: 1, rarity: 'rare', faction: 'lyonar', text: 'Pull ANY minion to the space in front of your General.' },
  { id: 14, name: 'Silverguard Squire', type: 'minion', cost: 1, rarity: 'common', attack: 1, health: 4, faction: 'lyonar', text: '' },
  { id: 20043, name: 'Sundrop Elixir', type: 'spell', cost: 1, rarity: 'common', faction: 'lyonar', text: 'Restore 5 Health to a minion or General.' },
  { id: 233713, name: 'True Strike', type: 'spell', cost: 1, rarity: 'basic', faction: 'lyonar', text: 'Deal 2 damage to a minion.' },
  { id: 21, name: 'Azurite Lion', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 3, faction: 'lyonar', text: '<b>Celerity</b>' },
  { id: 25, name: 'Fiz', type: 'minion', race: 'battle pet', cost: 2, rarity: 'rare', attack: 3, health: 3, faction: 'lyonar', text: '<b>Opening Gambit</b>: Restore 2 Health to a minion or General.' },
  { id: 20046, name: 'Lasting Judgement', type: 'spell', cost: 2, rarity: 'rare', faction: 'lyonar', text: 'Give ANY minion +3 Attack, but -3 Health.' },
  { id: 15, name: 'Lightchaser', type: 'minion', cost: 2, rarity: 'common', attack: 3, health: 2, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, this minion gains +1/+1' },
  { id: 20190, name: 'Lucent Beam', type: 'spell', cost: 2, rarity: 'common', faction: 'lyonar', text: 'Deal 2 damage to an enemy. If a minion or General was healed this turn, deal 4 damage instead.' },
  { id: 20064, name: 'Sun Bloom', type: 'spell', cost: 2, rarity: 'common', faction: 'lyonar', text: 'Dispel a 2x2 area on the battlefield.' },
  { id: 27, name: 'Sun Wisp', type: 'minion', cost: 2, rarity: 'common', attack: 2, health: 1, faction: 'lyonar', text: '<b>Opening Gambit</b>: Draw a card.' },
  { id: 10, name: 'Sunstone Templar', type: 'minion', cost: 2, rarity: 'epic', attack: 1, health: 4, faction: 'lyonar', text: 'Whenever this attacks or counterattacks, it dispels that enemy.' },
  { id: 20044, name: 'Tempest', type: 'spell', cost: 2, rarity: 'basic', faction: 'lyonar', text: 'Deal 2 damage to ALL minions and Generals.' },
  { id: 20047, name: 'War Surge', type: 'spell', cost: 2, rarity: 'basic', faction: 'lyonar', text: 'Give all friendly minions +1/+1' },
  { id: 9, name: 'Windblade Adept', type: 'minion', cost: 2, rarity: 'basic', attack: 2, health: 3, faction: 'lyonar', text: '<b>Zeal</b>: Gain +2 Attack.' },
  { id: 20188, name: 'Afterblaze', type: 'spell', cost: 3, rarity: 'common', faction: 'lyonar', text: 'Give a friendly minion +2/+4. If that minion has <b>Zeal</b>, draw a card.' },
  { id: 12, name: 'Arclyte Sentinel', type: 'minion', cost: 3, rarity: 'rare', attack: 2, health: 4, faction: 'lyonar', text: '<b>Opening Gambit</b>: Give ANY nearby minion +2 Attack, but -2 Health.' },
  { id: 20068, name: 'Divine Bond', type: 'spell', cost: 3, rarity: 'basic', faction: 'lyonar', text: 'Give a minion +Attack equal to its Health.' },
  { id: 20090, name: 'Martyrdom', type: 'spell', cost: 3, rarity: 'basic', faction: 'lyonar', text: `Destroy ANY minion. Restore that minion's Health to its General` },
  { id: 28, name: 'Radiant Dragoon', type: 'minion', cost: 3, rarity: 'rare', attack: 3, health: 4, faction: 'lyonar', text: 'At the end of your turn, give a friendly minion +1 Health.' },
  { id: 11, name: 'Silverguard Knight', type: 'minion', cost: 3, rarity: 'basic', attack: 1, health: 5, faction: 'lyonar', text: '<b>Provoke</b><br> <b>Zeal</b>: Grains +2 Attack.' },
  { id: 20187, name: 'Sky Burial', type: 'spell', cost: 3, rarity: 'rare', faction: 'lyonar', text: 'Destroy a minion that is not nearby any General.' },
  { id: 30001, name: 'Skywind Glaives', type: 'artifact', cost: 3, rarity: 'epic', faction: 'lyonar', text: 'Friendly minions nearby your General gain +2 Attack.' },
  { id: 29, name: 'Sunforge Lancer', type: 'minion', cost: 3, rarity: 'epic', attack: 2, health: 4, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, give your General +1 Attack.' },
  { id: 30018, name: 'Arclyte Regalia', type: 'artifact', cost: 4, rarity: 'legendary', faction: 'lyonar', text: 'Your General gains +2 Attack. The first time your General takes damage each turn, prevent 2 of it.' },
  { id: 20128, name: 'Decimate', type: 'spell', cost: 4, rarity: 'legendary', faction: 'lyonar', text: 'Destroy ALL minions that are not nearby any General.' },
  { id: 20067, name: 'Holy Immolation', type: 'spell', cost: 4, rarity: 'epic', faction: 'lyonar', text: 'Restore 4 Health to a friendly minon. Deal 4 damage to enemy minions and Generals around it.' },
  { id: 20186, name: 'Ironcliffe Heart', type: 'spell', cost: 4, rarity: 'ecpi', faction: 'lyonar', text: 'Transform a friendly minion into an Ironcliffe Guardian' },
  { id: 8, name: 'Lysian Brawler', type: 'minion', cost: 4, rarity: 'basic', attack: 4, health: 4, faction: 'lyonar', text: '<b>Celerity</b>' },
  { id: 24, name: 'Sun Sister Sterope', type: 'minion', cost: 4, rarity: 'legendary', attack: 4, health: 4, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, put a True Strike into your action bar.' },
  { id: 22, name: 'Sunriser', type: 'minion', cost: 4, rarity: 'epic', attack: 3, health: 4, faction: 'lyonar', text: 'Whenever ANY minion or General is healed, deal 2 damage to all nearby enemies.' },
  { id: 16, name: 'Suntide Maiden', type: 'minion', cost: 4, rarity: 'common', attack: 3, health: 6, faction: 'lyonar', text: '<b>Zeal</b>: At the end of your turn, restore this minion to full Health.' },
  { id: 20104, name: 'Circle of Life', type: 'spell', cost: 5, rarity: 'epic', faction: 'lyonar', text: 'Deal 5 damage to any enemy minion. Restore 5 Health to your General.' },
  { id: 17, name: 'Ironcliffe Guardian', type: 'minion', cost: 5, rarity: 'rare', attack: 3, Health: 10, faction: 'lyonar', text: '<b>Airdrop</b>, <b>Provoke</b>' },
  { id: 13, name: 'Second Sun', type: 'minion', cost: 5, rarity: 'rare', attack: 0, health: 8, faction: 'lyonar', text: '<b>Zeal</b>: Gains +8 Attack.' },
  { id: 30024, name: `Dawn's Eye`, type: 'artifact', cost: 6, rarity: 'legendary', faction: 'lyonar', text: 'Your General gains +4 Attack. At the end of your turn, repair all of your artifacts to full durability.' },
  { id: 18, name: 'Elyx Stormblade', type: 'minion', cost: 6, rarity: 'legendary', attack: 7, health: 7, faction: 'lyonar', text: '<b>Provoke</b><br> Your minions and General may move an additional space.' },
  { id: 30, name: 'Solarius', type: 'minion', cost: 6, rarity: 'legendary', attack: 3, health: 3, faction: 'lyonar', text: 'Zeal: Draw 2 additional cards at the end of your turn.' },
  { id: 20, name: 'Grandmaster Z\'ir', type: 'minion', cost: 7, rarity: 'legendary', attack: 5, health: 12, faction: 'lyonar', text: 'Whenever your General dies, Grandmaster Z\'ir becomes your General.' },
  { id: 20220, name: 'Sky Phalanx', type: 'spell', cost: 8, rarity: 'legendary', faction: 'lyonar', text: 'Summon three Silverguard Knights nearby your General.' },
]

export default lyonar
