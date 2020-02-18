# Bestiary

## Usage <a id="usage"></a>

```javascript
import { bestiary } from "runescape-api"
```

## Functions

### getAreas\(\)

```javascript
bestiary.getAreas().then(data => {
    console.log(data)
})
```

### getBeast\(:id\) <a id="getbeast-id"></a>

| Parameter | Type |
| :--- | :--- |
| `id` | `number` |

```javascript
bestiary.getBeast(16705).then(data => {
    console.log(data)
})
```

### getBeastsByArea\(:area\) <a id="getbeastsbyarea-area"></a>

```javascript

```

### getBeastsByTerms\(:term\) <a id="getbeastsbyterms-term"></a>

```javascript

```

### getBeastsByFirstLetter\(:letter\) <a id="getbeastsbyfirstletter-letter"></a>

```javascript

```

### getBeastsBySlayerCategory\(:categoryId\) <a id="getbeastsbyslayercategory-categoryid"></a>

```javascript

```

### getBeastsByWeakness\(:weaknessId\) <a id="getbeastsbyweakness-weaknessid"></a>

```javascript

```

### getSlayerCategories\(\) <a id="getslayercategories"></a>

```javascript

```

### getWeaknesses\(\) <a id="getweaknesses"></a>

```javascript

```

