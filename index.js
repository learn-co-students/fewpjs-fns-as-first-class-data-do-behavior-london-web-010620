/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  let timeAsInt = parseInt(time.split(":")[0])
  if(timeAsInt < 12) {
    return "Good Morning"
  }
  else if (timeAsInt > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
  
}

function displayMessage(message) {
  const greeting = document.querySelector('#greeting')
  greeting.innerText = message
}