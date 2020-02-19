# OSRS Grand Exchange

## Usage

```javascript
import { grandexchange } from "runescape-api/osrs"
```

## Functions

### getItem\(:id\) <a id="getitem-id"></a>

> Retrieve an item

| Parameter | Type |
| :--- | :--- |
| `id` | `number` |

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
  examine: 'A weapon from the abyss.',
  category: GrandExchangeCategory { id: -1, name: 'Default' },
  members: true,
  icons: {
    default: 'http://services.runescape.com/m=itemdb_oldschool/1581593391039_obj_sprite.gif?id=4151',
    large: 'http://services.runescape.com/m=itemdb_oldschool/1581593391039_obj_big.gif?id=4151'
  },
  trends: {
    current: { trend: 'neutral', price: '2.4m' },
    today: { trend: 'negative', price: '- 4,721' },
    day30: { trend: 'negative', change: '-10.0%' },
    day90: { trend: 'negative', change: '-2.0%' },
    day180: { trend: 'negative', change: '-4.0%' }
  }
}
```
{% endtab %}
{% endtabs %}

### getItemGraph\(:id\) <a id="getitemgraph-id"></a>

> Retrieve an item's price history graph data

| Parameter | Type |
| :--- | :--- |
| `id` | `number` |

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
    '1566172800000': 2549498,
    '1566259200000': 2544316,
    '1566345600000': 2544202,
    '1566432000000': 2543003,
    '1566518400000': 2539868,
    '1566604800000': 2537681,
    // ...
  },
  average: {
    '1566172800000': 2534034,
    '1566259200000': 2533446,
    '1566345600000': 2532924,
    '1566432000000': 2532410,
    '1566518400000': 2532022,
    '1566604800000': 2531650,
    // ...
  }
}
```
{% endtab %}
{% endtabs %}

