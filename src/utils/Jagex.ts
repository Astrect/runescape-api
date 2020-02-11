import { hiscores } from "../configs/runescape"
import { Jagex } from "../types"

const defaultSkillTree: Jagex.Hiscores.PlayerSkills = {
  overall: { rank: 0, level: 1, experience: 0 },
  attack: { rank: 0, level: 1, experience: 0 },
  defence: { rank: 0, level: 1, experience: 0 },
  strength: { rank: 0, level: 1, experience: 0 },
  constitution: { rank: 0, level: 1, experience: 0 },
  ranged: { rank: 0, level: 1, experience: 0 },
  prayer: { rank: 0, level: 1, experience: 0 },
  magic: { rank: 0, level: 1, experience: 0 },
  cooking: { rank: 0, level: 1, experience: 0 },
  woodcutting: { rank: 0, level: 1, experience: 0 },
  fletching: { rank: 0, level: 1, experience: 0 },
  fishing: { rank: 0, level: 1, experience: 0 },
  firemaking: { rank: 0, level: 1, experience: 0 },
  crafting: { rank: 0, level: 1, experience: 0 },
  smithing: { rank: 0, level: 1, experience: 0 },
  mining: { rank: 0, level: 1, experience: 0 },
  herblore: { rank: 0, level: 1, experience: 0 },
  agility: { rank: 0, level: 1, experience: 0 },
  thieving: { rank: 0, level: 1, experience: 0 },
  slayer: { rank: 0, level: 1, experience: 0 },
  farming: { rank: 0, level: 1, experience: 0 },
  runecrafting: { rank: 0, level: 1, experience: 0 },
  hunter: { rank: 0, level: 1, experience: 0 },
  construction: { rank: 0, level: 1, experience: 0 },
  summoning: { rank: 0, level: 1, experience: 0 },
  dungeoneering: { rank: 0, level: 1, experience: 0 },
  divination: { rank: 0, level: 1, experience: 0 },
  invention: { rank: 0, level: 1, experience: 0 },
}
const separateIntoLines = (jagexPlayer: string): string[] => {
  return jagexPlayer.split("\n")
}
const formatActivities = (activitiesArray: string[]) => {
  const activities: Jagex.Hiscores.PlayerActivites = {
    bounty_hunters: { rank: 0, count: 0 },
    bh_rogues: { rank: 0, count: 0 },
    dominion_tower: { rank: 0, count: 0 },
    the_crucible: { rank: 0, count: 0 },
    castle_wars_games: { rank: 0, count: 0 },
    ba_attackers: { rank: 0, count: 0 },
    ba_defenders: { rank: 0, count: 0 },
    ba_collectors: { rank: 0, count: 0 },
    ba_healers: { rank: 0, count: 0 },
    duel_tournament: { rank: 0, count: 0 },
    mobilising_armies: { rank: 0, count: 0 },
    conquest: { rank: 0, count: 0 },
    fist_of_guthix: { rank: 0, count: 0 },
    gg_resource_race: { rank: 0, count: 0 },
    gg_athletics: { rank: 0, count: 0 },
    we2_armadyl_lifetime_contribution: { rank: 0, count: 0 },
    we2_bandos_lifetime_contribution: { rank: 0, count: 0 },
    we2_armadyl_pvp_kills: { rank: 0, count: 0 },
    we2_bandos_pvp_kills: { rank: 0, count: 0 },
    heist_guard_level: { rank: 0, count: 0 },
    heist_robber_level: { rank: 0, count: 0 },
    cfp_5_game_average: { rank: 0, count: 0 },
    af15_cow_tipping: { rank: 0, count: 0 },
    af15_rats_killed_after_the_miniquest: { rank: 0, count: 0 },
    runescore: { rank: 0, count: 0 },
    clue_scrolls_easy: { rank: 0, count: 0 },
    clue_scrolls_medium: { rank: 0, count: 0 },
    clue_scrolls_hard: { rank: 0, count: 0 },
    clue_scrolls_elite: { rank: 0, count: 0 },
    clue_scrolls_master: { rank: 0, count: 0 },
  }

  hiscores.activities.map((activityName, index) => {
    const [rank, count] = activitiesArray[index].split(",")
    activities[activityName] = { rank: parseInt(rank), count: parseInt(count) }
  })

  return activities
}
const formatSkills = (skillsArray: string[]) => {
  const skills = { ...defaultSkillTree }

  hiscores.skills.map((skillName, index) => {
    const [rank, level, experience] = skillsArray[index].split(",")
    skills[skillName] = {
      rank: parseInt(rank),
      level: parseInt(level),
      experience: parseInt(experience),
    }
  })

  return skills
}
export const formatRuneMetricsProfileSkills = (
  skillsArray: Jagex.RuneMetrics.ProfileSkills[]
) => {
  const skills = { ...defaultSkillTree }

  hiscores.skills.map((skillName, index) => {
    const { rank, level, xp: experience } = skillsArray.find(
      skill => skill.id === index
    ) || { rank: 0, level: 1, xp: 0 }

    skills[skillName] = {
      rank,
      level,
      experience,
    }
  })

  return skills
}
export const parseJagexPlayerToJSON = (
  jagexPlayer: string
): Jagex.Hiscores.PlayerJSON => {
  const lines = separateIntoLines(jagexPlayer)
  const [skillsStartIndex, skillsEndIndex] = [0, hiscores.skills.length]
  const [activitiesStartIndex, activitiesEndIndex] = [
    hiscores.skills.length,
    hiscores.skills.length + hiscores.activities.length,
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
export const parseJagexClanToArray = (
  jagexClan: string
): Jagex.Clan.Member[] => {
  const lines = separateIntoLines(jagexClan)
  // const members = formatClanMembers()
  return [...lines.slice(1, 0)]

  // return members
}
