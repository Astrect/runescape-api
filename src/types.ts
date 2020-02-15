import {
  bestiary,
  grandexchange,
  hiscores,
  runemetrics,
} from "./configs/runescape"
import * as osrs from "./configs/oldschool"

export namespace Jagex {
  export namespace Bestiary {
    export type Animations = {
      attack?: number
      death?: number
    }
    export type Area = string
    export type Areas = Area[]
    export type Beast = {
      magic?: number
      defence?: number
      ranged?: number
      attack?: number
      level?: number
      size?: number
      members?: boolean
      animations?: Animations
      name: string
      xp?: string
      description?: string
      areas?: Areas
      id: number
      aggressive?: boolean
      poisonous?: boolean
      attackable?: boolean
      weakness?: Weakness
      lifepoints?: number
    }
    export type BeastBySearch = {
      label: string
      value: number
    }
    export type BeastSearchMethods = typeof bestiary.searchMethods[number]
    export type SlayerCategories = {
      "Aberrant spectres": number
      "Abyssal demons": number
      "Acheron mammoths": number
      "Adamant dragons": number
      Airut: number
      Ankou: number
      Aquanites: number
      "Ascension members": number
      Aviansies: number
      Banshees: number
      Basilisks: number
      Bats: number
      Bears: number
      Birds: number
      "Black demons": number
      "Black dragons": number
      Bloodveld: number
      "Blue dragons": number
      "Brine rats": number
      "Bronze dragons": number
      "Camel warriors": number
      Catablepon: number
      "Cave bugs": number
      "Cave crawlers": number
      "Cave horrors": number
      "Cave slimes": number
      "Celestial dragons": number
      "Chaos giants": number
      Cockatrice: number
      "Corrupted creatures": number
      "Corrupted dust devils": number
      "Corrupted kalphites": number
      "Corrupted lizards": number
      "Corrupted scarabs": number
      "Corrupted scorpions": number
      "Corrupted worker": number
      Cows: number
      "Crawling hands": number
      "Creatures of Daemonheim": number
      "Creatures of the Lost Grove": number
      "Cres's creations": number
      "Crocodile akh": number
      Crocodiles: number
      "Crystal shapeshifters": number
      Cyclopes: number
      Dagannoth: number
      "Dark beasts": number
      Demons: number
      "Desert lizards": number
      "Desert strykewyrms": number
      Dinosaurs: number
      Dogs: number
      Dragons: number
      "Dust devils": number
      Dwarves: number
      "Earth warriors": number
      Edimmu: number
      Elves: number
      "Feline akh": number
      "Fever spiders": number
      "Fire giants": number
      Fleshcrawlers: number
      Frogs: number
      "Fungal magi": number
      "Ganodermic creatures": number
      Gargoyles: number
      "Gelatinous abominations": number
      "Gemstone dragons": number
      Ghosts: number
      Ghouls: number
      Glacors: number
      Goblins: number
      Goraks: number
      "Gorilla akh": number
      "Greater demons": number
      "Green dragons": number
      Grifolapines: number
      Grifolaroos: number
      Grotworms: number
      "Harpie bug swarms": number
      Hellhounds: number
      "Hill giants": number
      Hobgoblins: number
      "Ice giants": number
      "Ice strykewyrms": number
      "Ice warriors": number
      Icefiends: number
      "Imperial guard akh": number
      "Infernal mages": number
      "Iron dragons": number
      Jellies: number
      "Jungle horrors": number
      "Jungle strykewyrms": number
      "Kal'gerion demons": number
      Kalphite: number
      Killerwatts: number
      Kurask: number
      "Lava strykewyrms": number
      "Lesser demons": number
      "Living rock creatures": number
      "Living wyverns": number
      Minotaurs: number
      "Mithril dragons": number
      Mogres: number
      Molanisks: number
      Monkeys: number
      "Moss giants": number
      Muspah: number
      "Mutated jadinkos": number
      "Mutated zygomites": number
      Nechryael: number
      "Nightmare creatures": number
      Nihil: number
      Ogres: number
      "Otherworldly beings": number
      Pigs: number
      "Polypore creatures": number
      Pyrefiends: number
      Rats: number
      "Red dragons": number
      Revenants: number
      "Ripper demons": number
      Rockslugs: number
      "Rune dragons": number
      "Salawa akh": number
      Scabarites: number
      "Scarab akh": number
      Scorpions: number
      "Sea snakes": number
      Shades: number
      "Shadow creatures": number
      "Shadow warriors": number
      "Skeletal wyverns": number
      Skeletons: number
      "Soul devourers": number
      Spiders: number
      "Spiritual mages": number
      "Spiritual rangers": number
      "Spiritual warriors": number
      "Stalker creatures": number
      "Steel dragons": number
      Strykewyrms: number
      Suqahs: number
      "Terror dogs": number
      "Tormented demons": number
      Trolls: number
      Turoth: number
      TzHaar: number
      Vampyres: number
      "Vile blooms": number
      "Volcanic creatures": number
      Vyrewatch: number
      "Wall beasts": number
      "Warped terrorbirds": number
      "Warped tortoises": number
      Waterfiends: number
      Werewolves: number
      Wolves: number
      "Zarosian creatures": number
      Zombies: number
    }
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
    export type Member = string
    export type Members = string
  }
  export namespace GrandExchange {
    export type Category = typeof grandexchange.categories[number]
    export type CategoryItemsCount = {
      types: never[]
      alpha: { letter: string; items: number }[]
    }
    export type CategoryItems = {
      total: number
      items: Item[]
    }
    export type Item = {
      icon: string
      icon_large: string
      id: number
      type: Jagex.GrandExchange.Category
      typeIcon: string
      name: string
      description: string
      current: ItemTrend
      today: ItemTrend
      members: string
      day30?: ItemTrend
      day90?: ItemTrend
      day180?: ItemTrend
    }

