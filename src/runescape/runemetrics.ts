import got from "got"
import { runescape as RSConfigs } from "../configs"
import {
  JagexRuneMetricsProfile,
  RuneMetricsProfile,
} from "../utils/RuneMetricsProfile"

export const profile = async (name: string) => {
  try {
    const response = await got(RSConfigs.runemetrics.endpoints.profile, {
      searchParams: {
        activities: 20,
        user: encodeURI(name),
      },
    }).json<JagexRuneMetricsProfile>()

    console.log(response)
    return new RuneMetricsProfile(response)
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const monthlyXp = async (name: string, skillId: number) => {
  try {
    const response = await got(RSConfigs.runemetrics.endpoints.monthlyXp, {
      searchParams: {
        searchName: encodeURI(name),
        skillid: skillId,
      },
    }).json()

    return response
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}

export const quests = async (name: string) => {
  try {
    const response = await got(RSConfigs.runemetrics.endpoints.quests, {
      searchParams: {
        user: encodeURI(name),
      },
    }).json()

    return response
  } catch (error) {
    console.log(error.response.body)
    //=> 'Internal server error ...'
  }
}
