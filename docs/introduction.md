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
```

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
```

```
{% endtab %}
{% endtabs %}

### getBeastsByArea\(:area\) <a id="getbeastsbyarea-area"></a>

> List all beasts within a given area

| Parameter | Type |
| :--- | :--- |
| `area` | `string` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
bestiary.getBeastsByArea("Glarial's tomb").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```

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
```

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
```

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
```

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
```

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
```

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
```

```
{% endtab %}
{% endtabs %}

