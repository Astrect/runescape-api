import { grandexchange } from "../../runescape"
import { GrandExchangeCategory } from "../../lib/RuneScape"

test("Fetch all grand exchange categories", async () => {
  return grandexchange.getCategories().then(data => {
    expect(data).toBeDefined()
  })
})

// test("GE", async () => {
//   const category = new GrandExchangeCategory("Prayer armour")

//   return grandexchange.getCategoryItems(category, "A").then(data => {
//     expect(data).toBeDefined()

//     data.forEach(item => {
//       expect(item).toBeInstanceOf()
//     });
//   })
// })
