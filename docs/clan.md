# Clan

## Usage

```javascript
import { clan } from "runescape-api"
```

## Functions

### getMembers\(:clanName\) <a id="getmembers-clanname"></a>

> List all clan members

{% tabs %}
{% tab title="JavaScript" %}
```javascript
clan.getMembers("Royal 58").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```javascript
[
  ClanMember {
    name: 'Conundrum129',
    rank: 'Owner',
    experience: 695552733,
    kills: 0
  },
  ClanMember {
    name: 'I50RitaWendt',
    rank: 'Deputy Owner',
    experience: 414968518,
    kills: 3204
  },
  ClanMember {
    name: 'Good Potato',
    rank: 'Overseer',
    experience: 32816425,
    kills: 0
  },
  ClanMember {
    name: 'Emagnifesin',
    rank: 'Coordinator',
    experience: 15144845,
    kills: 0
  },
  // ... 100+ more items
]
```
{% endtab %}
{% endtabs %}

