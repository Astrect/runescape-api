<h1 align="center">
  (Unofficial) RuneScape API Client
</h1>

<p align="center">
  <a href="https://github.com/pqt/runescape-api/actions?workflow=status">
    <img src="https://github.com/pqt/runescape-api/workflows/status/badge.svg?color=005cc5" alt="Current Github Action build status." />
  </a>
  <a href="https://www.npmjs.org/package/runescape-api">
    <img src="https://img.shields.io/librariesio/release/npm/runescape-api" alt="Package dependancy status." />
  </a>
  <a href="https://www.npmjs.org/package/runescape-api">
    <img src="https://img.shields.io/npm/dt/runescape-api?color=005cc5" alt="Total downloads." />
  </a>
  <a href="https://www.npmjs.org/package/runescape-api">
    <img src="https://img.shields.io/npm/v/runescape-api.svg?color=005cc5" alt="npm package version." />
  </a>
  <a href="https://github.com/pqt/runescape-api/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?color=005cc5" alt="Released under the MIT license." />
  </a>
</p>

## Installation

```bash
npm install runescape-api
# OR
yarn add runescape-api
```

## Usage

### RuneScape

<details>
  <summary>Clan</summary>

---

**Members**

```js
const { clan } = require("runescape-api")

clan.members("Royal 58").then(members => {
  console.log(members)
})
```

</details>

<details>
  <summary>Hiscores</summary>

---

**Player**

```js
const { hiscores } = require("runescape-api")

hiscores.player("Zezima").then(zezima => {
  console.log(zezima)

  /**
   * Player {
   *   name: 'Zezima',
   *   activities: {
   *     bounty_hunters: { rank: -1, count: -1 },
   *     bh_rogues: { rank: -1, count: -1 },
   *     dominion_tower: { rank: 131, count: 26444969 },
   *     the_crucible: { rank: -1, count: -1 },
   *     castle_wars_games: { rank: -1, count: -1 },
   *     ba_attackers: { rank: 2534, count: 4285 },
   *     ba_defenders: { rank: 2358, count: 4161 },
   *     ba_collectors: { rank: 1737, count: 4354 },
   *     ba_healers: { rank: 3085, count: 4405 },
   *     duel_tournament: { rank: 1070, count: 1944 },
   *     mobilising_armies: { rank: 382, count: 552 },
   *     conquest: { rank: 19118, count: 1258 },
   *     fist_of_guthix: { rank: -1, count: -1 },
   *     gg_resource_race: { rank: 5791, count: 631 },
   *     gg_athletics: { rank: 18337, count: 605 },
   *     we2_armadyl_lifetime_contribution: { rank: 36444, count: 563812 },
   *     we2_bandos_lifetime_contribution: { rank: -1, count: -1 },
   *     we2_armadyl_pvp_kills: { rank: -1, count: -1 },
   *     we2_bandos_pvp_kills: { rank: -1, count: -1 },
   *     heist_guard_level: { rank: -1, count: -1 },
   *     heist_robber_level: { rank: -1, count: -1 },
   *     cfp_5_game_average: { rank: 569, count: 169 },
   *     af15_cow_tipping: { rank: -1, count: -1 },
   *     af15_rats_killed_after_the_miniquest: { rank: -1, count: -1 },
   *     runescore: { rank: 1051, count: 21045 },
   *     clue_scrolls_easy: { rank: 237, count: 968 },
   *     clue_scrolls_medium: { rank: 43681, count: 7 },
   *     clue_scrolls_hard: { rank: 44947, count: 77 },
   *     clue_scrolls_elite: { rank: 38877, count: 68 },
   *     clue_scrolls_master: { rank: 27320, count: 12 }
   *   },
   *   skills: {
   *     overall: { rank: 50, level: 2778, experience: 5400000000 },
   *     attack: { rank: 468, level: 99, experience: 200000000 },
   *     defence: { rank: 898, level: 99, experience: 200000000 },
   *     strength: { rank: 476, level: 99, experience: 200000000 },
   *     hitpoints: { rank: 391, level: 99, experience: 200000000 },
   *     ranged: { rank: 669, level: 99, experience: 200000000 },
   *     prayer: { rank: 239, level: 99, experience: 200000000 },
   *     magic: { rank: 583, level: 99, experience: 200000000 },
   *     cooking: { rank: 4, level: 99, experience: 200000000 },
   *     woodcutting: { rank: 217, level: 99, experience: 200000000 },
   *     fletching: { rank: 81, level: 99, experience: 200000000 },
   *     fishing: { rank: 460, level: 99, experience: 200000000 },
   *     firemaking: { rank: 249, level: 99, experience: 200000000 },
   *     crafting: { rank: 220, level: 99, experience: 200000000 },
   *     smithing: { rank: 253, level: 99, experience: 200000000 },
   *     mining: { rank: 421, level: 99, experience: 200000000 },
   *     herblore: { rank: 358, level: 120, experience: 200000000 },
   *     agility: { rank: 135, level: 99, experience: 200000000 },
   *     thieving: { rank: 3, level: 99, experience: 200000000 },
   *     slayer: { rank: 407, level: 120, experience: 200000000 },
   *     farming: { rank: 362, level: 120, experience: 200000000 },
   *     runecrafting: { rank: 183, level: 99, experience: 200000000 },
   *     hunter: { rank: 207, level: 99, experience: 200000000 },
   *     construction: { rank: 192, level: 99, experience: 200000000 },
   *     summoning: { rank: 175, level: 99, experience: 200000000 },
   *     dungeoneering: { rank: 640, level: 120, experience: 200000000 },
   *     divination: { rank: 178, level: 99, experience: 200000000 },
   *     invention: { rank: 166, level: 120, experience: 200000000 }
   *   }
   * }
   */
})
```

