import { Jagex } from "../types"

export class Player {
  name: string
  activities: Jagex.Hiscores.OSRSPlayerActivites
  bosses: Jagex.Hiscores.OSRSPlayerBosses
  skills: Jagex.Hiscores.OSRSPlayerSkills

  constructor(name: string, player: Jagex.Hiscores.OSRSPlayerJSON) {
    this.name = name
    this.activities = player.activities
    this.bosses = player.bosses
    this.skills = player.skills
  }
}
