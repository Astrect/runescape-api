import got from "got"
import { miscellaneous } from "../configs/runescape"
import { Jagex } from "../types"

export const getAvatar = async (name: string) => {
  if (typeof name !== "string") {
    return new TypeError("Search parameter must be a string")
  }

  try {
    const response = await got.get(
      `https://secure.runescape.com/m=avatar-rs/g=runescape/${encodeURI(
        name
      )}/chat.png`
    )

    return response.url
  } catch (error) {
    return miscellaneous.endpoints.defaultAvatarUrl
  }
}

export const getTotalUsers = async () => {
  try {
    const response = await got(miscellaneous.endpoints.totalUsers).json<
      Jagex.Miscellaneous.TotalUsers
    >()

    return response.accounts
  } catch (error: unknown) {
    throw error
  }
}