    type ItemTrend = {
      trend: string
      price: string
    }
    export type ItemGraph = {
      daily: {
        [key: string]: number
      }
      average: {
        [key: string]: number
      }
    }
  }
  export namespace Hiscores {
    // RuneScape 3
    type Activities = typeof hiscores.activities[number]
    type Activity = {
      rank: number
      count: number
    }
    export type Chathead = string
    export type Player = string
    export type PlayerJSON = {
      activities: PlayerActivites
      skills: PlayerSkills
    }
    export type PlayerActivites<K extends string = Activities> = {
      [key in K]: Activity
    }
    export type PlayerSkills<K extends string = Skills> = { [key in K]: Skill }
    type Skills = typeof hiscores.skills[number]
    type Skill = {
      rank: number
      level: number
      experience: number
    }
    export type Gamemode = typeof hiscores.gamemodes[number]

    // Oldschool RuneScape
    type OSRSActivities = typeof osrs.hiscores.activities[number]
    type OSRSActivity = {
      rank: number
      count: number
    }
    type OSRSBosses = typeof osrs.hiscores.bosses[number]
    type OSRSBoss = {
      rank: number
      count: number
    }
    export type OSRSPlayer = string
    export type OSRSPlayerJSON = {
      activities: OSRSPlayerActivites
      bosses: OSRSPlayerBosses
      skills: OSRSPlayerSkills
    }
    export type OSRSPlayerActivites<K extends string = OSRSActivities> = {
      [key in K]: OSRSActivity
    }
    export type OSRSPlayerBosses<K extends string = OSRSBosses> = {
      [key in K]: OSRSBoss
    }
    export type OSRSPlayerSkills<K extends string = OSRSSkills> = {
      [key in K]: OSRSSkill
    }
    type OSRSSkills = typeof osrs.hiscores.skills[number]
    type OSRSSkill = {
      rank: number
      level: number
      experience: number
    }
    export type OSRSGamemode = typeof osrs.hiscores.gamemodes[number]
  }
  export namespace Miscellaneous {
    export type TotalUsers = { accounts: number; accountsformatted: string }
  }
  export namespace RuneMetrics {
    export type MonthlyExperience = {
      monthlyXpGain: MonthlyExperienceGain[]
      loggedIn: string
    }
    export type MonthlyExperienceGain = {
      skillId: number
      totalXp: number
      averageXpGain: number
      totalGain: number
      monthData: any[]
    }
    export type Profile = {
      magic: number
      questsstarted: number
      totalskill: number
      questscomplete: number
      questsnotstarted: number
      totalxp: number
      ranged: number
      activities: ProfileActivities[]
      skillvalues: ProfileSkills[]
      name: string
      rank: string
      melee: number
      combatlevel: number
      loggedIn: string
    }
    type ProfileActivities = {
      date: string
      details: string
      text: string
    }
    export type ProfileSkills = {
      level: number
      xp: number
      rank: number
      id: number
    }
    export type Quests = {
      quests: Quest[]
      loggedIn: string
    }
    export type Quest = {
      title: string
      status: RuneScape.RuneMetrics.QuestStatus
      difficulty: number
      members: boolean
      questPoints: number
      userEligible: boolean
    }
  }
}

export namespace RuneScape {
  export namespace GrandExchange {}

  export namespace Hiscores {
    export type Skill = typeof hiscores.skills[number]
  }

  export namespace RuneMetrics {
    export type ProfileActivities = {
      title: string
      description: string
      date: string
    }
    export type ProfileSkills<K extends string = Hiscores.Skill> = {
      [key in K]: {
        rank: number
        level: number
        experience: number
      }
    }

    export type ProfileQuests = {
      complete: number
      started: number
      not_started: number
    }

    export type ProfileOverall = {
      rank: number
      level: number
      experience: number
    }

    export type ProfileExperienceDistribution = {
      magic: number
      melee: number
      ranged: number
    }

    export type QuestStatus = typeof runemetrics.questStatuses[number]
  }
}

// TODO: Extract this to it's own package @pqt/types
export type AlphaNumeric = LowercaseLetter | UppercaseLetter | SingleNumeric
export type Letter = LowercaseLetter | UppercaseLetter
export type LowercaseLetter =
  | "a"
  | "b"
  | "c"
  | "d"
  | "e"
  | "f"
  | "g"
  | "h"
  | "i"
  | "j"
  | "k"
  | "l"
  | "m"
  | "n"
  | "o"
  | "p"
  | "q"
  | "r"
  | "s"
  | "t"
  | "u"
  | "v"
  | "w"
  | "x"
  | "y"
  | "z"

export type UppercaseLetter =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z"

export type SingleNumeric = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
