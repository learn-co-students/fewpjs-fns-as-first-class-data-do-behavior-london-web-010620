/* Given Code, don't edit */

function handleClick() {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){
  let message
const time = string.split(':')
if (time[0] < 12) {
  message = "Good Morning"
}
else if (time[0] > 17) {
  message = "Good Evening"
}
else {
  message = "Good Afternoon"
}
return message
}

function displayMessage(string) {
const greeting = document.querySelector("#greeting")
greeting.innerText = string
}
