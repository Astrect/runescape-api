export type JagexRuneMetricsProfile = {
  magic: number
  questsstarted: number
  totalskill: number
  questscomplete: number
  questsnotstarted: number
  totalxp: number
  ranged: number
  activities: JagexRuneMetricsProfileActivities[]
  skillvalues: JagexRuneMetricsProfileSkills[]
  name: string
  rank: string
  melee: number
  combatlevel: number
  loggedIn: string
}
type JagexRuneMetricsProfileActivities = {
  date: string
  details: string
  text: string
}
type JagexRuneMetricsProfileSkills = {
  level: number
  xp: number
  rank: number
  id: number
}

type RuneMetricsProfileActivities = {
  title: string
  description: string
  date: string
}
type RuneMetricsProfileSkills = {
  rank: number
  level: number
  experience: number
}
type RuneMetricsProfileQuests = {
  complete: number
  started: number
  not_started: number
}

type RuneMetricsProfileOverall = {
  rank: number
  level: number
  experience: number
}

type RuneMetricsProfileExperienceDistribution = {
  magic: number
  melee: number
  ranged: number
}

export class RuneMetricsProfile {
  name: string
  combatLevel: number
  activities: RuneMetricsProfileActivities[]
  overall: RuneMetricsProfileOverall
  skills: RuneMetricsProfileSkills[]
  quests: RuneMetricsProfileQuests
  experience_distribution: RuneMetricsProfileExperienceDistribution

  constructor(jagexRuneMetricsProfile: JagexRuneMetricsProfile) {
    const {
      name,
      combatlevel,
      activities,
      skillvalues,
      questscomplete,
      questsstarted,
      questsnotstarted,
      totalskill,
      totalxp,
      rank,
      magic,
      melee,
      ranged,
    } = jagexRuneMetricsProfile

    this.name = name
    this.combatLevel = combatlevel
    this.experience_distribution = {
      magic,
      melee,
      ranged,
    }
    this.overall = {
      rank: parseInt(rank.replace(",", "")),
      level: totalskill,
      experience: totalxp,
    }
    this.skills = skillvalues.map(({ id, level, xp, rank }) => {
      return {
        id,
        rank,
        level,
        experience: xp,
      }
    })
    this.quests = {
      complete: questscomplete,
      started: questsstarted,
      not_started: questsnotstarted,
    }
    this.activities = activities.map(({ text, details, date }) => {
      return {
        title: text,
        description: details,
        date,
      }
    })
  }
}
