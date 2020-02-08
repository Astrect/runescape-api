import got from "got"
import { grandexchange } from "../configs/runescape"
import { Jagex, Letter } from "../types"
import { GrandExchangeCategory, Item, ItemGraph } from "../lib/RuneScape"

// TODO: Clean up these function names and improve the returned data (getCategories, getCategoryItemsCount, getCategoryItems)
export const getCategories = async () => {
  return await new Promise<GrandExchangeCategory[]>(resolve =>
    resolve(
      grandexchange.categories.map(
        category => new GrandExchangeCategory(category)
      )
    )
  )
}

/**
 * The number of items separated by the first letter
 *
 * @param category
 */
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
    const response = await got(grandexchange.endpoints.category, {
      searchParams: {
        category: categoryId,
      },
    }).json<Jagex.GrandExchange.CategoryItemsCount>()

    return response.alpha
  } catch (error) {
    throw new Error(error)
  }
}

// TODO: Any items that start with a number must instead use %23 instead of #
export const getCategoryItems = async (
  category: number | GrandExchangeCategory,
  prefix: Letter,
  page = 1
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
    const response = await got(grandexchange.endpoints.categoryItems, {
      searchParams: {
        category: categoryId,
        alpha: prefix.toLowerCase(),
        page,
      },
    }).json<Jagex.GrandExchange.CategoryItems>()

    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const getItem = async (id: number) => {
  if (typeof id !== "number") {
    throw new TypeError("Item ID parameter must be a number")
  }

  try {
    const response = await got(grandexchange.endpoints.item, {
      searchParams: {
        item: id,
      },
    }).json<{ item: Jagex.GrandExchange.Item }>()

    return new Item(response.item)
  } catch (error) {
    throw new Error(error)
  }
}

export const getItemGraph = async (id: number) => {
  if (typeof id !== "number") {
    throw new TypeError("Item ID parameter must be a number")
  }

  try {
    const response = await got(
      `${grandexchange.endpoints.itemGraph}/${id}.json`
    ).json<Jagex.GrandExchange.ItemGraph>()

    return new ItemGraph(id, response)
  } catch (error) {
    throw new Error(error)
  }
}
