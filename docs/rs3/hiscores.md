# Hiscores

## Usage

```javascript
import { hiscores } from "runescape-api"
```

## Functions

### getPlayer\(:playerName, :gamemode?\) <a id="getplayer"></a>

> Retrieve a player

| Parameter | Type | Default |
| :--- | :--- | :--- |
| `playerName` | `string` |  |
| `gamemode` | `normal` \| `ironman` \| `hardcore` | `normal` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
hiscores.getPlayer("Paqt").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
Player {
  name: 'Paqt',
  activities: {
    bounty_hunters: { rank: -1, count: -1 },
    bh_rogues: { rank: -1, count: -1 },
    dominion_tower: { rank: 103693, count: 151380 },
    the_crucible: { rank: -1, count: -1 },
    castle_wars_games: { rank: -1, count: -1 },
    ba_attackers: { rank: 120772, count: 542 },
    ba_defenders: { rank: 70156, count: 662 },
    ba_collectors: { rank: 108986, count: 530 },
    ba_healers: { rank: 110711, count: 680 },
    duel_tournament: { rank: -1, count: -1 },
    mobilising_armies: { rank: -1, count: -1 },
    conquest: { rank: -1, count: -1 },
    fist_of_guthix: { rank: 47711, count: 1795 },
    gg_resource_race: { rank: -1, count: -1 },
    gg_athletics: { rank: -1, count: -1 },
    we2_armadyl_lifetime_contribution: { rank: -1, count: -1 },
    we2_bandos_lifetime_contribution: { rank: -1, count: -1 },
    we2_armadyl_pvp_kills: { rank: -1, count: -1 },
    we2_bandos_pvp_kills: { rank: -1, count: -1 },
    heist_guard_level: { rank: -1, count: -1 },
    heist_robber_level: { rank: -1, count: -1 },
    cfp_5_game_average: { rank: -1, count: -1 },
    af15_cow_tipping: { rank: -1, count: -1 },
    af15_rats_killed_after_the_miniquest: { rank: -1, count: -1 },
    runescore: { rank: 263993, count: 2940 },
    clue_scrolls_easy: { rank: -1, count: -1 },
    clue_scrolls_medium: { rank: -1, count: -1 },
    clue_scrolls_hard: { rank: -1, count: -1 },
    clue_scrolls_elite: { rank: -1, count: -1 },
    clue_scrolls_master: { rank: -1, count: -1 }
  },
  skills: {
    overall: { rank: 333178, level: 1929, experience: 73706113 },
    attack: { rank: 355307, level: 85, experience: 3316903 },
    defence: { rank: 345122, level: 85, experience: 3504461 },
    strength: { rank: 363656, level: 87, experience: 3988528 },
    constitution: { rank: 392483, level: 87, experience: 4177540 },
    ranged: { rank: 403024, level: 79, experience: 1917280 },
    prayer: { rank: 333545, level: 76, experience: 1388722 },
    magic: { rank: 361077, level: 86, experience: 3933552 },
    cooking: { rank: 426816, level: 73, experience: 1022402 },
    woodcutting: { rank: 87660, level: 99, experience: 15060159 },
    fletching: { rank: 131406, level: 99, experience: 13296413 },
    fishing: { rank: 276013, level: 83, experience: 2725887 },
    firemaking: { rank: 174632, level: 99, experience: 13160560 },
    crafting: { rank: 406280, level: 69, experience: 716275 },
    smithing: { rank: 483621, level: 65, experience: 474637 },
    mining: { rank: 480847, level: 68, experience: 615516 },
    herblore: { rank: 397209, level: 61, experience: 327273 },
    agility: { rank: 431840, level: 60, experience: 275465 },
    thieving: { rank: 381201, level: 61, experience: 313800 },
    slayer: { rank: 388600, level: 69, experience: 717844 },
    farming: { rank: 349770, level: 60, experience: 283189 },
    runecrafting: { rank: 394485, level: 60, experience: 288191 },
    hunter: { rank: 378823, level: 62, experience: 344831 },
    construction: { rank: 406151, level: 60, experience: 274448 },
    summoning: { rank: 383196, level: 62, experience: 356905 },
    dungeoneering: { rank: 401470, level: 61, experience: 321961 },
    divination: { rank: 286807, level: 72, experience: 903371 },
    invention: { rank: -1, level: 0, experience: -1 }
  }
}
```
{% endtab %}
{% endtabs %}



