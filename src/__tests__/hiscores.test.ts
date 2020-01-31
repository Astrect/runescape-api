import { hiscores } from ".."

const defaultChathead = `https://secure.runescape.com/m=avatar-rs/default_chat.png?`

test("Invalid display name will show default chathead", () => {
  return hiscores.avatar("Moderator").then(avatar => {
    expect(avatar).toBe(defaultChathead)
  })
})
