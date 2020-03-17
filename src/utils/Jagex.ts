import { hiscores } from "../configs/runescape"
import * as osrs from "../configs/oldschool"
import { Jagex } from "../types"

/**
 * RuneScape 3
 */
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
  return [...lines.slice(1, -1)]
}

/**
 * Oldschool RuneScape
 */

const formatOSRSSkills = (skillsArray: string[]) => {
  const skills = {
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
  }

  osrs.hiscores.skills.map((skillName, index) => {
    const [rank, level, experience] = skillsArray[index].split(",")
    skills[skillName] = {
      rank: parseInt(rank),
      level: parseInt(level),
      experience: parseInt(experience),
    }
  })

  return skills
}
const formatOSRSActivities = (activitiesArray: string[]) => {
  const activities: Jagex.Hiscores.OSRSPlayerActivites = {
    league_points: { rank: 0, count: 0 },
    bounty_hunter_hunter: { rank: 0, count: 0 },
    bounty_hunter_rogue: { rank: 0, count: 0 },
    clue_scrolls_all: { rank: 0, count: 0 },
    clue_scrolls_beginner: { rank: 0, count: 0 },
    clue_scrolls_easy: { rank: 0, count: 0 },
    clue_scrolls_medium: { rank: 0, count: 0 },
    clue_scrolls_hard: { rank: 0, count: 0 },
    clue_scrolls_elite: { rank: 0, count: 0 },
    clue_scrolls_master: { rank: 0, count: 0 },
    last_man_standing: { rank: 0, count: 0 },
  }

  osrs.hiscores.activities.map((activityName, index) => {
    const [rank, count] = activitiesArray[index].split(",")
    activities[activityName] = { rank: parseInt(rank), count: parseInt(count) }
  })

  return activities
}
const formatOSRSBosses = (activitiesArray: string[]) => {
  const bosses: Jagex.Hiscores.OSRSPlayerBosses = {
    abyssal_sire: { rank: 0, count: 0 },
    alchemical_hydra: { rank: 0, count: 0 },
    barrows_chests: { rank: 0, count: 0 },
    bryophyta: { rank: 0, count: 0 },
    callisto: { rank: 0, count: 0 },
    cerberus: { rank: 0, count: 0 },
    chambers_of_xeric: { rank: 0, count: 0 },
    chambers_of_xeric_challenge_mode: { rank: 0, count: 0 },
    chaos_elemental: { rank: 0, count: 0 },
    chaos_fanatic: { rank: 0, count: 0 },
    commander_zilyana: { rank: 0, count: 0 },
    corporeal_beast: { rank: 0, count: 0 },
    crazy_archaeologist: { rank: 0, count: 0 },
    dagannoth_prime: { rank: 0, count: 0 },
    dagannoth_rex: { rank: 0, count: 0 },
    dagannoth_supreme: { rank: 0, count: 0 },
    deranged_archaeologist: { rank: 0, count: 0 },
    general_graardor: { rank: 0, count: 0 },
    giant_mole: { rank: 0, count: 0 },
    grotesque_guardians: { rank: 0, count: 0 },
    hespori: { rank: 0, count: 0 },
    kalphite_queen: { rank: 0, count: 0 },
    king_black_dragon: { rank: 0, count: 0 },
    kraken: { rank: 0, count: 0 },
    kreearra: { rank: 0, count: 0 },
    kril_tsutsaroth: { rank: 0, count: 0 },
    mimic: { rank: 0, count: 0 },
    nightmare: { rank: 0, count: 0 },
    obor: { rank: 0, count: 0 },
    sarachnis: { rank: 0, count: 0 },
    scorpia: { rank: 0, count: 0 },
    skotizo: { rank: 0, count: 0 },
    the_gauntlet: { rank: 0, count: 0 },
    the_corrupted_gauntlet: { rank: 0, count: 0 },
    theatre_of_blood: { rank: 0, count: 0 },
    thermonuclear_smoke_devil: { rank: 0, count: 0 },
    tzkal_zuk: { rank: 0, count: 0 },
    tztok_jad: { rank: 0, count: 0 },
    venenatis: { rank: 0, count: 0 },
    vetion: { rank: 0, count: 0 },
    vorkath: { rank: 0, count: 0 },
    wintertodt: { rank: 0, count: 0 },
    zalcano: { rank: 0, count: 0 },
    zulrah: { rank: 0, count: 0 },
  }

  osrs.hiscores.bosses.map((bossName, index) => {
    const [rank, count] = activitiesArray[index].split(",")
    bosses[bossName] = { rank: parseInt(rank), count: parseInt(count) }
  })

  return bosses
}
export const parseJagexOSRSPlayerToJSON = (
  jagexPlayer: string
): Jagex.Hiscores.OSRSPlayerJSON => {
  const lines = separateIntoLines(jagexPlayer)
  const [skillsStartIndex, skillsEndIndex] = [0, osrs.hiscores.skills.length]
  const [activitiesStartIndex, activitiesEndIndex] = [
    osrs.hiscores.skills.length,
    osrs.hiscores.skills.length + osrs.hiscores.activities.length,
  ]
  const [bossesStartIndex, bossesEndIndex] = [
    osrs.hiscores.skills.length + osrs.hiscores.activities.length,
    osrs.hiscores.skills.length +
      osrs.hiscores.activities.length +
      osrs.hiscores.bosses.length,
  ]

  const activities = formatOSRSActivities([
    ...lines.slice(activitiesStartIndex, activitiesEndIndex),
  ])
  const bosses = formatOSRSBosses([
    ...lines.slice(bossesStartIndex, bossesEndIndex),
  ])
  const skills = formatOSRSSkills([
    ...lines.slice(skillsStartIndex, skillsEndIndex),
  ])

  return {
    activities,
    bosses,
    skills,
  }
}
