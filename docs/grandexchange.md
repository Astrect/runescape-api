# Grand Exchange

## Usage

```javascript
import { grandexchange } from "runescape-api"
```

## Functions

### getCategories\(\) <a id="getcategories"></a>

> List all categories

{% tabs %}
{% tab title="JavaScript" %}
```javascript
grandexchange.getCategories().then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  GrandExchangeCategory { id: 0, name: 'Miscellaneous' },
  GrandExchangeCategory { id: 1, name: 'Ammo' },
  GrandExchangeCategory { id: 2, name: 'Arrows' },
  GrandExchangeCategory { id: 3, name: 'Bolts' },
  GrandExchangeCategory { id: 4, name: 'Construction materials' },
  GrandExchangeCategory { id: 5, name: 'Construction projects' },
  GrandExchangeCategory { id: 6, name: 'Cooking ingredients' },
  GrandExchangeCategory { id: 7, name: 'Costumes' },
  GrandExchangeCategory { id: 8, name: 'Crafting materials' },
  GrandExchangeCategory { id: 9, name: 'Familiars' },
  GrandExchangeCategory { id: 10, name: 'Farming produce' },
  GrandExchangeCategory { id: 11, name: 'Fletching materials' },
  GrandExchangeCategory { id: 12, name: 'Food and drink' },
  GrandExchangeCategory { id: 13, name: 'Herblore materials' },
  GrandExchangeCategory { id: 14, name: 'Hunting equipment' },
  GrandExchangeCategory { id: 15, name: 'Hunting produce' },
  GrandExchangeCategory { id: 16, name: 'Jewellery' },
  GrandExchangeCategory { id: 17, name: 'Mage armour' },
  GrandExchangeCategory { id: 18, name: 'Mage weapons' },
  GrandExchangeCategory { id: 19, name: 'Melee armour - low level' },
  GrandExchangeCategory { id: 20, name: 'Melee armour - mid level' },
  GrandExchangeCategory { id: 21, name: 'Melee armour - high level' },
  GrandExchangeCategory { id: 22, name: 'Melee weapons - low level' },
  GrandExchangeCategory { id: 23, name: 'Melee weapons - mid level' },
  GrandExchangeCategory { id: 24, name: 'Melee weapons - high level' },
  GrandExchangeCategory { id: 25, name: 'Mining and smithing' },
  GrandExchangeCategory { id: 26, name: 'Potions' },
  GrandExchangeCategory { id: 27, name: 'Prayer armour' },
  GrandExchangeCategory { id: 28, name: 'Prayer materials' },
  GrandExchangeCategory { id: 29, name: 'Range armour' },
  GrandExchangeCategory { id: 30, name: 'Range weapons' },
  GrandExchangeCategory { id: 31, name: 'Runecrafting' },
  GrandExchangeCategory { id: 32, name: 'Runes, Spells and Teleports' },
  GrandExchangeCategory { id: 33, name: 'Seeds' },
  GrandExchangeCategory { id: 34, name: 'Summoning scrolls' },
  GrandExchangeCategory { id: 35, name: 'Tools and containers' },
  GrandExchangeCategory { id: 36, name: 'Woodcutting product' },
  GrandExchangeCategory { id: 37, name: 'Pocket items' }
]
```
{% endtab %}
{% endtabs %}

### getCategoryCounts\(:categoryId\) <a id="getcategorycounts-categoryid"></a>

{% tabs %}
{% tab title="JavaScript" %}
```javascript
grandexchange.getCategoryCounts(24).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  { letter: '#', items: 0 },
  { letter: 'a', items: 7 },
  { letter: 'b', items: 26 },
  { letter: 'c', items: 0 },
  { letter: 'd', items: 9 },
  { letter: 'e', items: 18 },
  { letter: 'f', items: 0 },
  { letter: 'g', items: 6 },
  { letter: 'h', items: 0 },
  { letter: 'i', items: 0 },
  { letter: 'j', items: 0 },
  { letter: 'k', items: 2 },
  { letter: 'l', items: 1 },
  { letter: 'm', items: 1 },
  { letter: 'n', items: 16 },
  { letter: 'o', items: 3 },
  { letter: 'p', items: 0 },
  { letter: 'q', items: 0 },
  { letter: 'r', items: 3 },
  { letter: 's', items: 5 },
  { letter: 't', items: 3 },
  { letter: 'u', items: 0 },
  { letter: 'v', items: 4 },
  { letter: 'w', items: 4 },
  { letter: 'x', items: 0 },
  { letter: 'y', items: 0 },
  { letter: 'z', items: 4 }
]
```
{% endtab %}
{% endtabs %}

### getCategoryCountsByPrefix\(:categoryId, :prefix, :page?\) <a id="getcategorycountsbyprefix-categoryid-prefix-page"></a>

{% tabs %}
{% tab title="JavaScript" %}
```javascript
grandexchange.getCategoryCountsByPrefix(24, "b").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### getItem\(:id\) <a id="getitem-id"></a>

> Retrieve an item

{% tabs %}
{% tab title="JavaScript" %}
```javascript
grandexchange.getItem(4151).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
Item {
  id: 4151,
  examine: 'A weapon from the Abyss.',
  category: GrandExchangeCategory { id: 24, name: 'Melee weapons - high level' },
  members: true,
  icons: {
    default: 'http://services.runescape.com/m=itemdb_rs/1581332634573_obj_sprite.gif?id=4151',
    large: 'http://services.runescape.com/m=itemdb_rs/1581332634573_obj_big.gif?id=4151'
  },
  trends: {
    current: { trend: 'neutral', price: '70.5k' },
    today: { trend: 'negative', price: '- 248' },
    day30: { trend: 'negative', change: '-0.0%' },
    day90: { trend: 'positive', change: '+0.0%' },
    day180: { trend: 'negative', change: '-0.0%' }
  }
}
```
{% endtab %}
{% endtabs %}

### getItemGraph\(:id\) <a id="getitemgraph-id"></a>

> Retrieve an item's price history graph data

{% tabs %}
{% tab title="JavaScript" %}
```javascript
grandexchange.getItemGraph(4151).then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
ItemGraph {
  id: 4151,
  daily: {
    '1565913600000': 70984,
    '1566000000000': 70741,
    '1566086400000': 70681,
    '1566172800000': 70299,
    // ...
  },
  average: {
    '1565913600000': 70923,
    '1566000000000': 70895,
    '1566086400000': 70874,
    '1566172800000': 70841,
    '1566259200000': 70833,
    // ...
  }
}
```
{% endtab %}
{% endtabs %}

