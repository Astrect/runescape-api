import * as bestiary from "./runescape/bestiary"
import * as clan from "./runescape/clan"
import * as grandexchange from "./runescape/grandexchange"
import * as hiscores from "./runescape/hiscores"
import * as runemetrics from "./runescape/runemetrics"

import * as oldschool from "./oldschool"

export { bestiary, clan, grandexchange, hiscores, runemetrics, oldschool }
export default {
  bestiary,
  clan,
  grandexchange,
  hiscores,
  runemetrics,
  oldschool,
}

const testFunction = async () => {
  const test = await bestiary.beastSearch("200-300", "levelRange")

  console.log(test)
}

testFunction()
