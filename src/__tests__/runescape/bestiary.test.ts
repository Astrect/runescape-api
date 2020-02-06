import {
  Area,
  Beast,
  BeastSearchResult,
  SlayerCategory,
  Weakness,
} from "../../lib/RuneScape"
import { bestiary } from "../../runescape"

test("Bestiary areas are defined and contain an array of Area instances", async () => {
  return bestiary.getAreas().then(data => {
    expect(data).toBeDefined()

    data.forEach(item => {
      expect(item).toBeInstanceOf(Area)
    })
  })
})

test("Fetch all slayer categories", async () => {
  return bestiary.getSlayerCategories().then(data => {
    expect(data).toBeDefined()

    data.forEach(item => {
      expect(item).toBeInstanceOf(SlayerCategory)
    })
  })
})

test("Fetch all weaknesses", async () => {
  return bestiary.getWeaknesses().then(data => {
    expect(data).toBeDefined()

    data.forEach(item => {
      expect(item).toBeInstanceOf(Weakness)
    })
  })
})

test("Fetch a new Beast instance by id (number)", async () => {
  return bestiary.getBeast(16705).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Beast)
  })
})

test("Fetch a new Beast instance by BeastSearchResult instance", async () => {
  const beast = new BeastSearchResult({
    value: 16705,
    label: "Exiled kalphite guardian",
  })

  return bestiary.getBeast(beast).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Beast)
  })
})

test("Fetch beasts by area name (string)", async () => {
  return bestiary.getBeastsByArea("Glarial's tomb").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})

test("Fetch beasts by Area instance", async () => {
  const area = new Area("Glarial's tomb")
  return bestiary.getBeastsByArea(area).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})

test("Fetch beasts by first letter", async () => {
  return bestiary.getBeastsByFirstLetter("c").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})

test("Fetch beasts by level range", async () => {
  return bestiary.getBeastsByLevelRange(200, 300).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})

test("Fetch beasts by slayer category id (number)", async () => {
  return bestiary.getBeastsBySlayerCategory(45).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})

test("Fetch beasts by SlayerCategory instance", async () => {
  const category = new SlayerCategory("Kurask")
  return bestiary.getBeastsBySlayerCategory(category).then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Array)

    data.forEach(item => {
      expect(item).toBeInstanceOf(BeastSearchResult)
    })
  })
})

test("Fetch beasts by term (string)", async () => {
  return bestiary.getBeastsByTerms("cow").then(data => {
    expect(data).toBeDefined()
  })
})

test("Fetch beasts by weakness id (number)", async () => {
  const weakness = new Weakness("Crushing")
  return bestiary.getBeastsByWeakness(weakness).then(data => {
    expect(data).toBeDefined()
  })
})

test("Fetch beasts by Weakness instance", async () => {
  const weakness = new Weakness("Crushing")
  return bestiary.getBeastsByWeakness(weakness).then(data => {
    expect(data).toBeDefined()
  })
})
