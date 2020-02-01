import got from "got"
import { runescape as RSConfigs } from "../configs"
import { parseJagexClanToJSON } from "../utils/Jagex"

export const members = async (name: string) => {
  try {
    const response = await got(RSConfigs.hiscores.endpoints.clan, {
      searchParams: {
        clanName: encodeURI(name),
      },
    })

    return parseJagexClanToJSON(response.body)
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
