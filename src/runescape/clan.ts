import got from "got"

export const members = async (clanName: string) => {
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
