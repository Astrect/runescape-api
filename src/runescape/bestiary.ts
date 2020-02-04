import got from "got"
import { bestiary } from "../configs/runescape"
import { Beast, Weakness, Area, SlayerCategory } from "../lib/RuneScape"
import { Jagex, RuneScape } from "../types"

export const getAreas = async () => {
  try {
    const areas = await got(bestiary.endpoints.areas).json<
      Jagex.Bestiary.Areas
    >()

    return areas.map(area => new Area(area))
  } catch (error) {}
}
export const getBeastById = async (beastId: number) => {
  try {
    const beast = await got(bestiary.endpoints.beast, {
      searchParams: {
        beastid: beastId,
      },
    }).json<Jagex.Bestiary.Beast>()

    return new Beast(beast)
  } catch (error) {}
}
// export const getBeastsBySearch = async (): Promise<RuneScape.Bestiary.Beasts> => {
//   try {
//   } catch (error) {}
// }
export const getSlayerCategories = async () => {
  try {
    const categories = await got(bestiary.endpoints.slayerCategories).json<
      Jagex.Bestiary.SlayerCategories
    >()

    return Object.values(categories).map(
      category => new SlayerCategory(category)
    )
  } catch (error) {}
}
export const getWeaknesses = async () => {
  try {
    const weaknesses = await got(bestiary.endpoints.weaknesses).json<
      Jagex.Bestiary.Weaknesses
    >()

    return Object.values(weaknesses).map(i => new Weakness(i))
  } catch (error) {}
}
