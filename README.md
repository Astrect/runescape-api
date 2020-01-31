<p align="center">
  <img alt="RuneScape" src="https://www.runescape.com/img/responsive/common/logos/runescape@2x.png" height="60" />
</p>
<h1 align="center">
  (Unofficial) RuneScape API Client
</h1>

<p align="center">
<a href="https://github.com/pqt/runescape-api/actions?workflow=status">
    <img src="https://github.com/pqt/runescape-api/workflows/status/badge.svg" alt="Current Github Action build status." />
  </a>
  <a href="https://www.npmjs.org/package/runescape-api">
    <img src="https://img.shields.io/npm/v/runescape-api.svg" alt="Current npm package version." />
  </a>
  <a href="https://github.com/pqt/runescape-api/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="The runeScape-api package is released under the MIT license." />
  </a>
</p>

## Installation

```bash
npm install runescape-api
# OR
yarn add runescape-api
```

## Usage

### RuneScape

<details>
  <summary>Hiscores</summary>

```js
import { getPlayer } from "runescape-api"

getPlayer("Paqt")
```

</details>
