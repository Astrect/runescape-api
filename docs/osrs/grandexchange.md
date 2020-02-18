# OSRS Grand Exchange

## Usage

```javascript
import { grandexchange } from "runescape-api/osrs"
```

## Functions

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

