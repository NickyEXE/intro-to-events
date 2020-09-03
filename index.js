const tacoButton = document.querySelector("#taco")
const ul = document.getElementById("blobs")
const emojiForm = document.getElementById("emoji-form")

const initialEmojis = ["🍓", "🍕", "🥔", "😋", "🚽", "💪"]
initialEmojis.forEach(addEmoji)



// document.addEventListener("click", (event) => {
//     event.target.innerText = "🌮"
// })

tacoButton.addEventListener("click", () => {
  addEmoji("🌮")
})

// Closures
// function addEmoji(emoji){
//   const li = document.createElement("li")
//   li.innerText = emoji
//   ul.appendChild(li)
//   li.addEventListener("dblclick", () => li.remove())
// }

function addEmoji(emoji){
  ul.innerHTML += `<li>${emoji}</li>`
}

ul.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "LI"){
    e.target.remove()
  }
})

// document.querySelector("li").addEventListener("click", (e) => {
//   e.target.style.backgroundColor = "yellow"
// })

emojiForm.addEventListener("submit", (e) => {
  e.preventDefault()
  addEmoji(e.target.emoji.value)
  emojiForm.reset()
})
