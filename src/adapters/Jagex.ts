import slugify from "slugify"

const skillsList = [
  "Overall",
  "Attack",
  "Defence",
  "Strength",
  "Hitpoints",
  "Ranged",
  "Prayer",
  "Magic",
  "Cooking",
  "Woodcutting",
  "Fletching",
  "Fishing",
  "Firemaking",
  "Crafting",
  "Smithing",
  "Mining",
  "Herblore",
  "Agility",
  "Thieving",
  "Slayer",
  "Farming",
  "Runecrafting",
  "Hunter",
  "Construction",
  "Summoning",
  "Dungeoneering",
  "Divination",
  "Invention",
]
const activitiesList = [
  "Bounty Hunters",
  "B.H. Rogues",
  "Dominion Tower",
  "The Crucible",
  "Castle Wars Games",
  "B.A Attackers",
  "B.A Defenders",
  "B.A Collectors",
  "B.A Healers",
  "Duel Tournament",
  "Mobilising Armies",
  "Conquest",
  "Fist of Guthix",
  "GG: Resource Race",
  "GG: Athletics",
  "WE2: Armadyl Lifetime Contribution",
  "WE2: Bandos Lifetime Contribution",
  "WE2: Armadyl PvP kills",
  "WE2: Bandos PvP kills",
  "Heist Guard Level",
  "Heist Robber Level",
  "CFP: 5 Game Average",
  "AF15: Cow Tipping",
  "AF15: Rats killed after the miniquest",
  "RuneScore",
  "Clue Scrolls (easy)",
  "Clue Scrolls (medium)",
  "Clue Scrolls (hard)",
  "Clue Scrolls (elite)",
  "Clue Scrolls (master)",
]
const separateIntoLines = (jagexPlayer: any): string[] => {
  return jagexPlayer.split("\n")
}
const formatActivities = (activitiesArray: string[]) => {
  const activities: any = {}

  activitiesList.map((activityName, index) => {
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

  skillsList.map((skillName, index) => {
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
  const [skillsStartIndex, skillsEndIndex] = [0, skillsList.length]
  const [activitiesStartIndex, activitiesEndIndex] = [
    skillsList.length,
    skillsList.length + activitiesList.length,
  ]
  // const [bossesStartIndex, bossesEndIndex] = [
  //   skillsList.length + activitiesList.length,
  //   skillsList.length + activitiesList.length + bossesList.length,
  // ]

  const activities = formatActivities([
    ...lines.slice(activitiesStartIndex, activitiesEndIndex),
  ])
  // const bosses = formatBosses([
  //   ...lines.slice(bossesStartIndex, bossesEndIndex),
  // ])
  const skills = formatSkills([
    ...lines.slice(skillsStartIndex, skillsEndIndex),
  ])

  return {
    activities,
    // bosses,
    skills,
  }
}
