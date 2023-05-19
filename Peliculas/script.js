let pagina = 1;
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

btnSiguiente.addEventListener("click", () => {
    if(pagina < 1000) {
        pagina++;
        cargarPeliculas();
    }
    
})

btnAnterior.addEventListener("click", () => {
    if(pagina > 1) {
        pagina--;
        cargarPeliculas()
    }
    
})
const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=9cf81ba403b43e0424f5f60f366246b1&language=es-MX&page=${pagina}`);
        console.log(respuesta);

        if(respuesta.status === 200) {
            const datos = await respuesta.json();
            
            let peliculas = '';
            datos.results.forEach(pelicula => {
                peliculas += 
                `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                    <button class="button-watch">Mirar</button>
                </div>
                `
            });

            document.getElementById("contenedor").innerHTML = peliculas;
        }
        else if(respuesta.status === 401) {
            console.log("La llave esta mal escrita");
        }
        else if(respuesta.status === 404) {
            console.log("La pelicula no existe");
        }
        else {
            console.log("Error desconocido");
        }
    }

    catch(err) {
        console.error(err);
    }
}

cargarPeliculas();