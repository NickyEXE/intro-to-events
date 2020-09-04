const tacoButton = document.querySelector("#taco")
const ul = document.getElementById("blobs")
const emojiForm = document.getElementById("emoji-form")
const commentForm = document.getElementById("comment-form")
const comments = document.getElementById("comments")

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
//   let counter = 0
//   ul.appendChild(li)
//   li.addEventListener("click", () => {
//     counter ++
//     console.log(`${emoji} says ${counter}`)
//   })
// }

function addEmoji(emoji){
  ul.innerHTML += `<li data-emoji=${emoji}>${emoji}</li>`
}

ul.addEventListener("click", (e)=> {
  if (e.target.dataset.emoji === "🌮"){
    alert("YUMMMMM")
  }
})

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

commentForm.addEventListener("submit", (e) => {
  e.preventDefault()
  addComment(commentForm.comment.value, commentForm.initialClicks.value)
  commentForm.reset()
})

function addComment(comment, numClicks){
  comments.innerHTML += `<li data-comment=${comment} data-num-clicks=${numClicks}>${numClicks}: ${comment}</li>`
}

comments.addEventListener("click", (e) => {
  if (e.target.tagName == "LI"){
    e.target.dataset.numClicks++
    e.target.innerText = `${e.target.dataset.numClicks}: ${e.target.dataset.comment}`
  }
})

{/* <li>47: This is how many times I've been clicked</li> */}
