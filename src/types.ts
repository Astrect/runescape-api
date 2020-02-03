import { runescape as RSConfigs } from "./configs"

export type Activities = typeof RSConfigs.hiscores.activities[number]
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
export type Skills = typeof RSConfigs.hiscores.skills[number]
export type Skill = {
  rank: number
  level: number
  experience: number
}
