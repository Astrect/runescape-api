# Miscellaneous

## Usage

```javascript
import { miscellaneous } from "runescape-api"
```

## Functions

### getAvatar\(:playerName\) <a id="getavatar-playername"></a>

> Retrieve a player's avatar URL

| Parameter | Type |
| :--- | :--- |
| `playerName` | `string` |

{% tabs %}
{% tab title="JavaScript" %}
```javascript
miscellaneous.getAvatar("Conundrum129").then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```
https://secure.runescape.com/m=avatar-rs/avatar.png?id=18857418
```
{% endtab %}
{% endtabs %}

### getTotalUsers\(\) <a id="gettotalusers"></a>

> Retrieve the total registered RuneScape accounts

{% tabs %}
{% tab title="JavaScript" %}
```javascript
miscellaneous.getTotalUsers().then(data => {
    console.log(data)
})
```
{% endtab %}

{% tab title="Response" %}
```
278497947
```
{% endtab %}
{% endtabs %}



