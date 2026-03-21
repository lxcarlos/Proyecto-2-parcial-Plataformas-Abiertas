const publicaciones = [
    {
        id: 1,
        autor: "Carlos",
        texto: "Agregando estilos al proyecto."
    },
    {
        id: 2,
        autor: "Moisés",
        texto: "Trabajando en la parte de JavaScript."
    },
    {
        id: 3,
        autor: "Yerik",
        texto: "Subiendo cambios al perfil."
    },
    {
        id: 4,
        autor: "Equipo",
        texto: "Explorando publicaciones del proyecto."
    }
];

function renderizarPublicaciones(listaPublicaciones) {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    if (listaPublicaciones.length === 0) {
        lista.innerHTML = "<p class='no-resultados'>No se encontraron publicaciones.</p>";
        return;
    }

    listaPublicaciones.forEach((publicacion) => {
        const card = document.createElement("div");
        card.classList.add("publicacion"); // usamos CSS en lugar de style

        const autor = document.createElement("h3");
        autor.textContent = publicacion.autor;

        const texto = document.createElement("p");
        texto.textContent = publicacion.texto;

        card.appendChild(autor);
        card.appendChild(texto);

        lista.appendChild(card);
    });
}

function filtrar() {
    const textoBusqueda = document
        .getElementById("buscar")
        .value
        .trim()
        .toLowerCase();

    const filtradas = publicaciones.filter((publicacion) => {
        return (
            publicacion.autor.toLowerCase().includes(textoBusqueda) ||
            publicacion.texto.toLowerCase().includes(textoBusqueda)
        );
    });

    renderizarPublicaciones(filtradas);
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarPublicaciones(publicaciones);
});