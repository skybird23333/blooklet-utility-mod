// ==UserScript==
// @name         Blooklet Utility Mod
// @version      0.2.1
// @description  This script is created for research and educational purposes. Abusive usage of this script is not tolerated and the author is not responsible for any damage or harm caused due to usage of the script.
// @author       https://github.com/skybird23333
// @match        https://www.blooket.com/play*
// @require      https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js
// @updateURL    https://raw.githubusercontent.com/skybird23333/blooklet-utility-mod/main/index.js
// @grant        none
// ==/UserScript==

/**
 * This script is created for research and educational purposes.
 * Abusive usage of this script is not tolerated and the author is not responsible for any damage or harm caused due to usage of the script.
 */

/* eslint-disable */

// Create the menu element and append it to body
const style = document.createElement('style')
style.innerHTML = `
.active, .collapsible:hover {
  background-color: #ccc;
}

.modContent {
  transition: max-height 0.1s ease-out;
  max-height: 0;
  overflow: hidden;
}

.content {
  width: 250px;
  background-color: white;
  display: inline-block;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid gray;
}

.menu {
  width: 100px;
  border: 1px solid gray;
  background-color: white;
  display: inline-block;
  margin-left: 3px;
}

.menu-option {
  width: 100%;
  border: none;
  background-color: white;
  padding: 4px;
}

.menu-option:hover {
  background-color: rebeccapurple;
  color: white;
}

.menu-option-active {
  background-color: rebeccapurple;
  color: white;
}
`

document.body.appendChild(style)

const elm = document.createElement('div')
elm.id = "amogus"
document.body.appendChild(elm)

Vue.component('quiz-info', {
    template: `
    <div>
        <div v-if="$root.quiz.title">
            <b>{{ $root.quiz.title }}</b> <i>by {{ $root.quiz.author }}</i><br>
            <span style="font-family: Consolas,monaco,monospace;">id: {{ $root.quiz._id }}</span>
            {{ $root.quiz.desc }}<br>
            <b>Play count</b> {{ $root.quiz.playCount }} <br>
            <b>Favourite count</b> {{ $root.quiz.favouriteCount || 0 }} <br>
            <b>Private:</b> {{ $root.quiz.private }} <br>
            <a :href="'https://www.blooket.com/set/' + $root.quiz._id">View quiz</a>
            <a :href="'https://www.blooket.com/host?id=' + $root.quiz._id">Host quiz</a>
        </div>
        <div v-else="">
            <b>Quiz data not available.</b>
            Please join a game first. Make sure the menu is loaded before you join a game.
        </div>
    </div>
     `
})

Vue.component('skin-unlocks', {
    template: `
    <div>
        <div v-if="$root.skin.fetched">
          <input type="checkbox" disabled :checked="$root.skin.unlock"> Whether or not to unlock partial skins. You can only change skin unlock settings before joining the game. Refer to README.
        </div>
        <div v-else>
          <input type="checkbox" v-model="$root.skin.unlock"> Whether or not to unlock partial skins. <b>This option will be disabled upon joining a game. Refer to README.</b>
        </div>
    </div>
     `
})

Vue.component('quiz-answers', {
    template: `
    <div>
        <b>Work in progress</b>
    </div>
    `,
})

