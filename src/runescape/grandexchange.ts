import got from "got"
import { grandexchange } from "../configs/runescape"
import { GrandExchangeCategory, Item, ItemGraph } from "../lib/RuneScape"
import { AlphaNumeric, Jagex } from "../types"

export const getCategories = async () => {
  return await new Promise<GrandExchangeCategory[]>(resolve =>
    resolve(
      grandexchange.categories.map(
        category => new GrandExchangeCategory(category)
      )
    )
  )
}

export const getCategoryCounts = async (
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
  } catch (error: unknown) {
    throw error
  }
}

export const getCategoryCountsByPrefix = async (
  categoryId: number | GrandExchangeCategory,
  prefix: AlphaNumeric,
  page = 1
) => {
  if (
    typeof categoryId !== "number" &&
    categoryId.constructor.name !== "GrandExchangeCategory"
  ) {
    throw new TypeError(
      "Category parameter must be a number or GrandExchangeCategory instance"
    )
  }

  let category: number | undefined = undefined
  let alpha: string | undefined = undefined

  if (typeof categoryId === "number") {
    category = categoryId
  } else {
    category = categoryId.id
  }

  if (typeof prefix === "number") {
    alpha = encodeURIComponent("#")
  } else {
    alpha = prefix.toLowerCase()
  }

  try {
    const response = await got(grandexchange.endpoints.categoryItems, {
      searchParams: {
        category,
        alpha,
        page,
      },
    }).json<Jagex.GrandExchange.CategoryItems>()

    return response.items
  } catch (error: unknown) {
    throw error
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
  } catch (error: unknown) {
    throw error
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
  } catch (error: unknown) {
    throw error
  }
}
