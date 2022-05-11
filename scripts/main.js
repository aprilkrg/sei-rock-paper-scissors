console.log("start of page")

const getUserInput = function(){
    console.log("get user input")
    console.log(document.querySelector("#choice-input"), '<<< input el')
}

/* 
GAME FUNCTION
jobs:
- log target of click event
- invoke getUserInput function
- save return from userInput to variable
*/
const gameFunction = function(e){
    console.log(e.target, "<< clicked")
    let userChoice = getUserInput()
}

/*
DOMContentLoaded EVENT LISTENER
jobs:
- console log message for dev
- query DOM for startBtn 
- save selected DOM element to variable
- add event listener to that variable which invokes gameFunction
*/
document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js loaded!")
    const startBtn = document.querySelector("#startBtn")
    startBtn.addEventListener("click", gameFunction)
})