window.aapp = new Vue({
    el: "#amogus",
    template: `
    <div style="position:absolute;right:0;bottom:0;">
        <div class="modContent">
            <div class="content" v-if="open_menu">
                <keep-alive>
                    <component :is="open_menu"/>
                </keep-alive>
            </div>
            <div class="content" v-else>
                Choose a module from the right.
            </div>
            <div class="menu">
                <div>
                  <b style="font-size: large">AMOGUS</b>
                  <a href="https://github.com/skybird23333/blooklet-utility-mod" target="_blank" rel="noopener noreferrer">Github</a> <i>v0.2</i>
                </div>
                <button
                  v-for="menuItem in menu"
                  class="menu-option"
                  @click="open_menu = menuItem"
                  :class="[(menuItem === open_menu)? '' : '.menu-option-active']"
                >
                {{ menuItem.replace('-',' ') }}
                </button>
            </div>
        </div>
    </div>
    `,
    data: {
        quiz: {},
        mod_open: false,
        open_menu: null,
        menu: [
            "quiz-info",
            "quiz-answers",
            "skin-unlocks"
        ],
        skin: {
          fetched: false,
          unlock: false
        }
    },
    updated() {
        this.$nextTick(function () {
            this.resizeMenu()
        })
    },
    watch: {
        mod_open() {
          this.resizeMenu()
        },
        quiz() {
          this.resizeMenu()
        }
    },
    mounted() {
        modifyRequestObject(XMLHttpRequest);
        let vm = this

        setInterval(() => {vm.resizeMenu()}, 1000)

        document.addEventListener('keydown', function (event) {
            if (event.code == 'ControlRight') {
                if (vm.mod_open) {
                    vm.mod_open = false
                } else {
                    vm.mod_open = true
                }
            }
        });
    },
    methods: {
        hightlightAnswer() {
            setInterval()
        },
        resizeMenu() {
            const content = document.getElementsByClassName('modContent')[0]
            if (this.mod_open) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = '0';
            }
        }
    }
})

function modifyRequestObject(xhr) {
    let proto = xhr.prototype;
    let _open = proto.open;

    proto.open = function () {
        if (arguments[1].includes("/api/games")) {
            console.log('answer is fetched')
            this.addEventListener("load", function () {
                window.aapp.$data.quiz = JSON.parse(this.responseText)
                console.log(this.responseText)
                for (const question of JSON.parse(this.responseText).questions) {
                    console.log(`${question.question}: ${question.correctAnswers.join(', ')}`)
                }
            })
        }

                const fakeData = {"unlocks":[
                              "Elf", "Witch", "Wizard", "Fairy", "Slime", "Monster", "Jester", "Dragon", "Queen", "Unicorn", "King", //medieval box
                              "Two of Spades", "Eat Me", "Drink Me", "Alice", "Queen of Hearts", "Dormouse", "White Rabbit", "Cheshire Cat", "Caterpillar", "Mad Hatter", "King of Hearts", //wonderland box
                              "Earth", "Meteor", "Stars", "Alien", "Planet", "UFO", "Spaceship", "Astronaut", "Pink Astronaut", "Yellow Astronaut", "Black Astronaut", "Orange Astronaut", "Red Astronaut", "Brown Astronaut", //space box
                              "Old Boot", "Jellyfish", "Clownfish", "Frog", "Crab", "Pufferfish", "Blobfish", "Octopus", "Narwhal", "Baby Shark", "Megalodon", //aquatic box
                              "Toast", "Cereal", "Yogurt", "Breakfast Combo", "Orange Juice", "Milk", "Waffle", "Pancakes", "French Toast", "Pizza", //breakfast box
                              "Lil Bot", "Lovely Bot", "Angry Bot", "Happy Bot", "Watson", "Buddy Bot", "Brainy Bot", "Mega Bot", //bot box
                              "Pumpkin", "Swamp Monster", "Frankenstein", "Vampire", "Zombie", "Mummy", "Werewolf", "Ghost", "Haunted Pumpkin", //spooky box
                              "Sandwich" //sandvich
                                  ],"customBlooks":[]}

        if (arguments[1].includes("/api/users/unlocks")) {
            console.log('[MOD] Skin is fetched')
            window.aapp.$data.skin.fetched = true
            this.addEventListener('readystatechange', function(event) {
                if ( this.readyState === 4 ) {
                    Object.defineProperty(this, 'response',     {writable: true});
                    Object.defineProperty(this, 'responseText', {writable: true});
                    this.response = this.responseText = JSON.stringify(fakeData);
            }
            });
            

        }
        _open.apply(this, arguments);
    }
}
