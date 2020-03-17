import {
  RuneMetricsMonthlyExperience,
  RuneMetricsProfile,
  Skill,
  Quest,
} from "../../lib/RuneScape"
import { runemetrics } from "../../runescape"

test("Fetch player's RuneMetrics profile", async () => {
  return runemetrics.getProfile("Conundrum129").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(RuneMetricsProfile)
  })
})

test("Fetch player's RuneMetrics monthly skill XP gain", async () => {
  return runemetrics
    .getMonthlyXp("Conundrum129", new Skill("woodcutting"))
    .then(data => {
      expect(data).toBeDefined()
      expect(data).toBeInstanceOf(RuneMetricsMonthlyExperience)
    })
})

test("Fetch player's RuneMetrics monthly skill XP gain", async () => {
  return runemetrics.getQuests("Conundrum129").then(data => {
    expect(data).toBeDefined()
    data.forEach(item => {
      expect(item).toBeInstanceOf(Quest)
    })
  })
})
