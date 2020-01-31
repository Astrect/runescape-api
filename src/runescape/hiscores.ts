import got from "got"
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
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const player = async (name: string, opts: { gamemode: string }) => {
  try {
    const response = await got.get(
      `https://secure.runescape.com/m=hiscore/index_lite.ws?player=${encodeURI(
        name
      )}`
    )

    return new Player(name, response.body)
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
