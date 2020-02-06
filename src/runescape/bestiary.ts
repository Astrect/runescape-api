import got from "got"
import { bestiary } from "../configs/runescape"
import {
  Area,
  Beast,
  BeastSearchResult,
  SlayerCategory,
  Weakness,
} from "../lib/RuneScape"
import { Jagex, Letter } from "../types"

export const getAreas = async () => {
  try {
    const areas = await got(bestiary.endpoints.areas).json<
      Jagex.Bestiary.Areas
    >()

    return areas.map(area => new Area(area))
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeast = async (search: number | BeastSearchResult) => {
  if (
    typeof search !== "number" &&
    search.constructor.name !== "BeastSearchResult"
  ) {
    throw new TypeError(
      "Beast ID parameter must be a number or BeastSearchResult instance"
    )
  }

  let searchId: number | undefined = undefined

  if (typeof search === "number") {
    searchId = search
  } else {
    searchId = search.id
  }

  try {
    const beast = await got(bestiary.endpoints.beast, {
      searchParams: {
        beastid: searchId,
      },
    }).json<Jagex.Bestiary.Beast>()

    return new Beast(beast)
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeastsByArea = async (search: string | Area) => {
  if (typeof search !== "string" && search.constructor.name !== "Area") {
    throw new TypeError("Search parameter must be a string or Area instance")
  }

  let searchId: string | undefined = undefined

  if (typeof search === "string") {
    searchId = search
  } else {
    searchId = search.name
  }
  try {
    const beasts = await got(bestiary.endpoints.beastArea, {
      searchParams: {
        identifier: searchId,
      },
    }).json<Jagex.Bestiary.BeastBySearch[]>()

    // TODO: the empty response for this endpoint is [ 'none' ]. Remove it for an empty array

    return beasts.map(beast => new BeastSearchResult(beast))
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeastsByFirstLetter = async (search: Letter) => {
  if (typeof search !== "string") {
    throw new TypeError("Search parameter must be a string")
  }

  if (search.length > 1) {
    throw new Error("Search query must be a single letter")
  }

  try {
    const beasts = await got(bestiary.endpoints.beastLetter, {
      searchParams: {
        letter: search.toUpperCase(),
      },
    }).json<Jagex.Bestiary.BeastBySearch[]>()

    // TODO: either trim, or clean up the "NPC" objects in the results

    return beasts.map(beast => new BeastSearchResult(beast))
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeastsByLevelRange = async (min: number, max: number) => {
  if (typeof min !== "number") {
    throw new TypeError("Minimum level parameter must be a number")
  }

  if (typeof max !== "number") {
    throw new TypeError("Maximum level parameter must be a number")
  }

  if (min > max) {
    throw new Error(
      "Maximum level parameter must be greater or equal to the minumum expected level"
    )
  }

  try {
    const beasts = await got(bestiary.endpoints.beastLevel, {
      searchParams: {
        identifier: `${min}-${max}`,
      },
    }).json<Jagex.Bestiary.BeastBySearch[]>()

    return beasts.map(beast => new BeastSearchResult(beast))
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeastsBySlayerCategory = async (
  search: number | SlayerCategory
) => {
  if (
    typeof search !== "number" &&
    search.constructor.name !== "SlayerCategory"
  ) {
    throw new TypeError(
      "Search parameter must be a number or SlayerCategory instance"
    )
  }

  let searchId: number | undefined = undefined

  if (typeof search === "number") {
    searchId = search
  } else {
    searchId = search.id
  }

  try {
    const beasts = await got(bestiary.endpoints.beastSlayer, {
      searchParams: {
        identifier: searchId,
      },
    }).json<Jagex.Bestiary.BeastBySearch[]>()

    return beasts.map(beast => new BeastSearchResult(beast))
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeastsByTerms = async (search: string) => {
  if (typeof search !== "string") {
    throw new TypeError("Search parameter must be a string")
  }

  try {
    const beasts = await got(bestiary.endpoints.beastTerm, {
      searchParams: {
        term: search,
      },
    }).json<Jagex.Bestiary.BeastBySearch[]>()

    return beasts.map(beast => new BeastSearchResult(beast))
  } catch (error) {
    throw new Error(error)
  }
}

export const getBeastsByWeakness = async (search: number | Weakness) => {
  if (typeof search !== "number" && search.constructor.name !== "Weakness") {
    throw new TypeError(
      "Search parameter must be a number or Weakness instance"
    )
  }

  let searchId: number | undefined = undefined

  if (typeof search === "number") {
    searchId = search
  } else {
    searchId = search.id
  }

  try {
    const beasts = await got(bestiary.endpoints.beastWeakness, {
      searchParams: {
        identifier: searchId,
      },
    }).json<Jagex.Bestiary.BeastBySearch[]>()

    return beasts.map(beast => new BeastSearchResult(beast))
  } catch (error) {
    throw new Error(error)
  }
}

export const getSlayerCategories = async () => {
  try {
    const categories = await got(bestiary.endpoints.slayerCategories).json<
      Jagex.Bestiary.SlayerCategories
    >()

    return Object.values(categories).map(
      category => new SlayerCategory(category)
    )
  } catch (error) {
    throw new Error(error)
  }
}

export const getWeaknesses = async () => {
  try {
    const weaknesses = await got(bestiary.endpoints.weaknesses).json<
      Jagex.Bestiary.Weaknesses
    >()

    return Object.values(weaknesses).map(i => new Weakness(i))
  } catch (error) {
    throw new Error(error)
  }
}
