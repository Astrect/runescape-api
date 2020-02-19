# Bestiary

## Usage <a id="usage"></a>

```javascript
import { bestiary } from "runescape-api"
```

## Functions

### getAreas\(\)

> List all bestiary areas

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getAreas().then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
    Area { name: 'Agility Pyramid' },
    Area { name: 'Agility course pit' },
    Area { name: 'Air Rune Temple' },
    Area { name: 'Aminishi Dungeon' },
    Area { name: 'Ancient cavern' },
    Area { name: 'Ape Atoll' },
    Area { name: 'Ape Atoll tunnels' },
    Area { name: 'Ardougne underground' },
    Area { name: "Armadyl's Citadel" },
    Area { name: 'Arposandran underground' },
    Area { name: 'Arzinian Gold Mine' },
    Area { name: 'Ascension Dungeon' },
    Area { name: 'Asgarnian Ice Dungeon' },
    Area { name: 'Ashdale Caves' },
    Area { name: 'Assault course' },
    Area { name: "Baba Yaga's House" },
    // ... 200+ more items
]
```
{% endtab %}
{% endtabs %}

### getBeast\(:id\) <a id="getbeast-id"></a>

> Retrieve a beast

| Parameter | Type |
| :--- | :--- |
| `id` | `number` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeast(16705).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
Beast {
  id: 16705,
  name: 'Exiled kalphite guardian',
  examine: 'A dauntless guardian of the Exiled Kalphite Queen.',
  members: false,
  level: 98,
  attack: 70,
  defence: 70,
  magic: 1,
  ranged: 1,
  lifepoints: 7000,
  xp: '628.6',
  areas: [ 'Exiled Kalphite Hive' ],
  animations: { death: 19470, attack: 19473 },
  size: 4,
  attackable: true,
  aggressive: true,
  poisonous: true,
  weakness: Weakness { id: 2, name: 'Water' }
}
```
{% endtab %}
{% endtabs %}

### getBeastsByArea\(:area\) <a id="getbeastsbyarea-area"></a>

> List all beasts within a given area

| Parameter | Type |
| :--- | :--- |
| `area` | `string` \| `Area` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeastsByArea("Glarial's tomb").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  BeastSearchResult { id: 153, name: 'Butterfly' },
  BeastSearchResult { id: 1681, name: 'Moss giant (61)' },
  BeastSearchResult { id: 90, name: 'Skeleton (15)' },
  BeastSearchResult { id: 92, name: 'Skeleton (32)' },
  BeastSearchResult { id: 5337, name: 'Skeleton (32)' },
  BeastSearchResult { id: 5339, name: 'Skeleton (32)' },
  BeastSearchResult { id: 5340, name: 'Skeleton (32)' },
  BeastSearchResult { id: 73, name: 'Zombie (12)' },
  BeastSearchResult { id: 75, name: 'Zombie (29)' },
  BeastSearchResult { id: 5296, name: 'Zombie (12)' },
  BeastSearchResult { id: 5314, name: 'Zombie (29)' },
  BeastSearchResult { id: 5315, name: 'Zombie (29)' }
]
```
{% endtab %}
{% endtabs %}

### getBeastsByTerms\(:term\) <a id="getbeastsbyterms-term"></a>

> List all beasts by a given term

| Parameter | Type |
| :--- | :--- |
| `term` | `string` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeastsByTerms("cow").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  BeastSearchResult { id: 81, name: 'Cow (4)' },
  BeastSearchResult { id: 397, name: 'Cow (4)' },
  BeastSearchResult { id: 3309, name: 'Cow (1)' },
  BeastSearchResult { id: 14999, name: 'Cow (1)' },
  BeastSearchResult { id: 20969, name: 'Cow (4)' },
  BeastSearchResult { id: 20970, name: 'Cow (4)' },
  BeastSearchResult { id: 20971, name: 'Cow (4)' },
  BeastSearchResult { id: 20974, name: 'Cow (4)' },
  BeastSearchResult { id: 1886, name: 'Cowardly Bandit' },
  BeastSearchResult { id: 2310, name: 'Cow calf (1)' },
  BeastSearchResult { id: 5097, name: 'Coward in armour (82)' },
  BeastSearchResult { id: 6049, name: 'Coward with bow (105)' },
  BeastSearchResult { id: 20978, name: 'Cow calf (1)' },
  BeastSearchResult { id: 20979, name: 'Cow calf (1)' },
  BeastSearchResult { id: 1691, name: 'Undead cow (4)' },
  BeastSearchResult { id: 1998, name: 'Plague cow' },
  BeastSearchResult { id: 1999, name: 'Plague cow' },
  BeastSearchResult { id: 5603, name: 'Unicow (57)' },
  BeastSearchResult { id: 18597, name: 'Zombie cow (1)' },
  BeastSearchResult { id: 20928, name: 'Zombie cow (1)' },
  BeastSearchResult { id: 21497, name: 'Super Cow (5)' },
  BeastSearchResult { id: 22418, name: 'Dairy cow' },
  BeastSearchResult { id: 5986, name: 'Armoured cow thing (62)' },
  BeastSearchResult { id: 6048, name: 'Armoured cow thing (62)' }
]
```
{% endtab %}
{% endtabs %}

