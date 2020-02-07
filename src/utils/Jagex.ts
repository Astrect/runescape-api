import { hiscores } from "../configs/runescape"
import { PlayerActivites, PlayerSkills, Jagex } from "../types"

const separateIntoLines = (jagexPlayer: string): string[] => {
  return jagexPlayer.split("\n")
}
const formatActivities = (activitiesArray: string[]) => {
  const activities: PlayerActivites = {
    bounty_hunters: { rank: -1, count: -1 },
    bh_rogues: { rank: -1, count: -1 },
    dominion_tower: { rank: -1, count: -1 },
    the_crucible: { rank: -1, count: -1 },
    castle_wars_games: { rank: -1, count: -1 },
    ba_attackers: { rank: -1, count: -1 },
    ba_defenders: { rank: -1, count: -1 },
    ba_collectors: { rank: -1, count: -1 },
    ba_healers: { rank: -1, count: -1 },
    duel_tournament: { rank: -1, count: -1 },
    mobilising_armies: { rank: -1, count: -1 },
    conquest: { rank: -1, count: -1 },
    fist_of_guthix: { rank: -1, count: -1 },
    gg_resource_race: { rank: -1, count: -1 },
    gg_athletics: { rank: -1, count: -1 },
    we2_armadyl_lifetime_contribution: { rank: -1, count: -1 },
    we2_bandos_lifetime_contribution: { rank: -1, count: -1 },
    we2_armadyl_pvp_kills: { rank: -1, count: -1 },
    we2_bandos_pvp_kills: { rank: -1, count: -1 },
    heist_guard_level: { rank: -1, count: -1 },
    heist_robber_level: { rank: -1, count: -1 },
    cfp_5_game_average: { rank: -1, count: -1 },
    af15_cow_tipping: { rank: -1, count: -1 },
    af15_rats_killed_after_the_miniquest: { rank: -1, count: -1 },
    runescore: { rank: -1, count: -1 },
    clue_scrolls_easy: { rank: -1, count: -1 },
    clue_scrolls_medium: { rank: -1, count: -1 },
    clue_scrolls_hard: { rank: -1, count: -1 },
    clue_scrolls_elite: { rank: -1, count: -1 },
    clue_scrolls_master: { rank: -1, count: -1 },
  }

  hiscores.activities.map((activityName, index) => {
    const [rank, count] = activitiesArray[index].split(",")
    activities[activityName] = { rank: parseInt(rank), count: parseInt(count) }
  })

  return activities
}
const formatSkills = (skillsArray: string[]) => {
  const skills: PlayerSkills = {
    overall: { rank: -1, level: -1, experience: -1 },
    attack: { rank: -1, level: -1, experience: -1 },
    defence: { rank: -1, level: -1, experience: -1 },
    strength: { rank: -1, level: -1, experience: -1 },
    constitution: { rank: -1, level: -1, experience: -1 },
    ranged: { rank: -1, level: -1, experience: -1 },
    prayer: { rank: -1, level: -1, experience: -1 },
    magic: { rank: -1, level: -1, experience: -1 },
    cooking: { rank: -1, level: -1, experience: -1 },
    woodcutting: { rank: -1, level: -1, experience: -1 },
    fletching: { rank: -1, level: -1, experience: -1 },
    fishing: { rank: -1, level: -1, experience: -1 },
    firemaking: { rank: -1, level: -1, experience: -1 },
    crafting: { rank: -1, level: -1, experience: -1 },
    smithing: { rank: -1, level: -1, experience: -1 },
    mining: { rank: -1, level: -1, experience: -1 },
    herblore: { rank: -1, level: -1, experience: -1 },
    agility: { rank: -1, level: -1, experience: -1 },
    thieving: { rank: -1, level: -1, experience: -1 },
    slayer: { rank: -1, level: -1, experience: -1 },
    farming: { rank: -1, level: -1, experience: -1 },
    runecrafting: { rank: -1, level: -1, experience: -1 },
    hunter: { rank: -1, level: -1, experience: -1 },
    construction: { rank: -1, level: -1, experience: -1 },
    summoning: { rank: -1, level: -1, experience: -1 },
    dungeoneering: { rank: -1, level: -1, experience: -1 },
    divination: { rank: -1, level: -1, experience: -1 },
    invention: { rank: -1, level: -1, experience: -1 },
  }

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
const formatClanMembers = (membersArray: string[]) => {
  const members: any = {}

  membersArray.map(member => {
    const [name, rank, experience, kills] = member.split(",")
    const regex = new RegExp(/\uFFFD/g)
    members[name.replace(regex, " ")] = {
      rank,
      experience: parseInt(experience),
      kills: parseInt(kills),
    }
  })

  return members
}
export const parseJagexPlayerToJSON = (jagexPlayer: string) => {
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
  return [...lines.slice(1, -1)]

  // return members
}
