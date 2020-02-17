/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(time) {
  let splitTime = time.split(':') //=> '12:00' would become ['12', '00']
  let intTime = parseInt(splitTime[0]) // Only selects first element of array
  if (intTime < 12 ) {
    return "Good Morning"
  }if (intTime > 17) {
    return "Good Evening"
  }else {
    return "Good Afternoon"
  }
}

function displayMessage(string) {
  const greeting = document.querySelector("#greeting")
  greeting.innerText = string
  }