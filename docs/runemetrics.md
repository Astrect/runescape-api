# RuneMetrics

## Usage

```javascript
import { runemetrics } from "runescape-api"
```

## Functions

### getMonthlyXp\(:playerName, :skillId\) <a id="getmonthlyxp"></a>

> Retrieve a user's monthly experience gained in a given skill

```javascript
runemetrics.getMonthlyXp("Conundrum129", 19).then(data => {
    console.log(data)
})
```

### getProfile\(:playerName\) <a id="getprofile"></a>

> Retrieve a user's RuneMetrics profile name

```javascript
runemetrics.getProfile("Paqt").then(data => {
    console.log(data)
})
```

### getQuests\(:playerName\) <a id="getquests"></a>

> Retrieve a user's quest list with completion status'

```javascript
runemetrics.getQuests("Paqt").then(data => {
    console.log(data)
})
```

