**This script is created for research and education purposes. Abusive usage of this script is not tolerated and the author is not responsible for any damage or harm caused due to usage of the script.**

# blooklet-utility-mod
A userscript for Blooklet, compatible with tampermonkey.

## Why do some features stop working after I join a game?
> Features such as skin unlocks work by intercepting blooket's request to its server and modifying the response data to unlock skins. This request only happens once, so once the request is made, the feature can no longer be enabled/disabled.

# Features
- Easy to use mod menu, just use tampermonkey/paste in console
- Showing quiz data
  - Favourites, play count, internal ID, name, description
  - View all questions and answers in new tab(login required)
- Unlock all skins
> The ability to unlock skins requires the name of the skin to be known, include those of which that are hidden. If you know a skin name and would like to contribute, please open an issue and it will be added. 

# Usage
## Tampermonkey
1. Install [Tampermonkey](https://www.tampermonkey.net/).
2. Add the contents of index.js to tampermonkey.
3. Restart your browser.
4. Open https://www.blooket.com/play/
5. Use right ctrl to activate/disactivate the menu.

## Console
1. Press Ctrl + Shift + I to open devtools.
2. Open console.
3. Vue.js V2 is required for this mod. Fetch Vue.js and evaluate its contents.
```js
fetch("https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js")
.then((r) => r.text()
.then((r) => eval(r)))
```
4. Copy and paste contents of index.js into your console.
