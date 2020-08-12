import { Player } from "../../lib/RuneScape"
import { hiscores } from "../../runescape"

test("Fetch normal player by name (string)", async () => {
  return hiscores.getPlayer("Zezima").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Player)
  })
})

test("Fetch ironman player by name (string)", async () => {
  return hiscores.getPlayer("Iron Soren", "ironman").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Player)
  })
})

test("Fetch hardcore player by name (string)", async () => {
  return hiscores.getPlayer("J a me s", "hardcore").then(data => {
    expect(data).toBeDefined()
    expect(data).toBeInstanceOf(Player)
  })
})
