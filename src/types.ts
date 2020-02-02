declare namespace RS {
  export type Avatar = string
  export type Gamemode = "normal" | "ironman" | "hardcore"
  export type Skills = {
    overall: Skill
    attack: Skill
    defence: Skill
    strength: Skill
    hitpoints: Skill
    ranged: Skill
    prayer: Skill
    magic: Skill
    cooking: Skill
    woodcutting: Skill
    fletching: Skill
    fishing: Skill
    firemaking: Skill
    crafting: Skill
    smithing: Skill
    mining: Skill
    herblore: Skill
    agility: Skill
    thieving: Skill
    slayer: Skill
    farming: Skill
    runecrafting: Skill
    hunter: Skill
    construction: Skill
    summoning: Skill
    dungeoneering: Skill
    divination: Skill
    invention: Skill
  }
  export type Skill = {
    rank: number
    level: number
    experience: number
  }
}
