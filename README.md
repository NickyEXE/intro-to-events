# Key Questions
* Let's look at some cool JavaScript stuff with events
* What is an event in JavaScript?
  * What kinds of events are there in the DOM?
     * https://codepen.io/telegram/pen/PJpPGm
     * https://developer.mozilla.org/en-US/docs/Web/Events
* How do I make some code run when an event occurs in my DOM?
* How can I listen for events on a DOM node / HTML element?
* What calls the callback that I pass to addEventListener? What gets passed into that callback?
* What is event.preventDefault() and why is it useful?
* What is the DOMContentLoaded event and why is it cool?

# Key Questions: Lecture 2!
* What will happen if I += the innerHTML of an element with children that have event handlers?
* What is event bubbling and why is it important to know about?
  * https://javascript.info/bubbling-and-capturing
  * https://codepen.io/telegram/pen/maJxVV
  * What does event.stopPropagation() do and why should I avoid using it?
* How do we add event listeners to a set of items that may change?
  * Event Delegation
  * Closures
* What's the dataset?

# Silly Deliverables
As a user I want...

* to alert "HELLO!" when I click the button
* to hear a sound when I scroll (see `audio.js`, especially `makeSound()`)
* anything I click on should have an emoji added to its innerText
* to hover over any li and have its background color change to pink
* to alert "YUM" when I click a taco
* to make my H1 editable when double clicked

### Nicky stole this lecture from Graham Troyer-Joy and Eric Kim
