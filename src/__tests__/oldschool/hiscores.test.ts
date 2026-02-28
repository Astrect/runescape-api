import { Player } from "../../lib/Oldschool"
import { hiscores } from "../../osrs"

/**
 * Commented out because Jagex servers aren't completing this in time.
 */
// test("Fetch normal player by name (string)", async () => {
//   return hiscores.getPlayer("Zezima").then(data => {
//     expect(data).toBeDefined()
//     expect(data).toBeInstanceOf(Player)
//   })
// })

test("Fetch ironman player by name (string)", async () => {
    return hiscores.getPlayer("Fauxcus", "ironman").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})

test("Fetch hardcore ironman player by name (string)", async () => {
    return hiscores.getPlayer("Lost Fauxcus", "hardcore").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})

test("Fetch ultimate ironman player by name (string)", async () => {
    return hiscores.getPlayer("Swampletics", "ultimate").then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Player)
    })
})