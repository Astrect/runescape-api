import { PlayerActivites, PlayerSkills } from "../types"
import { parseJagexPlayerToJSON } from "./Jagex"

export class Player {
  activities: PlayerActivites
  skills: PlayerSkills
  name: string

  constructor(name: string, jagexPlayer: string) {
    const { activities, skills } = parseJagexPlayerToJSON(jagexPlayer)

    this.name = name
    this.activities = activities
    this.skills = skills
  }
}
