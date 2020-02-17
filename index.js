/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(time) {
  let timeSplit = time.split(':')
  let value = parseInt(timeSplit[0])
  if (value < 12) {
    return "Good Morning"
  }if (value > 17 )
  return "Good Evening"
  else
  return "Good Afternoon"
}
function displayMessage(string) {
  const greeting = document.querySelector('#greeting')
  greeting.innerText = string
}