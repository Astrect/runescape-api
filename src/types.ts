import { hiscores, bestiary } from "./configs/runescape"

export type Activities = typeof hiscores.activities[number]
export type Activity = {
  rank: number
  count: number
}
export type Avatar = string
export type Gamemode = "normal" | "ironman" | "hardcore"
export type PlayerSkills<K extends string = Skills> = { [key in K]: Skill }
export type PlayerActivites<K extends string = Activities> = {
  [key in K]: Activity
}
export type Skills = typeof hiscores.skills[number]
export type Skill = {
  rank: number
  level: number
  experience: number
}
export type SlayerBeastSearchMethods = typeof bestiary.searchMethods[number]

export namespace Jagex {
  export namespace Bestiary {
    export type Animations = {
      attack?: number
      death?: number
    }
    export type Area = string
    export type Areas = Area[]
    export type Beast = {
      magic: number
      defence: number
      ranged: number
      attack: number
      level: number
      size: number
      members: boolean
      animations: Animations
      name: string
      xp: string
      description: string
      areas: Areas
      id: number
      aggressive: boolean
      poisonous: boolean
      attackable: boolean
      weakness: Weakness
      lifepoints: number
    }
    export type BeastSearchMethods = typeof bestiary.searchMethods[number]
    export type SlayerCategories = unknown
    export type Weakness = typeof bestiary.weaknesses[number]
    export type Weaknesses = {
      None: number
      Air: number
      Water: number
      Earth: number
      Fire: number
      Stabbing: number
      Slashing: number
      Crushing: number
      Arrow: number
      Bolt: number
      Thrown: number
    }
  }
  export namespace Clan {
    export type Members = unknown
  }
  export namespace GrandExchange {
    export type Categories = unknown
    export type CategoryPrices = unknown
    export type Item = unknown
    export type ItemGraph = unknown
  }
  export namespace Hiscores {
    export type Chathead = string
    export type Player = unknown
    export type Gamemode = typeof hiscores.gamemodes[number]
  }
  export namespace RuneMetrics {
    export type Profile = unknown
    export type MonthlyExperience = unknown
    export type Quests = unknown
  }
}

export namespace RuneScape {
  export namespace Bestiary {
    export type Areas = unknown
    export type Beast = unknown
    export type Beasts = unknown
    export type SlayerCategories = unknown
    export type Weakness = typeof bestiary.weaknesses[number]
  }
  export namespace Clan {}
  export namespace GrandExchange {}
  export namespace Hiscores {}
  export namespace RuneMetrics {}
}
