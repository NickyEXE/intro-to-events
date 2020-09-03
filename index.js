

const tacoButton = document.querySelector("#taco")
const ul = document.getElementById("blobs")
const form = document.getElementById("emoji-form")

const initialEmojis = ["🍓", "🍕", "🥔", "😋", "🚽", "💪"]
initialEmojis.forEach(addEmoji)

// document.addEventListener("click", (event) => {
//     event.target.innerText = "🌮"
// })

tacoButton.addEventListener("click", () => {
  addEmoji("🌮")
})

function addEmoji(emoji){
  const li = document.createElement("li")
  li.innerText = emoji
  ul.appendChild(li)
}

document.querySelector("li").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "yellow"
})

form.addEventListener("submit", (e) => {
  e.preventDefault()
  addEmoji(e.target.emoji.value)
  form.reset()
})
