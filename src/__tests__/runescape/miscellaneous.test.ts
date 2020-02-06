import { miscellaneous } from "../../runescape"

test("Miscellaneous: Successfully fetch custom avatar URL with ID", async () => {
  return miscellaneous.getAvatar("Tuffty").then(avatar => {
    expect(avatar).toBeDefined()
    expect(avatar).toBe(
      `https://secure.runescape.com/m=avatar-rs/avatar.png?id=24063142`
    )
  })
})

test("Miscellaneous: Successfully fetch default avatar URL", async () => {
  return miscellaneous.getAvatar("Moderator").then(avatar => {
    expect(avatar).toBeDefined()
    expect(avatar).toBe(
      `https://secure.runescape.com/m=avatar-rs/default_chat.png?`
    )
  })
})

test("Miscellaneous: Expect TypeError on non-string avatar search parameters", async () => {
  // @ts-ignore-next-line
  return miscellaneous.getAvatar(0).then(avatar => {
    expect(avatar).toBeInstanceOf(TypeError)
  })
})

test("Miscellaneous: Successfully fetch total users", async () => {
  // @ts-ignore-next-line
  return miscellaneous.getTotalUsers().then(users => {
    expect(users).toBeDefined()
    expect(users).toBeGreaterThanOrEqual(278186943)
  })
})
