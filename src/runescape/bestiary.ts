import got from "got"
import { runescape as RSConfigs } from "../configs"

type SlayerBeastSearchMethods =
  | "terms"
  | "firstLetter"
  | "area"
  | "slayerCategory"
  | "weakness"
  | "levelRange"

// Bestiary
export const areas = async () => {
  try {
    return await got(RSConfigs.bestiary.endpoints.areas).json()
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
export const beast = async (beastid: number) => {
  try {
    return await got(RSConfigs.bestiary.endpoints.beast, {
      searchParams: {
        beastid,
      },
    }).json()
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
export const beastSearch = async (
  search: string,
  method: SlayerBeastSearchMethods = "terms"
) => {
  try {
    // By Terms
    if (method === "terms") {
      // TODO: Space separators converted to + (cow sheep = cow+sheep)
      const response = await got(RSConfigs.bestiary.endpoints.beastTerm, {
        searchParams: {
          term: search,
        },
      }).json()

      return response
    }

    // By First Letter
    if (method === "firstLetter") {
      const response = await got(RSConfigs.bestiary.endpoints.beastLetter, {
        searchParams: {
          letter: search,
        },
      }).json()

      return response
    }

    // By Area
    if (method === "area") {
      const response = await got(RSConfigs.bestiary.endpoints.beastArea, {
        searchParams: {
          identifier: search,
        },
      }).json()

      return response
    }

    // By Slayer Category
    if (method === "slayerCategory") {
      const response = await got(RSConfigs.bestiary.endpoints.beastSlayer, {
        searchParams: {
          identifier: search,
        },
      }).json()

      return response
    }

    // By Weakness
    if (method === "weakness") {
      const response = await got(RSConfigs.bestiary.endpoints.beastWeakness, {
        searchParams: {
          identifier: search,
        },
      }).json()

      return response
    }

    // By Level Range
    if (method === "levelRange") {
      // TODO: enable a level range (200-300) somehow gracefully
      const response = await got(RSConfigs.bestiary.endpoints.beastLevel, {
        searchParams: {
          identifier: search,
        },
      }).json()

      return response
    }
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
export const slayerCategories = async () => {
  try {
    return await got(RSConfigs.bestiary.endpoints.slayerCategories).json()
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
export const weaknesses = async () => {
  try {
    return await got(RSConfigs.bestiary.endpoints.weaknesses).json()
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
