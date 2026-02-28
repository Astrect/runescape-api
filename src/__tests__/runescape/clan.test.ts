import { ClanMember } from "../../lib/RuneScape"
import { clan } from "../../runescape"

test("Fetch all clan members by name (string)", async () => {
    return clan.getMembers("Royal 58").then(data => {
        expect(data).toBeDefined()

        data.forEach(item => {
            expect(item).toBeInstanceOf(ClanMember)
        })
    })
})