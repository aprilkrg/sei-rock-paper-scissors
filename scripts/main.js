console.log("start of page")

const gameFunction = function(e){
    console.log(e.target, "<< clicked")

}
document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js loaded!")
    const startBtn = document.querySelector("#startBtn")
    startBtn.addEventListener("click", gameFunction)
})