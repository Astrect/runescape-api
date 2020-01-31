<p align="center">
  <img alt="RuneScape" src="https://www.runescape.com/img/responsive/common/logos/runescape@2x.png" height="60" />
</p>
<h1 align="center">
  (Unofficial) RuneScape API Client
</h1>

<p align="center">
<a href="https://github.com/pqt/runescape-api/actions?workflow=status">
    <img src="https://github.com/pqt/runescape-api/workflows/status/badge.svg" alt="Current Github Action build status." />
  </a>
  <a href="https://www.npmjs.org/package/runescape-api">
    <img src="https://img.shields.io/npm/v/runescape-api.svg" alt="Current npm package version." />
  </a>
  <a href="https://github.com/pqt/runescape-api/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="The runeScape-api package is released under the MIT license." />
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
  <summary>Hiscores</summary>

```js
import { getPlayer } from "runescape-api"

async function() {
  const zezima = await getPlayer("Zezima")
  /**
   * console.log(zezima) prints:
   *
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
}
```

</details>