### getBeastsByFirstLetter\(:letter\) <a id="getbeastsbyfirstletter-letter"></a>

> List all beasts starting with a given letter

| Parameter | Type |
| :--- | :--- |
| `letter` | `string` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeastsByFirstLetter("c").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  { label: 'Cabbage', value: 22836 },
  { label: 'Cabbage archer (0)', value: 21455 },
  { label: 'Cabbagemancer (105)', value: 25157 },
  { label: 'Cabbageomancer (0)', value: 21456 },
  { label: 'Cabin boy', value: 4539 },
  { label: 'Cadarn herald', value: 19857 },
  // ... 200+ more items
]
```
{% endtab %}
{% endtabs %}

### getBeastsBySlayerCategory\(:categoryId\) <a id="getbeastsbyslayercategory-categoryid"></a>

> List all beasts within a given slayer category

| Parameter | Type |
| :--- | :--- |
| `categoryId` | `number` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeastsBySlayerCategory(45).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  BeastSearchResult { id: 1608, name: 'Kurask (78)' },
  BeastSearchResult { id: 7805, name: 'Kurask minion (63)' },
  BeastSearchResult { id: 7797, name: 'Kurask overlord (96)' }
]
```
{% endtab %}
{% endtabs %}

### getBeastsByWeakness\(:weaknessId\) <a id="getbeastsbyweakness-weaknessid"></a>

> List all beasts with a given weakness

| Parameter | Type |
| :--- | :--- |
| `weaknessId` | `number` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeastsByWeakness(7).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  BeastSearchResult { id: 2263, name: 'Abyssal leech (72)' },
  BeastSearchResult { id: 4283, name: 'Animated Adamant Armour (67)' },
  BeastSearchResult { id: 4281, name: 'Animated Black Armour (46)' },
  BeastSearchResult { id: 4278, name: 'Animated Bronze Armour (11)' },
  BeastSearchResult { id: 4279, name: 'Animated Iron Armour (25)' },
  BeastSearchResult { id: 4282, name: 'Animated Mithril Armour (53)' },
  BeastSearchResult { id: 4284, name: 'Animated Rune Armour (81)' },
  BeastSearchResult { id: 4280, name: 'Animated Steel Armour (39)' },
  // ... 100+ more items
]
```
{% endtab %}
{% endtabs %}

### getSlayerCategories\(\) <a id="getslayercategories"></a>

> List all slayer categories

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getSlayerCategories().then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  SlayerCategory { id: 41, name: 'Aberrant spectres' },
  SlayerCategory { id: 42, name: 'Abyssal demons' },
  SlayerCategory { id: 133, name: 'Acheron mammoths' },
  SlayerCategory { id: 127, name: 'Adamant dragons' },
  SlayerCategory { id: 117, name: 'Airut' },
  SlayerCategory { id: 79, name: 'Ankou' },
  // ... 100+ more items
]
```
{% endtab %}
{% endtabs %}

### getWeaknesses\(\) <a id="getweaknesses"></a>

> List all weaknesses

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getWeaknesses().then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  Weakness { id: 1, name: 'Air' },
  Weakness { id: 8, name: 'Arrow' },
  Weakness { id: 9, name: 'Bolt' },
  Weakness { id: 7, name: 'Crushing' },
  Weakness { id: 3, name: 'Earth' },
  Weakness { id: 4, name: 'Fire' },
  Weakness { id: 0, name: 'None' },
  Weakness { id: 6, name: 'Slashing' },
  Weakness { id: 5, name: 'Stabbing' },
  Weakness { id: 10, name: 'Thrown' },
  Weakness { id: 2, name: 'Water' }
]
```
{% endtab %}
{% endtabs %}

