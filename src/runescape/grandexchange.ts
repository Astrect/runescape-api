import got from "got"
import { grandexchange } from "../configs/runescape"
import { Jagex } from "../types"
import { GrandExchangeCategory } from "../lib/RuneScape"

export const getCategories = async () => {
  return grandexchange.categories.map(
    category => new GrandExchangeCategory(category)
  )
}

export const getCategoryItemsCount = async (
  category: number | GrandExchangeCategory
) => {
  if (
    typeof category !== "number" &&
    category.constructor.name !== "GrandExchangeCategory"
  ) {
    throw new TypeError(
      "Category parameter must be a number or GrandExchangeCategory instance"
    )
  }

  let categoryId: number | undefined = undefined

  if (typeof category === "number") {
    categoryId = category
  } else {
    categoryId = category.id
  }

  try {
    const categories = await got(grandexchange.endpoints.category, {
      searchParams: {
        category: categoryId,
      },
    }).json<Jagex.GrandExchange.CategoryItemsCount>()

    return categories.alpha
  } catch (error) {
    throw new Error(error)
  }
}

export const getCategoryPrices = async () => {
  try {
  } catch (error) {
    throw new Error(error)
  }
}

export const getItem = async () => {
  try {
  } catch (error) {
    throw new Error(error)
  }
}

export const getItemGraph = async () => {
  try {
  } catch (error) {
    throw new Error(error)
  }
}
