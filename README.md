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
import { bestiary } from "runescape-api"
```

#### getAreas()

List all bestiary areas

```js
bestiary.getAreas().then(data => {
  console.log(data)
})
```

#### getBeast(:id)

```js
bestiary.getBeast(16705).then(data => {
  console.log(data)
})
```

Retrieve a beast

| Parameter | Type     |
| --------- | -------- |
| `id`      | `number` |

#### getBeastsByArea(:area)

List all beasts within a given area

```js
bestiary.getBeastsByArea("Glarial's tomb").then(data => {
  console.log(data)
})
```

| Parameter | Type            |
| --------- | --------------- |
| `area`    | `string | Area` |

#### getBeastsByTerms(:term)

List all beasts by a given term

```js
bestiary.getBeastsByTerms("cow").then(data => {
  console.log(data)
})
```

| Parameter | Type     |
| --------- | -------- |
| `term`    | `string` |

#### getBeastsByFirstLetter(:letter)

List all beasts starting with a given letter

```js
bestiary.getBeastsByFirstLetter("c").then(data => {
  console.log(data)
})
```

| Parameter | Type     |
| --------- | -------- |
| `letter`  | `string` |

#### getBeastsBySlayerCategory(:categoryId)

List all beasts within a given slayer category

```js
bestiary.getBeastsBySlayerCategory(45).then(data => {
  console.log(data)
})
```

| Parameter    | Type     |
| ------------ | -------- |
| `categoryId` | `number` |

#### getBeastsByWeakness(:weaknessId)

List all beasts with a given weakness

```js
bestiary.getBeastsByWeakness(7).then(data => {
  console.log(data)
})
```

| Parameter    | Type     |
| ------------ | -------- |
| `weaknessId` | `number` |

#### getSlayerCategories()

List all slayer categories

```js
bestiary.getSlayerCategories().then(data => {
  console.log(data)
})
```

#### getWeaknesses()

List all weaknesses

```js
bestiary.getWeaknesses().then(data => {
  console.log(data)
})
```

### Clan

```js
import { clan } from "runescape-api"
```

#### getMembers(:clanName)

List all clan members for a given clan

```js
clan.getMembers("Royal 58").then(data => {
  console.log(data)
})
```

| Parameter  | Type     |
| ---------- | -------- |
| `clanName` | `string` |

### Grand Exchange

```js
import { grandexchange } from "runescape-api"
```

#### getCategories()

List all categories

```js
grandexchange.getCategories().then(data => {
  console.log(data)
})
```

#### getCategoryCounts(:categoryId)

List the number of items in a category, grouped by starting character

```js
grandexchange.getCategoryCounts(24).then(data => {
  console.log(data)
})
```

| Parameter    | Type     |
| ------------ | -------- |
| `categoryId` | `number` |

#### getCategoryCountsByPrefix(:categoryId, :prefix, :page?)

List the number of items in a category, starting with a specific character

```js
grandexchange.getCategoryCountsByPrefix(24, "b").then(data => {
  console.log(data)
})
```

| Parameter         | Type     |
| ----------------- | -------- |
| `categoryId`      | `number` |
| `prefix`          | `string` |
| `page` (optional) | `number` |

#### getItem(:itemId)

Retrieve an item

```js
grandexchange.getItem(4151).then(data => {
  console.log(data)
})
```

| Parameter | Type     |
| --------- | -------- |
| `itemId`  | `number` |

#### getItemGraph(:itemId)

Retrieve an item's price history graph data

```js
grandexchange.getItemGraph(4151).then(data => {
  console.log(data)
})
```

| Parameter | Type     |
| --------- | -------- |
| `itemId`  | `number` |

### Hiscores

```js
import { hiscores } from "runescape-api"
```

### Miscellaneous

```js
import { miscellaneous } from "runescape-api"
```

### RuneMetrics

```js
import { runemetrics } from "runescape-api"
```

## Oldschool Usage

### Grand Exchange

```js
import { grandexchange } from "runescape-api/osrs"
```

### Hiscores

```js
import { hiscores } from "runescape-api/osrs"
```
