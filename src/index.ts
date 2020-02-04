import * as bestiary from "./runescape/bestiary"
import * as clan from "./runescape/clan"
import * as grandexchange from "./runescape/grandexchange"
import * as hiscores from "./runescape/hiscores"
import * as runemetrics from "./runescape/runemetrics"

import * as oldschool from "./osrs"

export { bestiary, clan, grandexchange, hiscores, runemetrics, oldschool }
export default {
  bestiary,
  clan,
  grandexchange,
  hiscores,
  runemetrics,
  oldschool,
}

// Weaknesses
// bestiary.getWeaknesses().then(data => console.log(data))

// Nex
bestiary.getBeastById(18880).then(data => console.log(data))
