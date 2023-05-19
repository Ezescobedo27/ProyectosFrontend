const images = document.querySelectorAll(".img");
const container = document.querySelector(".container-img");
const cerrar = document.getElementById("cerrar");

images.forEach((image) => {
    image.addEventListener("click", (e) => {
        let imgActual = e.target.src
        let pActual = e.target.alt
        container.querySelector("img").src = imgActual;
        container.querySelector("p").textContent = pActual;
        container.classList.remove("desaparecer-container")
        
    })
})

document.addEventListener("click", e => {
    console.log(e.target)
    if(e.target === cerrar) {
        container.classList.add("desaparecer-container");
    }
    if(e.target === container) {
        container.classList.add("desaparecer-container");
    }
})