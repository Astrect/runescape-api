import { Player } from "../../lib/RuneScape"
import { hiscores } from "../../runescape"

test("Fetch normal player by name (string)", async () => {
    return hiscores.getPlayer("Zezima").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})

test("Fetch ironman player by name (string)", async () => {
    return hiscores.getPlayer("Aj", "ironman").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})

test("Fetch hardcore player by name (string)", async () => {
    return hiscores.getPlayer("Bo2", "hardcore").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})

test("Fetch Leagues player by name (string)", async () => {
    return hiscores.getPlayer("Astrect", "leagues").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})