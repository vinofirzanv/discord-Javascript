// document.getElementById("count-el").innerText=10

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totals = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = " " + count + " - " 
    saveEl.innerText += countStr
    countEl.innerText = 0
    count = 0
    console.log(count)
}

// function total(){
//     totals =+ count
//     totalEl.innerHTML += totals
// }

let testing = document.getElementById("test")

let kalimat= "halo halo "
let nama = "Vino"

testing.innerText = kalimat + nama

