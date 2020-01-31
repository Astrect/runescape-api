import got from "got"
import { runescape as RSConfigs } from "../configs"

type Skill = "attack"

export const profile = async (name: string) => {
  try {
    const response = await got(RSConfigs.runemetrics.endpoints.profile, {
      searchParams: {
        activities: 20,
        user: encodeURI(name),
      },
    }).json()

    return response
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
