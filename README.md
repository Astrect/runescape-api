# RuneScape API SDK

`runescape-api` is a Node.js library for the unofficial API endpoints of the popular MMORPG game RuneScape and Oldschool RuneScape.

> Requests are made using the [Got](https://github.com/sindresorhus/got) library and will not work in a browser. This is a known limitation. The APIs Jagex expose do not allow Cross-Origin Resource Sharing (CORS) so browsers have their requests blocked, backend processes such an Node APIs do not experience these restrictions. You'd need to use a server-side request even if this package supported browser requests.

## Installation

```
npm install runescape-api
# OR
yarn add runescape-api
```

## RuneScape Usage

### Bestiary

```js
import { bestiary } from 'runescape-api';
```

#### getAreas()

List all bestiary areas

```js
bestiary.getAreas().then((data) => {
  console.log(data);
});
```

#### getBeast(:id)

Retrieve a beast

| Parameter | Type     |
| --------- | -------- |
| `id`      | `number` |

```js
bestiary.getBeast(16705).then((data) => {
  console.log(data);
});
```

#### getBeastsByArea(:area)

List all beasts within a given area

#### getBeastsByTerms(:term)

List all beasts by a given term

#### getBeastsByFirstLetter(:letter)

List all beasts starting with a given letter

#### getBeastsBySlayerCategory(:categoryId)\*\*

st all beasts within a given slayer category

#### getBeastsByWeakness(:weaknessId)

List all beasts with a given weakness

#### getSlayerCategories()

List all slayer categories

#### getWeaknesses()

List all weaknesses

### Clan

```js
import { clan } from 'runescape-api';
```

### Grand Exchange

```js
import { grandexchange } from 'runescape-api';
```

### Hiscores

```js
import { hiscores } from 'runescape-api';
```

### Miscellaneous

```js
import { miscellaneous } from 'runescape-api';
```

### RuneMetrics

```js
import { runemetrics } from 'runescape-api';
```

## Oldschool Usage

### Grand Exchange

```js
import { grandexchange } from 'runescape-api/osrs';
```

### Hiscores

```js
import { hiscores } from 'runescape-api/osrs';
```
