import got from "got"
import { runescape as RSConfigs } from "../configs"
import { Player } from "../utils/Player"

export const avatar = async (name: string) => {
  try {
    const response = await got.get(
      `https://secure.runescape.com/m=avatar-rs/g=runescape/${encodeURI(
        name
      )}/chat.png`
    )

    return response.url
  } catch (error) {
    new Error(error)
    return `https://secure.runescape.com/m=avatar-rs/default_chat.png?`
  }
}

export const player = async (
  name: string,
  gamemode: RS.Gamemode = "normal"
) => {
  if (typeof name !== "string") {
    return new Error("Username must be a string")
  }

  if (!["normal", "ironman", "hardcore"].includes(gamemode)) {
    return new Error(
      "Invalid Gamemode, expected to see 'normal', 'ironman' or 'hardcore'"
    )
  }

  try {
    const response = await got(RSConfigs.hiscores.endpoints[gamemode], {
      searchParams: {
        player: encodeURI(name),
      },
    })

    return new Player(name, response.body)
  } catch (error) {
    return new Error(error)
  }
}
