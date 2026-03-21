const STORAGE_POSTS = "publicacionesPerfil";

const inputBuscar = document.getElementById("buscar");
const lista = document.getElementById("lista");

function leerPublicaciones() {
    const guardadas = localStorage.getItem(STORAGE_POSTS);

    if (guardadas) {
        return JSON.parse(guardadas);
    }

    return [];
}
//Codigo para guardar publicaciones de ejemplo, se puede eliminar despues
function renderizarPublicaciones(publicaciones) {
    if (!lista) return;

    lista.innerHTML = "";

    if (publicaciones.length === 0) {
        const mensaje = document.createElement("div");
        mensaje.classList.add("no-resultados");
        mensaje.textContent = "No se encontraron publicaciones.";
        lista.appendChild(mensaje);
        return;
    }

    publicaciones.forEach((publicacion) => {
        const card = document.createElement("div");
        card.classList.add("publicacion");

        if (publicacion.destacado) {
            card.style.borderLeft = "4px solid gold";
        }

        const autor = document.createElement("h3");
        autor.textContent = publicacion.autor;

        const texto = document.createElement("p");
        texto.textContent = publicacion.texto;

        const fecha = document.createElement("small");
        fecha.textContent = publicacion.fecha || "Sin fecha";
        fecha.classList.add("fecha");

        card.appendChild(autor);
        card.appendChild(texto);
        card.appendChild(fecha);

        lista.appendChild(card);
    });
}

function filtrar() {
    const textoBusqueda = inputBuscar.value.trim().toLowerCase();
    const publicaciones = leerPublicaciones();

    const filtradas = publicaciones.filter((publicacion) => {
        return (
            publicacion.autor.toLowerCase().includes(textoBusqueda) ||
            publicacion.texto.toLowerCase().includes(textoBusqueda)
        );
    });

    renderizarPublicaciones(filtradas);
}

document.addEventListener("DOMContentLoaded", () => {
    const publicaciones = leerPublicaciones();
    renderizarPublicaciones(publicaciones);
});

window.filtrar = filtrar;