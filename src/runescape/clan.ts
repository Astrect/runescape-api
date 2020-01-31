import got from "got"
import { runescape as RSConfigs } from "../configs"
import { parseJagexClanToJSON } from "../utils/Jagex"

export const members = async (clanName: string) => {
  try {
    const response = await got.get(
      `${RSConfigs.hiscores.endpoints.clan}${encodeURI(clanName)}`
    )

    return parseJagexClanToJSON(response.body)
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
