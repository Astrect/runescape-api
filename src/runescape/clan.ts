import got from "got"
import { clan } from "../configs/runescape"
import { ClanMember } from "../lib/RuneScape"
import { Jagex } from "../types"
import { parseJagexClanToArray } from "../utils/Jagex"

export const getMembers = async (search: string) => {
  if (typeof search !== "string") {
    throw new TypeError("Search parameter must be a string")
  }

  try {
    const members = await got<Jagex.Clan.Members>(clan.endpoints.members, {
      searchParams: {
        clanName: search,
      },
    })

    const membersArray = parseJagexClanToArray(members.body)

    return membersArray.map(
      (member: Jagex.Clan.Member) => new ClanMember(member)
    )
  } catch (error: unknown) {
    throw error
  }
}
