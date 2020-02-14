import got from "got"
import { grandexchange } from "../configs/oldschool"
import { Item, ItemGraph } from "../lib/RuneScape"
import { Jagex } from "../types"

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

    return response.item
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
