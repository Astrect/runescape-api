import got from "got"
import { Player } from "../lib/Player"

// Hiscores
export const player = async (displayName: string) => {
  try {
    const response = await got.get(
      `https://secure.runescape.com/m=hiscore/index_lite.ws?player=${encodeURI(
        displayName
      )}`
    )

    return new Player(displayName, response.body)
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
export const playerAvatar = async (displayName: string) => {
  try {
    const response = await got.get(
      `https://secure.runescape.com/m=avatar-rs/g=runescape/${encodeURI(
        displayName
      )}/chat.png`
    )

    return response.url
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
