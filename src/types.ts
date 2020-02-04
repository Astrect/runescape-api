import { hiscores, bestiary } from "./configs/runescape"
import { SlayerCategory } from "./lib/RuneScape"

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
    export type Weakness = typeof bestiary.weaknesses[number]
  }
  export namespace Clan {}
  export namespace GrandExchange {}
  export namespace Hiscores {}
  export namespace RuneMetrics {}
}
