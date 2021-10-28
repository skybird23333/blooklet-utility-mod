**This script is created for research and education purposes. Abusive usage of this script is not tolerated and the author is not responsible for any damage or harm caused due to usage of the script.**

# blooklet-utility-mod
A userscript for Blooklet, compatible with tampermonkey.

# Features
**Due to state management, some features will not work until joining the quiz, and some will have to be configured before joining the quiz. Please read each module's description.**
- Show quiz metadata
- Unlock partial skins

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
