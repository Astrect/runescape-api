import got from "got"
import { hiscores } from "../configs/runescape"
import { Player } from "../lib/RuneScape"
import { parseJagexPlayerToJSON } from "../utils/Jagex"

type GetPlayerOptions = {
  gamemode: typeof hiscores.gamemodes[number]
}

// TODO: Handle 404 (player does not exist) response
export const getPlayer = async (
  name: string,
  args: GetPlayerOptions = {
    gamemode: "normal",
  }
) => {
  if (typeof name !== "string") {
    throw new TypeError("Player name parameter must be a string")
  }

  if (![...hiscores.gamemodes].includes(args.gamemode)) {
    throw new Error(
      `Invalid gamemode selected. Available options are: ${hiscores.gamemodes.join(
        " | "
      )}`
    )
  }

  try {
    const response = await got(hiscores.endpoints[args.gamemode], {
      searchParams: {
        player: name,
      },
    })

    const player = parseJagexPlayerToJSON(response.body)

    return new Player(name, player)
  } catch (error) {
    throw new Error(error)
  }
}
