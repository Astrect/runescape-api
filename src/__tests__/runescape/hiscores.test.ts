// import { hiscores } from "../../runescape"
// import { Player } from "../../utils/Player"

// const DEFAULT_CHATHEAD = `https://secure.runescape.com/m=avatar-rs/default_chat.png?`
// const TUFFTY_CHATHEAD = `https://secure.runescape.com/m=avatar-rs/avatar.png?id=24063142`
// const JMOD_ALLSTAR_CHATHEAD = `https://secure.runescape.com/m=avatar-rs/avatar.png?id=19905726`

// test("Avatar: Invalid name will return default chathead", () => {
//   return hiscores.getAvatar("Moderator").then(avatar => {
//     expect(avatar).toBe(DEFAULT_CHATHEAD)
//   })
// })

// test("Avatar: Valid name will return correct chathead", () => {
//   return hiscores.getAvatar("Tuffty").then(avatar => {
//     expect(avatar).toBe(TUFFTY_CHATHEAD)
//   })
// })

// test("Avatar: JMod name will return correct chathead", () => {
//   return hiscores.getAvatar("Mod Allstar").then(avatar => {
//     expect(avatar).toBe(JMOD_ALLSTAR_CHATHEAD)
//   })
// })

// test("Player: Invalid name will return error", () => {
//   return hiscores.player("Moderator").then(player => {
//     expect(player).toBeInstanceOf(Error)
//   })
// })

// test("Player: Valid name will return instance of Player class", () => {
//   return hiscores.player("Paqt").then(player => {
//     expect(player).toBeInstanceOf(Player)
//   })
// })

// test("Player: JMod name will return error", () => {
//   return hiscores.player("Mod Allstar").then(player => {
//     expect(player).toBeInstanceOf(Error)
//   })
// })
