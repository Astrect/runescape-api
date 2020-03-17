import got from "got"
import { runemetrics } from "../configs/runescape"
import {
  Quest,
  RuneMetricsMonthlyExperience,
  RuneMetricsProfile,
  Skill,
} from "../lib/RuneScape"
import { Jagex } from "../types"

// TODO: Fail spectacularly if their profile is "unavailable" (may just mean they're private)
export const getMonthlyXp = async (name: string, skill: number | Skill) => {
  if (typeof name !== "string") {
    throw new TypeError("Player name parameter must be a string")
  }

  if (typeof skill !== "number" && skill.constructor.name !== "Skill") {
    throw new TypeError("Skill parameter must be a number or Skill instance")
  }

  let skillId: number | undefined = undefined

  if (typeof skill === "number") {
    skillId = skill
  } else {
    skillId = skill.id
  }

  try {
    const response = await got(runemetrics.endpoints.monthlyXp, {
      searchParams: {
        searchName: name,
        skillid: skillId,
      },
    }).json<Jagex.RuneMetrics.MonthlyExperience>()

    return new RuneMetricsMonthlyExperience(response.monthlyXpGain[0])
  } catch (error) {
    throw new Error(error)
  }
}

export const getProfile = async (name: string) => {
  if (typeof name !== "string") {
    throw new TypeError("Player name parameter must be a string")
  }

  try {
    const profile = await got(runemetrics.endpoints.profile, {
      searchParams: {
        activities: 20,
        user: name,
      },
    }).json<Jagex.RuneMetrics.Profile>()

    return new RuneMetricsProfile(profile)
  } catch (error) {
    throw new Error(error)
  }
}

export const getQuests = async (name: string) => {
  if (typeof name !== "string") {
    throw new TypeError("Player name parameter must be a string")
  }

  try {
    const response = await got(runemetrics.endpoints.quests, {
      searchParams: {
        user: name,
      },
    }).json<Jagex.RuneMetrics.Quests>()

    return response.quests.map(quest => new Quest(quest))
  } catch (error) {
    throw new Error(error)
  }
}
