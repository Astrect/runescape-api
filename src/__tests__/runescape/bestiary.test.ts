import {
  Area,
  Beast,
  BeastSearchResult,
  SlayerCategory,
  Weakness,
} from "../../lib/RuneScape"
import { bestiary } from "../../runescape"

test("Bestiary: Areas are defined and contain an array of Area class instances", () => {
  return bestiary.getAreas().then(data => {
    expect(data).toBeDefined()

    data!.forEach(item => {
      expect(item).toBeInstanceOf(Area)
    })
  })
})

test("Bestiary: Successfully fetch a new Beast instance with number", () => {
  return bestiary.getBeast(16705).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Beast)
  })
})

test("Bestiary: Successfully fetch a new Beast instance with BeastSearchResult class", () => {
  const beast = new BeastSearchResult({
    value: 16705,
    label: "Exiled kalphite guardian",
  })

  return bestiary.getBeast(beast).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Beast)
  })
})

// test("Bestiary: Expect TypeError on Beast ID string prop", () => {
//   // @ts-ignore-next-line
//   return bestiary.getBeast("16705").then(data => {
//     expect(data).toBeInstanceOf(TypeError)
//   })
// })

test("Bestiary: Successfully Fetch Beasts by Area", () => {
  return bestiary.getBeastsByArea("Glarial's tomb").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})
test("Bestiary: Successfully fetch beasts by first letter", () => {
  return bestiary.getBeastsByFirstLetter("c").then(data => {
    expect(data).toBeDefined()
  })
})
test("Bestiary: Successfully fetch beasts by level range", () => {
  return bestiary.getBeastsByLevelRange(200, 300).then(data => {
    expect(data).toBeDefined()
  })
})
test("Bestiary: Successfully fetch beasts by slayer category", () => {
  const category = new SlayerCategory("Kurask")
  return bestiary.getBeastsBySlayerCategory(category).then(data => {
    expect(data).toBeDefined()
  })
})
test("Bestiary: Successfully fetch beasts by term", () => {
  return bestiary.getBeastsByTerms("cow").then(data => {
    expect(data).toBeDefined()
  })
})
test("Bestiary: Successfully fetch beasts by weakness", () => {
  const weakness = new Weakness("Crushing")
  return bestiary.getBeastsByWeakness(weakness).then(data => {
    expect(data).toBeDefined()
  })
})
test("Bestiary: Successfully fetch all slayer categories", () => {
  return bestiary.getSlayerCategories().then(data => {
    expect(data).toBeDefined()
  })
})
test("Bestiary: Successfully fetch all weaknesses", () => {
  return bestiary.getWeaknesses().then(data => {
    expect(data).toBeDefined()
  })
})
