import { Item, ItemGraph } from "../../lib/RuneScape"
import { grandexchange } from "../../runescape"

test("Fetch all grand exchange categories", async () => {
    return grandexchange.getCategories().then(data => {
        expect(data).toBeDefined()
    })
})

test("Fetch item details", async () => {
    return grandexchange.getItem(4151).then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(Item)
    })
})

test("Fetch item price history graph details", async () => {
    return grandexchange.getItemGraph(4151).then(data => {
        expect(data).toBeDefined()
        expect(data).toBeInstanceOf(ItemGraph)
    })
})