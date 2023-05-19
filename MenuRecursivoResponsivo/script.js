const container = document.getElementById("container");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();


const comidas = [
    {
        nombre: "Macarrones",
        img: "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg"
    },
    {
        nombre: "Pizza",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7-18uhQBshQdfFRgRRciaLghKoajjI9A3g&usqp=CAU"
    },
    {
        nombre: "Haburguesa",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/640px-NCI_Visuals_Food_Hamburger.jpg"
    },
    {
        nombre: "Tacos",
        img: "https://www.piloncilloyvainilla.com/wp-content/uploads/2018/08/tacos-de-coliflor-rostizada-53-of-57.jpg"
    },
    {
        nombre: "Tamales",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnmSKS3Nw6bTus6B4WQ31g7GCW7GXBygyEQ&usqp=CAU"
    },
    {
        nombre: "Tamales",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnmSKS3Nw6bTus6B4WQ31g7GCW7GXBygyEQ&usqp=CAU"
    },
    {
        nombre: "Tamales",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnmSKS3Nw6bTus6B4WQ31g7GCW7GXBygyEQ&usqp=CAU"
    },
    {
        nombre: "Tamales",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnmSKS3Nw6bTus6B4WQ31g7GCW7GXBygyEQ&usqp=CAU"
    },
    {
        nombre: "Tamales",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJnmSKS3Nw6bTus6B4WQ31g7GCW7GXBygyEQ&usqp=CAU"
    },
];

comidas.forEach((comida,index) => {
    template.querySelector("div").setAttribute("class",`card card${index}`); // Establecemos las clases del contenedor
    template.querySelector("h2").textContent = comida.nombre; // Establecemos el h2 con el nombre de la comida
    template.querySelector("div img").setAttribute("src",comida.img) // Establecemos el src con el url de la imagen
    template.querySelector("div img").setAttribute("alt",(comida.nombre).toLowerCase()) // Establecemos el alt con el nombre de la comida y lo cambamos a minusculas
    const clone = template.cloneNode(true); // Creamos una constante que clone el nodo del templa que nos sirve para crear documentos fragmentados
    fragment.appendChild(clone); // Fragmentamos el elementos clonado
})

container.appendChild(fragment); // Agregamos el elemento al contenedor