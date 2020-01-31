import { parseJagexPlayerToJSON } from "../adapters/Jagex"

export class Player {
  activities: any
  skills: any

  constructor(jagexPlayer: string) {
    const { activities, skills } = parseJagexPlayerToJSON(jagexPlayer)

    this.activities = activities
    this.skills = skills
  }
}
