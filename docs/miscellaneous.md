# Miscellaneous

## Usage

```javascript
import { miscellaneous } from "runescape-api"
```

## Functions

### getAvatar\(:playerName\) <a id="getavatar-playername"></a>

> Retrieve a player's avatar URL

```javascript
miscellaneous.getAvatar("Conundrum129").then(data => {
    console.log(data)
})
```

### getTotalUsers\(\) <a id="gettotalusers"></a>

> Retrieve the total registered RuneScape accounts

```javascript
miscellaneous.getTotalUsers().then(data => {
    console.log(data)
})
```



