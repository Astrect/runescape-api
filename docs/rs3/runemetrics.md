# RuneMetrics

## Usage

```javascript
import { runemetrics } from "runescape-api"
```

## Functions

### getMonthlyXp\(:playerName, :skillId\) <a id="getmonthlyxp"></a>

> Retrieve a user's monthly experience gained in a given skill

| Parameter | Type |
| :--- | :--- |
| `playerName` | `string` |
| `skillId` | `number` \| `Skill` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
runemetrics.getMonthlyXp("Conundrum129", 19).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
RuneMetricsMonthlyExperience {
  skill: Skill { id: 19, name: 'slayer' },
  totalExperience: 30150355,
  totalGain: 13802938,
  monthData: [
    { xpGain: 290353, timestamp: 1553986429592, rank: 59668 },
    { xpGain: 341001, timestamp: 1556575611538, rank: 54255 },
    { xpGain: 1341256, timestamp: 1559251411801, rank: 32790 },
    { xpGain: 1802315, timestamp: 1561848075528, rank: 28989 },
    { xpGain: 1988909, timestamp: 1564523768740, rank: 28842 },
    { xpGain: 1932892, timestamp: 1567196221990, rank: 27813 },
    { xpGain: 1401914, timestamp: 1569787993025, rank: 25709 },
    { xpGain: 1021838, timestamp: 1572466642590, rank: 24056 },
    { xpGain: 870090, timestamp: 1575064444827, rank: 31899 },
    { xpGain: 1011392, timestamp: 1577743934977, rank: 38277 },
    { xpGain: 1140432, timestamp: 1580424470870, rank: 35616 },
    { xpGain: 660546, timestamp: 1581548496021, rank: 31331 }
  ]
}
```
{% endtab %}
{% endtabs %}

### getProfile\(:playerName\) <a id="getprofile"></a>

> Retrieve a user's RuneMetrics profile name

| Parameter | Type |
| :--- | :--- |
| `playerName` | `string` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
runemetrics.getProfile("Paqt").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
RuneMetricsProfile {
  name: 'Paqt',
  combatLevel: 116,
  experience_distribution: { magic: 1388722, melee: 38605287, ranged: 4177540 },
  overall: { rank: 333433, level: 1929, experience: 73706113 },
  skills: {
    overall: { rank: 355648, level: 85, experience: 33169037 },
    attack: { rank: 345457, level: 85, experience: 35044619 },
    defence: { rank: 364015, level: 87, experience: 39885284 },
    strength: { rank: 392848, level: 87, experience: 41775402 },
    constitution: { rank: 403383, level: 79, experience: 19172809 },
    ranged: { rank: 333802, level: 76, experience: 13887225 },
    prayer: { rank: 361412, level: 86, experience: 39335527 },
    magic: { rank: 427228, level: 73, experience: 10224021 },
    cooking: { rank: 87705, level: 99, experience: 150601597 },
    woodcutting: { rank: 131492, level: 99, experience: 132964135 },
    fletching: { rank: 276258, level: 83, experience: 27258878 },
    fishing: { rank: 174737, level: 99, experience: 131605606 },
    firemaking: { rank: 406598, level: 69, experience: 7162753 },
    crafting: { rank: 484064, level: 65, experience: 4746375 },
    smithing: { rank: 481099, level: 68, experience: 6155160 },
    mining: { rank: 397512, level: 61, experience: 3272737 },
    herblore: { rank: 432198, level: 60, experience: 2754656 },
    agility: { rank: 381537, level: 61, experience: 3138007 },
    thieving: { rank: 388917, level: 69, experience: 7178440 },
    slayer: { rank: 350054, level: 60, experience: 2831891 },
    farming: { rank: 394855, level: 60, experience: 2881919 },
    runecrafting: { rank: 379164, level: 62, experience: 3448319 },
    hunter: { rank: 406448, level: 60, experience: 2744480 },
    construction: { rank: 383513, level: 62, experience: 3569058 },
    summoning: { rank: 401807, level: 61, experience: 3219611 },
    dungeoneering: { rank: 286981, level: 72, experience: 9033714 },
    divination: { rank: 0, level: 1, experience: 0 },
    invention: { rank: 0, level: 1, experience: 0 }
  },
  quests: { complete: 132, started: 18, not_started: 144 },
  activities: [
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '04-Feb-2020 01:13'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '24-Jan-2020 21:12'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '17-Jul-2019 07:04'
    },
    {
      title: 'Levelled up Herblore.',
      description: 'I levelled my  Herblore skill, I am now level 61.',
      date: '17-Jul-2019 07:04'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '26-Jun-2019 04:41'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '20-Jun-2019 01:10'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '05-Jun-2019 04:34'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '07-Feb-2019 04:27'
    },
    {
      title: 'Large amount of coins obtained.',
      description: 'I won a large amount of coins on Treasure Hunter!',
      date: '07-Feb-2019 04:24'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '30-Jan-2019 05:40'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '03-Jan-2019 01:47'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '26-Dec-2018 10:22'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '04-Dec-2018 04:14'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '28-Nov-2018 05:31'
    },
    {
      title: 'Levelled up Mining.',
      description: 'I levelled my  Mining skill, I am now level 68.',
      date: '08-Nov-2018 07:58'
    },
    {
      title: 'Visited my Clan Citadel.',
      description: 'I have visited my Clan Citadel this week.',
      date: '08-Nov-2018 07:43'
    },
    {
      title: 'Levelled up Summoning.',
      description: 'I levelled my  Summoning skill, I am now level 62.',
      date: '14-Oct-2014 12:51'
    },
    {
      title: 'Levelled up Hunter.',
      description: 'I levelled my  Hunter skill, I am now level 62.',
      date: '13-Oct-2014 00:30'
    },
    {
      title: 'Levelled up Crafting.',
      description: 'I levelled my  Crafting skill, I am now level 69.',
      date: '13-Oct-2014 00:29'
    },
    {
      title: 'Lucky Armadyl crossbow obtained.',
      description: 'I won a Lucky Armadyl crossbow on Treasure Hunter!',
      date: '10-Aug-2014 01:50'
    }
  ]
}
```
{% endtab %}
{% endtabs %}

### getQuests\(:playerName\) <a id="getquests"></a>

> Retrieve a user's quest list with completion status'

| Parameter | Type |
| :--- | :--- |
| `playerName` | `string` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
runemetrics.getQuests("Paqt").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  Quest {
    name: 'A Fairy Tale I - Growing Pains',
    status: 'COMPLETED',
    difficulty: 2,
    members: true,
    questPoints: 2,
    eligible: true
  },
  Quest {
    name: 'A Fairy Tale II - Cure a Queen',
    status: 'COMPLETED',
    difficulty: 2,
    members: true,
    questPoints: 2,
    eligible: true
  },
  Quest {
    name: "A Fairy Tale III - Battle at Ork's Rift",
    status: 'COMPLETED',
    difficulty: 2,
    members: true,
    questPoints: 2,
    eligible: true
  },
  Quest {
    name: "A Soul's Bane",
    status: 'COMPLETED',
    difficulty: 0,
    members: false,
    questPoints: 1,
    eligible: true
  },
  Quest {
    name: 'A Tail of Two Cats',
    status: 'COMPLETED',
    difficulty: 1,
    members: true,
    questPoints: 2,
    eligible: true
  },
  // ... 200+ more items
]
```
{% endtab %}
{% endtabs %}

