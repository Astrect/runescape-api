import got from "got"
import { hiscores } from "../configs/runescape"
import { Player } from "../lib/RuneScape"
import { parseJagexPlayerToJSON } from "../utils/Jagex"

// type GetPlayerOptions = {
//   gamemode: typeof hiscores.gamemodes[number]
// }

// TODO: Handle 404 (player does not exist) response
export const getPlayer = async (
  name: string,
  gamemode: typeof hiscores.gamemodes[number] = "normal"
) => {
  if (typeof name !== "string") {
    throw new TypeError("Player name parameter must be a string")
  }

  if (![...hiscores.gamemodes].includes(gamemode)) {
    throw new Error(
      `Invalid gamemode selected. Available options are: ${hiscores.gamemodes.join(
        " | "
      )}`
    )
  }

  try {
    const response = await got(hiscores.endpoints[gamemode], {
      searchParams: {
        player: name,
      },
    })

    const player = parseJagexPlayerToJSON(response.body)

    return new Player(name, player)
  } catch (error: unknown) {
    throw error
  }
}
