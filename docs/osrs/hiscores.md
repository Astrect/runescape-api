# OSRS Hiscores

## Usage

```javascript
import { hiscores } from "runescape-api/osrs"
```

## Functions

### getPlayer\(:playerName, :gamemode?\) <a id="getplayer"></a>

> Retrieve a player

<table>
  <thead>
    <tr>
      <th style="text-align:left">Parameter</th>
      <th style="text-align:left">Type</th>
      <th style="text-align:left">Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left"><code>playerName</code>
      </td>
      <td style="text-align:left"><code>string</code>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left"><code>gamemode</code>
      </td>
      <td style="text-align:left">
        <p><code>&quot;normal&quot;</code> | <code>&quot;ironman&quot;</code> | <code>&quot;hardcore&quot;</code> |</p>
        <p><code>&quot;ultimate&quot;</code> | <code>&quot;deadman&quot;</code> | <code>&quot;seasonal&quot;</code> 
        </p>
      </td>
      <td style="text-align:left"><code>&quot;normal&quot;</code>
      </td>
    </tr>
  </tbody>
</table>{% tabs %}
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
    league_points: { rank: -1, count: -1 },
    bounty_hunter_hunter: { rank: -1, count: -1 },
    bounty_hunter_rogue: { rank: -1, count: -1 },
    clue_scrolls_all: { rank: 288824, count: 53 },
    clue_scrolls_beginner: { rank: -1, count: -1 },
    clue_scrolls_easy: { rank: 548353, count: 3 },
    clue_scrolls_medium: { rank: 384480, count: 7 },
    clue_scrolls_hard: { rank: 205155, count: 37 },
    clue_scrolls_elite: { rank: 158167, count: 5 },
    clue_scrolls_master: { rank: 147219, count: 1 },
    last_man_standing: { rank: -1, count: -1 }
  },
  bosses: {
    abyssal_sire: { rank: -1, count: -1 },
    alchemical_hydra: { rank: -1, count: -1 },
    barrows_chests: { rank: 359209, count: 4 },
    bryophyta: { rank: -1, count: -1 },
    callisto: { rank: -1, count: -1 },
    cerberus: { rank: -1, count: -1 },
    chambers_of_xeric: { rank: -1, count: -1 },
    chambers_of_xeric_challenge_mode: { rank: -1, count: -1 },
    chaos_elemental: { rank: -1, count: -1 },
    chaos_fanatic: { rank: -1, count: -1 },
    commander_zilyana: { rank: -1, count: -1 },
    corporeal_beast: { rank: -1, count: -1 },
    crazy_archaeologist: { rank: -1, count: -1 },
    dagannoth_prime: { rank: -1, count: -1 },
    dagannoth_rex: { rank: -1, count: -1 },
    dagannoth_supreme: { rank: -1, count: -1 },
    deranged_archaeologist: { rank: -1, count: -1 },
    general_graardor: { rank: -1, count: -1 },
    giant_mole: { rank: 198700, count: 1 },
    grotesque_guardians: { rank: -1, count: -1 },
    hespori: { rank: 106376, count: 10 },
    kalphite_queen: { rank: -1, count: -1 },
    king_black_dragon: { rank: -1, count: -1 },
    kraken: { rank: -1, count: -1 },
    kreearra: { rank: -1, count: -1 },
    kril_tsutsaroth: { rank: -1, count: -1 },
    mimic: { rank: -1, count: -1 },
    nightmare: { rank: -1, count: -1 },
    obor: { rank: -1, count: -1 },
    sarachnis: { rank: -1, count: -1 },
    scorpia: { rank: -1, count: -1 },
    skotizo: { rank: 207521, count: 2 },
    the_gauntlet: { rank: -1, count: -1 },
    the_corrupted_gauntlet: { rank: -1, count: -1 },
    theatre_of_blood: { rank: -1, count: -1 },
    thermonuclear_smoke_devil: { rank: -1, count: -1 },
    tzkal_zuk: { rank: -1, count: -1 },
    tztok_jad: { rank: 108415, count: 2 },
    venenatis: { rank: -1, count: -1 },
    vetion: { rank: -1, count: -1 },
    vorkath: { rank: 46942, count: 408 },
    wintertodt: { rank: 447700, count: 1 },
    zalcano: { rank: -1, count: -1 },
    zulrah: { rank: 191518, count: 1 }
  },
  skills: {
    overall: { rank: 207774, level: 1811, experience: 65850144 },
    attack: { rank: 254027, level: 90, experience: 5549049 },
    defence: { rank: 224846, level: 90, experience: 5514750 },
    strength: { rank: 324177, level: 94, experience: 8296000 },
    constitution: { rank: 306887, level: 95, experience: 8791927 },
    ranged: { rank: 331625, level: 92, experience: 6650862 },
    prayer: { rank: 182148, level: 77, experience: 1531254 },
    magic: { rank: 521879, level: 83, experience: 2715672 },
    cooking: { rank: 560622, level: 70, experience: 794196 },
    woodcutting: { rank: 445155, level: 73, experience: 1007131 },
    fletching: { rank: 160389, level: 90, experience: 5406675 },
    fishing: { rank: 758917, level: 63, experience: 390135 },
    firemaking: { rank: 561724, level: 66, experience: 527722 },
    crafting: { rank: 232208, level: 75, experience: 1273183 },
    smithing: { rank: 324435, level: 70, experience: 786998 },
    mining: { rank: 250574, level: 74, experience: 1157311 },
    herblore: { rank: 65449, level: 90, experience: 5367034 },
    agility: { rank: 303024, level: 71, experience: 874126 },
    thieving: { rank: 275437, level: 70, experience: 778913 },
    slayer: { rank: 351633, level: 78, experience: 1779777 },
    farming: { rank: 167858, level: 83, experience: 2896562 },
    runecrafting: { rank: 175724, level: 65, experience: 485273 },
    hunter: { rank: 289379, level: 70, experience: 758356 },
    construction: { rank: 157046, level: 82, experience: 2517238 }
  }
}
```
{% endtab %}
{% endtabs %}

