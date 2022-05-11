console.log("start of page")

/*
GET USER INPUT
jobs:
- console log message for dev
- query DOM for input element && save selected DOM element to variable
- baby step: log value property of selected DOM element
*/
const getUserInput = function(){
    console.log("get user input")
    // console.log(document.querySelector("#choice-input"), '<<< input el')
    const selection = document.querySelector("#choice-input")
    console.log(selection.value, "<< value from input")
}

/* 
GAME FUNCTION
jobs:
- log target of click event
*/
const gameFunction = function(e){
    console.log(e.target, "<< game start clicked")
}

/*
DOMContentLoaded EVENT LISTENER
jobs:
- console log message for dev
- query DOM for startBtn && save selected DOM element to variable
- add event listener to that variable which invokes gameFunction
- query DOM for submitBtn && save selected DOM element to variable
- add event listener to that variable which invokes getUserInput
*/
document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js loaded!")
    const startBtn = document.querySelector("#startBtn")
    startBtn.addEventListener("click", gameFunction)
    const submitBtn = document.querySelector("#submitBtn")
    submitBtn.addEventListener("click", getUserInput)
})