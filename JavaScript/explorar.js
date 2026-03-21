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
        lista.innerHTML = "<p>No se encontraron publicaciones.</p>";
        return;
    }

    listaPublicaciones.forEach((publicacion) => {
        const card = document.createElement("div");

        card.style.backgroundColor = "#1e1e30";
        card.style.border = "1px solid #2a2a4a";
        card.style.borderRadius = "10px";
        card.style.padding = "16px";
        card.style.marginTop = "12px";
        card.style.color = "#e8e8f0";

        const autor = document.createElement("h3");
        autor.textContent = publicacion.autor;

        const texto = document.createElement("p");
        texto.textContent = publicacion.texto;
        texto.style.marginTop = "8px";

        card.appendChild(autor);
        card.appendChild(texto);

        lista.appendChild(card);
    });
}

function filtrar() {
    const textoBusqueda = document.getElementById("buscar").value.trim().toLowerCase();

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