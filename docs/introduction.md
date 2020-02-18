# Bestiary

## Usage <a id="usage"></a>

```javascript
import { bestiary } from "runescape-api"
```

## Functions

### getAreas\(\)

> List all bestiary areas

```javascript
bestiary.getAreas().then(data => {
    console.log(data)
})
```

### getBeast\(:id\) <a id="getbeast-id"></a>

> Retrieve a beast

| Parameter | Type |
| :--- | :--- |
| `id` | `number` |

```javascript
bestiary.getBeast(16705).then(data => {
    console.log(data)
})
```

### getBeastsByArea\(:area\) <a id="getbeastsbyarea-area"></a>

> List all beasts within a given area

```javascript

```

### getBeastsByTerms\(:term\) <a id="getbeastsbyterms-term"></a>

> List all beasts by a given term

```javascript

```

### getBeastsByFirstLetter\(:letter\) <a id="getbeastsbyfirstletter-letter"></a>

> List all beasts starting with a given letter

```javascript

```

### getBeastsBySlayerCategory\(:categoryId\) <a id="getbeastsbyslayercategory-categoryid"></a>

> List all beasts within a given slayer category

```javascript

```

### getBeastsByWeakness\(:weaknessId\) <a id="getbeastsbyweakness-weaknessid"></a>

> List all beasts with a given weakness

```javascript

```

### getSlayerCategories\(\) <a id="getslayercategories"></a>

> List all slayer categories

```javascript

```

### getWeaknesses\(\) <a id="getweaknesses"></a>

> List all weaknesses

```javascript

```

