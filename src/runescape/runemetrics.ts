import got from "got"

type Skill = "attack"

export const profile = async (name: string) => {
  try {
    const response = await got.get(
      `https://apps.runescape.com/runemetrics/profile/profile?user=${name}&activities=20`
    )

    return response.body
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const monthlyXp = async (name: string, skill: Skill) => {
  try {
    const response = await got.get(
      `https://apps.runescape.com/runemetrics/xp-monthly?searchName=${name}&skillid=${skill}`
    )

    return response.body
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const quests = async (name: string) => {
  try {
    const response = await got.get(
      `https://apps.runescape.com/runemetrics/quests?user=${name}`
    )

    return response.body
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
