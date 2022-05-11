console.log("start of page")

document.addEventListener("DOMContentLoaded", () => {
    console.log("main.js loaded!")
    const startBtn = document.querySelector("#startBtn")
    startBtn.addEventListener("click", (e) => {
        console.log(e.target, "<< clicked")
    })
})