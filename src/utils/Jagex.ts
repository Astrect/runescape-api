import slugify from "slugify"
import { runescape as RSConfigs } from "../configs"

const separateIntoLines = (jagexPlayer: any): string[] => {
  return jagexPlayer.split("\n")
}
const formatActivities = (activitiesArray: string[]) => {
  const activities: any = {}

  RSConfigs.hiscores.activities.map((activityName, index) => {
    const [rank, count] = activitiesArray[index].split(",")
    activities[
      slugify(activityName, {
        replacement: "_",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
      })
    ] = { rank: parseInt(rank), count: parseInt(count) }
  })

  return activities
}
const formatSkills = (skillsArray: string[]) => {
  const skills: any = {}

  RSConfigs.hiscores.skills.map((skillName, index) => {
    const [rank, level, experience] = skillsArray[index].split(",")
    skills[
      slugify(skillName, {
        replacement: "_",
        remove: /[*+~.()'"!:@]/g,
        lower: true,
      })
    ] = {
      rank: parseInt(rank),
      level: parseInt(level),
      experience: parseInt(experience),
    }
  })

  return skills
}
export const parseJagexPlayerToJSON = (jagexPlayer: any) => {
  const lines = separateIntoLines(jagexPlayer)
  const [skillsStartIndex, skillsEndIndex] = [
    0,
    RSConfigs.hiscores.skills.length,
  ]
  const [activitiesStartIndex, activitiesEndIndex] = [
    RSConfigs.hiscores.skills.length,
    RSConfigs.hiscores.skills.length + RSConfigs.hiscores.activities.length,
  ]

  const activities = formatActivities([
    ...lines.slice(activitiesStartIndex, activitiesEndIndex),
  ])
  const skills = formatSkills([
    ...lines.slice(skillsStartIndex, skillsEndIndex),
  ])

  return {
    activities,
    skills,
  }
}
