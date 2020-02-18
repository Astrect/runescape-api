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
bestiary.getBeastsByArea("Glarial's tomb").then(data => {
    console.log(data)
})
```

### getBeastsByTerms\(:term\) <a id="getbeastsbyterms-term"></a>

> List all beasts by a given term

```javascript
bestiary.getBeastsByTerms("cow").then(data => {
    console.log(data)
})
```

### getBeastsByFirstLetter\(:letter\) <a id="getbeastsbyfirstletter-letter"></a>

> List all beasts starting with a given letter

```javascript
bestiary.getBeastsByFirstLetter("c").then(data => {
    console.log(data)
})
```

### getBeastsBySlayerCategory\(:categoryId\) <a id="getbeastsbyslayercategory-categoryid"></a>

> List all beasts within a given slayer category

```javascript
bestiary.getBeastsBySlayerCategory(45).then(data => {
    console.log(data)
})
```

### getBeastsByWeakness\(:weaknessId\) <a id="getbeastsbyweakness-weaknessid"></a>

> List all beasts with a given weakness

```javascript
bestiary.getBeastsByWeakness(7).then(data => {
    console.log(data)
})
```

### getSlayerCategories\(\) <a id="getslayercategories"></a>

> List all slayer categories

```javascript
bestiary.getSlayerCategories().then(data => {
    console.log(data)
})
```

### getWeaknesses\(\) <a id="getweaknesses"></a>

> List all weaknesses

```javascript
bestiary.getWeaknesses().then(data => {
    console.log(data)
})
```

