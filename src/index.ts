import {
  Weakness,
  SlayerCategory,
  GrandExchangeCategory,
  Skill,
} from "./lib/RuneScape"
import * as oldschool from "./osrs"
import * as bestiary from "./runescape/bestiary"
import * as clan from "./runescape/clan"
import * as grandexchange from "./runescape/grandexchange"
import * as hiscores from "./runescape/hiscores"
import * as miscellaneous from "./runescape/miscellaneous"
import * as runemetrics from "./runescape/runemetrics"

export {
  bestiary,
  clan,
  grandexchange,
  hiscores,
  miscellaneous,
  runemetrics,
  oldschool,
}
export default {
  bestiary,
  clan,
  grandexchange,
  hiscores,
  miscellaneous,
  runemetrics,
  oldschool,
}

const demo = (async () => {
  // const data = await bestiary.getAreas()
  // const data = await bestiary.getSlayerCategories()
  // const data = await bestiary.getWeaknesses()
  // const data = await bestiary.getBeast(16705)
  // const data = await bestiary.getBeastsByArea("Glarial's tomb")
  // const data = await bestiary.getBeastsByTerms("cow")
  // const data = await bestiary.getBeastsByFirstLetter("c")
  // const data = await bestiary.getBeastsBySlayerCategory(new SlayerCategory("Kurask"))
  // const data = await bestiary.getBeastsByWeakness(new Weakness("Crushing" || 7))

  // const data = await miscellaneous.getAvatar("Paqt")
  // const data = await miscellaneous.getTotalUsers()

  // const data = await clan.getMembers("Royal 58")

  // const data = await grandexchange.getCategories()
  // const data = await grandexchange.getCategoryItemsCount(new GrandExchangeCategory("Arrows"))

  // const data = await hiscores.getPlayer("Paqt")
  // const data = await hiscores.getPlayer("Iron Soren", { gamemode: "ironman" })
  // const data = await hiscores.getPlayer("J a me s", { gamemode: "hardcore" })

  // const data = await runemetrics.getProfile("Paqt")
  // const data = await runemetrics.getMonthlyXp("Conundrum129", new Skill("woodcutting"))
  const data = await runemetrics.getQuests("Paqt")

  console.log(data)
})()
// demo()

// Areas
// bestiary.getAreas().then(d => console.log(d))

// Beast
// bestiary.getBeastById(16705).then(d => console.log(d))

// Beast Search
// bestiary.getBeastsBySearch("cow").then(d => console.log(d))
// bestiary.getBeastsBySearch("A", { method: "area" }).then(d => console.log(d))

// bestiary.getBeastsBySearch({ search: "A", method: "firstLetter" }).then(d => console.log(d))

// bestiary
//   .getBeastsBySearch("A", { method: "levelRange" })
//   .then(d => console.log(d))

// bestiary
//   .getBeastsBySearch("A", { method: "slayerCategory" })
//   .then(d => console.log(d))

// bestiary.getBeastsBySearch("man cow", { method: "terms" }).then(d => console.log(d?.length))

// bestiary
//   .getBeastsBySearch("2", { method: "weakness" })
//   .then(d => console.log(d.length))

// Slayer Categories
// bestiary.getSlayerCategories().then(d => console.log(d))

// Weaknesses
// bestiary.getWeaknesses().then(d => console.log(d))