**Avatar**

```js
const { hiscores } = require("runescape-api")

hiscores.avatar("Paqt").then(avatar => {
  console.log(avatar)

  /**
   * https://secure.runescape.com/m=avatar-rs/avatar.png?id=25260020
   */
})
```

</details>

<details>
  <summary>RuneMetrics</summary>

---

**Profile**

```js
const { runemetrics } = require("runescape-api")

runemetrics.profile("Paqt").then(profile => {
  console.log(profile)

  /**
   * {
   *   magic: 1388722,
   *   questsstarted: 18,
   *   totalskill: 1929,
   *   questscomplete: 132,
   *   questsnotstarted: 143,
   *   totalxp: 73706113,
   *   ranged: 4177540,
   *   activities: [
   *     {
   *       date: '24-Jan-2020 21:12',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '17-Jul-2019 07:04',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '17-Jul-2019 07:04',
   *       details: 'I levelled my  Herblore skill, I am now level 61.',
   *       text: 'Levelled up Herblore.'
   *     },
   *     {
   *       date: '26-Jun-2019 04:41',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '20-Jun-2019 01:10',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '05-Jun-2019 04:34',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '07-Feb-2019 04:27',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '07-Feb-2019 04:24',
   *       details: 'I won a large amount of coins on Treasure Hunter!',
   *       text: 'Large amount of coins obtained.'
   *     },
   *     {
   *       date: '30-Jan-2019 05:40',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '03-Jan-2019 01:47',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '26-Dec-2018 10:22',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '04-Dec-2018 04:14',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '28-Nov-2018 05:31',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '08-Nov-2018 07:58',
   *       details: 'I levelled my  Mining skill, I am now level 68.',
   *       text: 'Levelled up Mining.'
   *     },
   *     {
   *       date: '08-Nov-2018 07:43',
   *       details: 'I have visited my Clan Citadel this week.',
   *       text: 'Visited my Clan Citadel.'
   *     },
   *     {
   *       date: '14-Oct-2014 12:51',
   *       details: 'I levelled my  Summoning skill, I am now level 62.',
   *       text: 'Levelled up Summoning.'
   *     },
   *     {
   *       date: '13-Oct-2014 00:30',
   *       details: 'I levelled my  Hunter skill, I am now level 62.',
   *       text: 'Levelled up Hunter.'
   *     },
   *     {
   *       date: '13-Oct-2014 00:29',
   *       details: 'I levelled my  Crafting skill, I am now level 69.',
   *       text: 'Levelled up Crafting.'
   *     },
   *     {
   *       date: '10-Aug-2014 01:50',
   *       details: 'I won a Lucky Armadyl crossbow on Treasure Hunter!',
   *       text: 'Lucky Armadyl crossbow obtained.'
   *     },
   *     {
   *       date: '02-May-2014 00:08',
   *       details: 'I levelled my  Divination skill, I am now level 72.',
   *       text: 'Levelled up Divination.'
   *     }
   *   ],
   *   skillvalues: [
   *     { level: 99, xp: 150601597, rank: 87483, id: 8 },
   *     { level: 99, xp: 132964135, rank: 131197, id: 9 },
   *     { level: 99, xp: 131605606, rank: 174448, id: 11 },
   *     { level: 87, xp: 41775402, rank: 391262, id: 3 },
   *     { level: 87, xp: 39885284, rank: 362191, id: 2 },
   *     { level: 86, xp: 39335527, rank: 359811, id: 6 },
   *     { level: 85, xp: 35044619, rank: 344088, id: 1 },
   *     { level: 85, xp: 33169037, rank: 354179, id: 0 },
   *     { level: 83, xp: 27258878, rank: 274953, id: 10 },
   *     { level: 79, xp: 19172809, rank: 402003, id: 4 },
   *     { level: 76, xp: 13887225, rank: 332969, id: 5 },
   *     { level: 73, xp: 10224021, rank: 425629, id: 7 },
   *     { level: 72, xp: 9033714, rank: 286824, id: 25 },
   *     { level: 69, xp: 7178440, rank: 388167, id: 18 },
   *     { level: 69, xp: 7162753, rank: 405987, id: 12 },
   *     { level: 68, xp: 6155160, rank: 479803, id: 14 },
   *     { level: 65, xp: 4746375, rank: 482993, id: 13 },
   *     { level: 62, xp: 3569058, rank: 382899, id: 23 },
   *     { level: 62, xp: 3448319, rank: 378132, id: 21 },
   *     { level: 61, xp: 3272737, rank: 395359, id: 15 },
   *     { level: 61, xp: 3219611, rank: 400888, id: 24 },
   *     { level: 61, xp: 3138007, rank: 380394, id: 17 },
   *     { level: 60, xp: 2881919, rank: 393794, id: 20 },
   *     { level: 60, xp: 2831891, rank: 349363, id: 19 },
   *     { level: 60, xp: 2754656, rank: 431113, id: 16 },
   *     { level: 60, xp: 2744480, rank: 406241, id: 22 },
   *     { level: 1, xp: 0, rank: 0, id: 26 }
   *   ],
   *   name: 'Paqt',
   *   rank: '332,809',
   *   melee: 38605287,
   *   combatlevel: 116,
   *   loggedIn: 'false'
   * }
   */
})
```

</details>

## API
