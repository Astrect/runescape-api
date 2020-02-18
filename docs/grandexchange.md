# Grand Exchange

## Usage

```javascript
import { grandexchange } from "runescape-api"
```

## Functions

### getCategories\(\) <a id="getcategories"></a>

> List all categories

```javascript
grandexchange.getCategories().then(data => {
    console.log(data)
})
```

### getCategoryCounts\(:categoryId\) <a id="getcategorycounts-categoryid"></a>

```javascript
grandexchange.getCategoryCounts(24).then(data => {
    console.log(data)
})
```

### getCategoryCountsByPrefix\(:categoryId, :prefix, :page?\) <a id="getcategorycountsbyprefix-categoryid-prefix-page"></a>

```javascript
grandexchange.getCategoryCountsByPrefix(24, "b").then(data => {
    console.log(data)
})
```

### getItem\(:id\) <a id="getitem-id"></a>

> Retrieve an item

```javascript
grandexchange.getItem(4151).then(data => {
    console.log(data)
})
```

### getItemGraph\(:id\) <a id="getitemgraph-id"></a>

> Retrieve an item's price history graph data

```javascript
grandexchange.getItemGraph(4151).then(data => {
    console.log(data)
})
```

