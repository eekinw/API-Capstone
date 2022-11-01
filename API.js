const API = "https://api.thecatapi.com/v1/breeds"


fetch(API).then((data) => {
    // console.log(data)

    return data.json()
}).then((completedata) => {
    // console.log(completedata);

    let data1 = "";
    completedata.map((data)=> {
        data1 += ` 
        <div class="card">
        <img class="images" src="${data.url}" alt="">
        <h2 class="name">${data.name}</h2>
        <p class="description">${data.description}</p>
        <button id="btn">
        <a href="${data.url}">Profile</a>
        </button>
    </div> `
    })

    document.getElementById("cards").innerHTML = data1;

}).catch((error) => {
    console.log(error)
})