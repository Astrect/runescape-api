import got from "got"
import { runescape as RSConfigs } from "../configs"

export const category = async (category: number) => {
  try {
    const response = await got(RSConfigs.grandexchange.endpoints.category, {
      searchParams: {
        category,
      },
    }).json()

    return response
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const categoryPrices = async (
  category: number,
  prefix: string,
  page: number
) => {
  try {
    const response = await got(
      RSConfigs.grandexchange.endpoints.categoryPrices,
      {
        searchParams: {
          category,
          alpha: prefix,
          page,
        },
      }
    ).json()

    return response
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const item = async (item: number) => {
  try {
    const response = await got(RSConfigs.grandexchange.endpoints.item, {
      searchParams: {
        item,
      },
    }).json()

    return response
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
export const itemGraph = async (item: number) => {
  try {
    const response = await got(
      `${RSConfigs.grandexchange.endpoints.itemGraph}${item}.json`
    ).json()

    return response
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
