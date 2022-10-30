const API = "https://api.thecatapi.com/v1/breeds/"


const image = document.querySelector("#image")
const catName = document.querySelector("#name")
const text = document.querySelector("#text")
const button = document.querySelector("#button")
const container = document.querySelector("#container")

window.addEventListener("load", async function(e) {
    e.preventDefault()

    await fetch(API)
    .then((response) => response.json())
    .then((data) => {
        image.src = data.url
        catName.textContent = data.name
        text.textContent = data.description
    })

    .catch((error) => {
        console.log("Error")
    })
})




