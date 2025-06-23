const imgPokemon    = document.getElementById('pokemon-image')
const inputGuess    = document.getElementById('guess-input')
const btnSubmit     = document.getElementById('submit-btn')
const btnNext       = document.getElementById('next-btn')
const feedbackEl    = document.getElementById('feedback')
const scoreEl       = document.getElementById('score')
const attemptsEl    = document.getElementById('attempts')
const soundCorrect  = document.getElementById('correct-sound')
const soundWrong    = document.getElementById('wrong-sound')

let currentPokemon = null
let score   = 0
let attempts = 0

const pokemonList = [
  { id: 1,   name: 'bulbasaur'   },
  { id: 4,   name: 'charmander'  },
  { id: 7,   name: 'squirtle'    },
  { id: 6,   name: 'charizard'   },
  { id: 24,  name: 'arbok'       },
  { id: 25,  name: 'pikachu'     },
  { id: 39,  name: 'jigglypuff'  },
  { id: 52,  name: 'meowth'      },
  { id: 58,  name: 'growlithe'   },
  { id: 94,  name: 'gengar'      },
  { id: 95,  name: 'onix'        },
  { id: 130, name: 'gyarados'    },
  { id: 133, name: 'eevee'       },
  { id: 143, name: 'snorlax'     },
  { id: 150, name: 'mewtwo'      },
  { id: 151, name: 'mew'         }
]

function getRandomPokemon() {
  return pokemonList[Math.floor(Math.random() * pokemonList.length)]
}

function loadPokemon() {
  inputGuess.value = ''
  inputGuess.disabled = false
  btnSubmit.disabled = false
  btnNext.disabled = true
  feedbackEl.textContent = ''
  const { id, name } = getRandomPokemon()
  currentPokemon = name
  imgPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  imgPokemon.classList.remove('revealed')
}

function updateScoreboard() {
  scoreEl.textContent = `Pontos: ${score}`
  attemptsEl.textContent = `Tentativas: ${attempts}`
}

function handleSubmit() {
  const guess = inputGuess.value.trim().toLowerCase()
  attempts++
  updateScoreboard()
  if (guess === currentPokemon) {
    score++
    feedbackEl.textContent = `✅ Certo! Era ${capitalize(currentPokemon)}.`
    soundCorrect.play()
    imgPokemon.classList.add('revealed')
    inputGuess.disabled = true
    btnSubmit.disabled = true
    btnNext.disabled = false
  } else {
    feedbackEl.textContent = `❌ Errado! Tente de novo.`
    soundWrong.play()
  }
}

function handleNext() {
  loadPokemon()
  updateScoreboard()
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

btnSubmit.addEventListener('click', handleSubmit)
btnNext.addEventListener('click', handleNext)
window.addEventListener('DOMContentLoaded', () => {
  updateScoreboard()
  loadPokemon()
})
