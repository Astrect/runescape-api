import { bestiary } from "../configs/runescape"
import { Jagex, RuneScape } from "../types"

export class Area {
  name: string

  constructor(area: Jagex.Bestiary.Area) {
    this.name = area
  }
}

export class Beast {
  id: number
  name: string
  examine?: string
  members?: boolean
  level?: number
  attack?: number
  defence?: number
  magic?: number
  ranged?: number
  lifepoints?: number
  xp?: string
  areas?: Jagex.Bestiary.Areas
  animations?: Jagex.Bestiary.Animations
  size?: number
  attackable?: boolean
  aggressive?: boolean
  poisonous?: boolean
  weakness?: Weakness

  constructor(beast: Jagex.Bestiary.Beast) {
    this.id = beast.id
    this.name = beast.name
    this.examine = beast.description
    this.members = beast.members

    this.level = beast.level
    this.attack = beast.attack
    this.defence = beast.defence
    this.magic = beast.magic
    this.ranged = beast.ranged
    this.lifepoints = beast.lifepoints
    this.xp = beast.xp

    this.areas = beast.areas
    this.animations = beast.animations

    this.size = beast.size

    this.attackable = beast.attackable
    this.aggressive = beast.aggressive
    this.poisonous = beast.poisonous
    this.weakness = beast.weakness ? new Weakness(beast.weakness) : undefined
  }

  get meta() {
    return {
      id: this.id,
      name: this.name,
      examine: this.examine,
      members: this.members,
    }
  }

  get combatModifiers() {
    return {
      attackable: this.attackable,
      aggressive: this.aggressive,
      poisonous: this.poisonous,
      weakness: this.weakness,
    }
  }

  get combatStats() {
    return {
      magic: this.magic,
      defence: this.defence,
      ranged: this.ranged,
      attack: this.attack,
      lifepoints: this.lifepoints,
    }
  }
}

export class BeastSearchResult {
  id: number
  name: string

  constructor(beast: Jagex.Bestiary.BeastBySearch) {
    this.id = beast.value
    this.name = beast.label
  }
}

export class SlayerCategory {
  id: number
  name: string

  constructor(category: string | number) {
    if (typeof category === "string") {
      const [{ id }] = bestiary.slayerCategories.filter(
        ({ name }) => name === category
      )

      this.id = id
      this.name = category
    } else {
      const [{ id, name }] = bestiary.slayerCategories.filter(
        ({ id }) => id === category
      )

      this.id = category
      this.name = name
    }
  }
}

export class Weakness {
  id: number
  name: string

  constructor(weakness: Jagex.Bestiary.Weakness | number) {
    if (typeof weakness === "string") {
      this.id = bestiary.weaknesses.indexOf(weakness)
      this.name = weakness
    } else {
      this.id = weakness
      this.name = bestiary.weaknesses[weakness]
    }
  }
}
