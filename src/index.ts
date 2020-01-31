import got from "got"
import { Player } from "./lib/Player"

export const getPlayer = async (displayName: string) => {
  try {
    const response = await got.get(
      `https://secure.runescape.com/m=hiscore/index_lite.ws?player=${displayName}`
    )

    const { activities } = new Player(displayName, response.body)
    console.log(activities)

    return new Player(displayName, response.body)
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const getAvatarURL = async (displayName: string) => {
  try {
    const response = await got.get(
      `https://secure.runescape.com/m=avatar-rs/g=runescape/${displayName}/chat.png`
    )

    return response.url
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
