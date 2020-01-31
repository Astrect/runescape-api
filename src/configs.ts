export const oldschool = {}

export const runescape = {
  bestiary: {
    endpoints: {
      beast: `http://services.runescape.com/m=itemdb_rs/bestiary/beastData.json?beastid=`,
      beastTerm: `http://services.runescape.com/m=itemdb_rs/bestiary/beastSearch.json?term=`,
      beastLetter: `http://services.runescape.com/m=itemdb_rs/bestiary/bestiaryNames.json?letter=`,
      areas: `http://services.runescape.com/m=itemdb_rs/bestiary/areaNames.json`,
      beastArea: `http://services.runescape.com/m=itemdb_rs/bestiary/areaBeasts.json?identifier=`,
      slayerCats: `http://services.runescape.com/m=itemdb_rs/bestiary/bestiary/slayerCatNames.json`,
      beastSlayer: `http://services.runescape.com/m=itemdb_rs/bestiary/slayerBeasts.json?identifier=`,
      weaknesses: `http://services.runescape.com/m=itemdb_rs/bestiary/bestiary/weaknessNames.json`,
      beastWeekend: `http://services.runescape.com/m=itemdb_rs/bestiary/weaknessBeasts.json?identifier=`,
      beastLevel: `http://services.runescape.com/m=itemdb_rs/bestiary/levelGroup.json?identifier=`,
    },
  },
  grandexchange: {
    endpoints: {
      category: `http://services.runescape.com/m=itemdb_rs/api/catalogue/category.json?category=`,
      categoryPrices: `http://services.runescape.com/m=itemdb_rs/api/catalogue/items.json?`,
      item: `http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=`,
      itemGraph: `http://services.runescape.com/m=itemdb_rs/api/graph/`,
    },
    categories: [
      "Miscellaneous",
      "Ammo",
      "Arrows",
      "Bolts",
      "Construction materials",
      "Construction projects",
      "Cooking ingredients",
      "Costumes",
      "Crafting materials",
      "Familiars",
      "Farming produce",
      "Fletching materials",
      "Food and drink",
      "Herblore materials",
      "Hunting equipment",
      "Hunting produce",
      "Jewellery",
      "Mage armour",
      "Mage weapons",
      "Melee armour - low level",
      "Melee armour - mid level",
      "Melee armour - high level",
      "Melee weapons - low level",
      "Melee weapons - mid level",
      "Melee weapons - high level",
      "Mining and smithing",
      "Potions",
      "Prayer armour",
      "Prayer materials",
      "Range armour",
      "Range weapons",
      "Runecrafting",
      "Runes, Spells and Teleports",
      "Seeds",
      "Summoning scrolls",
      "Tools and containers",
      "Woodcutting product",
      "Pocket items",
    ],
  },
  hiscores: {
    endpoints: {
      normal: `http://services.runescape.com/m=hiscore/index_lite.ws?player=`,
      ironman: `http://services.runescape.com/m=hiscore_ironman/index_lite.ws?player=`,
      hardcore: `http://services.runescape.com/m=hiscore_hardcore_ironman/index_lite.ws?player=`,
      clan: `http://services.runescape.com/m=clan-hiscores/members_lite.ws?clanName=`,
    },
    activities: [
      `Bounty Hunters`,
      `B.H. Rogues`,
      `Dominion Tower`,
      `The Crucible`,
      `Castle Wars Games`,
      `B.A Attackers`,
      `B.A Defenders`,
      `B.A Collectors`,
      `B.A Healers`,
      `Duel Tournament`,
      `Mobilising Armies`,
      `Conquest`,
      `Fist of Guthix`,
      `GG: Resource Race`,
      `GG: Athletics`,
      `WE2: Armadyl Lifetime Contribution`,
      `WE2: Bandos Lifetime Contribution`,
      `WE2: Armadyl PvP kills`,
      `WE2: Bandos PvP kills`,
      `Heist Guard Level`,
      `Heist Robber Level`,
      `CFP: 5 Game Average`,
      `AF15: Cow Tipping`,
      `AF15: Rats killed after the miniquest`,
      `RuneScore`,
      `Clue Scrolls (easy)`,
      `Clue Scrolls (medium)`,
      `Clue Scrolls (hard)`,
      `Clue Scrolls (elite)`,
      `Clue Scrolls (master)`,
    ],
    skills: [
      `Overall`,
      `Attack`,
      `Defence`,
      `Strength`,
      `Hitpoints`,
      `Ranged`,
      `Prayer`,
      `Magic`,
      `Cooking`,
      `Woodcutting`,
      `Fletching`,
      `Fishing`,
      `Firemaking`,
      `Crafting`,
      `Smithing`,
      `Mining`,
      `Herblore`,
      `Agility`,
      `Thieving`,
      `Slayer`,
      `Farming`,
      `Runecrafting`,
      `Hunter`,
      `Construction`,
      `Summoning`,
      `Dungeoneering`,
      `Divination`,
      `Invention`,
    ],
  },
  runemetrics: {
    endpoints: {
      profile: `https://apps.runescape.com/runemetrics/profile/profile?activities=20&user=`,
      monthlyXp: `https://apps.runescape.com/runemetrics/xp-monthly`,
      quests: `https://apps.runescape.com/runemetrics/quests?user=`,
    },
  },
  other: {
    totalUsers: `https://secure.runescape.com/m=account-creation-reports/rsusertotal.ws`,
  },
}
