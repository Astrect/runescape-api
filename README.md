# RuneScape API

[![Build Status](https://travis-ci.org/Joshua-F/runescape-api.svg?branch=master)](https://travis-ci.org/Joshua-F/runescape-api) [![Dependency Status](https://david-dm.org/Joshua-F/runescape-api.svg)](https://david-dm.org/Joshua-F/runescape-api)

## Introduction

`runescape-api` is an open-source wrapper, written in [Node.js][nodejs], that allows interaction with the various APIs available for the popular MMORPG [RuneScape][runescape].

## Usage

The implementation offers functionality to interact with the following:

* [Bestiary][bestiary]
* [Hiscores][hiscores]
* [Grand Exchange][ge]

The example below explains how to gain access to the `runescape-api` library and fetch a beasts information.

```javascript
var rsapi = require('runescape-api');

rsapi.rs.bestiary.beast(49).then(function(beast) {
    console.log(JSON.stringify(beast, null, 2));
}).catch(console.error);
```

Outputs:

```json
{
  "animations": {
    "death": 17347,
    "attack": 17348
  },
  "slayercat": "Hellhounds",
  "xp": "344.4",
  "size": 2,
  "lifepoints": 3300,
  "weakness": "Slashing",
  "id": 49,
  "poisonous": false,
  "magic": 1,
  "attackable": true,
  "level": 92,
  "defence": 66,
  "description": "Hello, nice doggy...",
  "name": "Hellhound",
  "ranged": 1,
  "areas": [
    "Ardougne underground",
    "RuneScape Surface",
    "Forinthry Dungeon",
    "Taverley Dungeon",
    "Ancient cavern"
  ],
  "attack": 66,
  "aggressive": false,
  "members": false
}

```

More examples can be found in the [examples][examples] folder.

## License
`runescape-api` is under the [MIT][mit] license, see the `LICENSE` file for the copyright information and licensing terms.

[nodejs]: https://nodejs.org
[runescape]: http://www.runescape.com
[bestiary]: http://services.runescape.com/m=rswiki/en/Bestiary_APIs
[hiscores]: http://services.runescape.com/m=rswiki/en/Hiscores_APIs
[ge]: http://services.runescape.com/m=rswiki/en/Grand_Exchange_APIs
[examples]: https://github.com/Joshua-F/runescape-api/tree/master/examples
[mit]: http://opensource.org/licenses/MIT
