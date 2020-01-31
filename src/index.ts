import got from "got"
import { Player } from "./lib/Player"

// Hiscores

export const getPlayer = async (displayName: string) => {
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

export const getAvatarURL = async (displayName: string) => {
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

export const getClanMembers = async (clanName: string) => {
  try {
    const response = await got.get(
      `http://services.runescape.com/m=clan-hiscores/members_lite.ws?clanName=${encodeURI(
        clanName
      )}`
    )

    return response.body
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

// Grand Exchange
