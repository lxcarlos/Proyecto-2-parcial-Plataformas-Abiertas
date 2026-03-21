const STORAGE_POSTS = "publicacionesPerfil";
const STORAGE_USER = "usuarioActual";

const botonTema = document.getElementById("btn-tema");
const bienvenida = document.getElementById("bienvenida");
const inputPost = document.getElementById("postInput");
const postsContainer = document.getElementById("posts");

let publicaciones = leerPublicaciones();

function leerPublicaciones() {
    const guardadas = localStorage.getItem(STORAGE_POSTS);

    if (guardadas) {
        return JSON.parse(guardadas);
    }

    return [
        {
            id: 1,
            autor: "Sistema",
            texto: "Bienvenido a tu perfil.",
            fecha: "Publicación inicial",
            destacado: false
        }
    ];
}

function guardarPublicaciones() {
    localStorage.setItem(STORAGE_POSTS, JSON.stringify(publicaciones));
}

function cargarBienvenida() {
    const usuarioGuardado = localStorage.getItem(STORAGE_USER);

    if (!bienvenida) return;

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        bienvenida.textContent = `Bienvenido, ${usuario.nombre || usuario.usuario}`;
    } else {
        bienvenida.textContent = "Bienvenido";
    }
}

function renderPublicaciones() {
    if (!postsContainer) return;

    postsContainer.innerHTML = "";

    if (publicaciones.length === 0) {
        postsContainer.innerHTML = "<p>No hay publicaciones todavía.</p>";
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
        fecha.textContent = publicacion.fecha;
        fecha.classList.add("fecha");

        const btnDestacar = document.createElement("button");
        btnDestacar.textContent = publicacion.destacado ? "Quitar destacado" : "Destacar";
        btnDestacar.style.marginTop = "10px";

        btnDestacar.addEventListener("click", () => {
            publicacion.destacado = !publicacion.destacado;
            guardarPublicaciones();
            renderPublicaciones();
        });

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.style.marginTop = "10px";
        btnEliminar.style.marginLeft = "8px";

        btnEliminar.addEventListener("click", () => {
            publicaciones = publicaciones.filter((item) => item.id !== publicacion.id);
            guardarPublicaciones();
            renderPublicaciones();
        });

        card.appendChild(autor);
        card.appendChild(texto);
        card.appendChild(fecha);
        card.appendChild(document.createElement("br"));
        card.appendChild(btnDestacar);
        card.appendChild(btnEliminar);

        postsContainer.appendChild(card);
    });
}

function agregarPost() {
    if (!inputPost) return;

    const texto = inputPost.value.trim();

    if (texto === "") {
        alert("Escribe algo antes de publicar.");
        return;
    }

    const usuarioGuardado = localStorage.getItem(STORAGE_USER);
    let nombreAutor = "Usuario";

    if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        nombreAutor = usuario.nombre || usuario.usuario;
    }

    const nuevaPublicacion = {
        id: Date.now(),
        autor: nombreAutor,
        texto: texto,
        fecha: new Date().toLocaleString(),
        destacado: false
    };

    publicaciones.unshift(nuevaPublicacion);
    guardarPublicaciones();
    renderPublicaciones();

    inputPost.value = "";
}

if (botonTema) {
    botonTema.addEventListener("click", () => {
        document.body.classList.toggle("modo-claro");
        document.body.classList.toggle("modo-oscuro");

        if (document.body.classList.contains("modo-oscuro")) {
            botonTema.textContent = "Modo claro";
        } else {
            botonTema.textContent = "Modo oscuro";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    cargarBienvenida();
    renderPublicaciones();
});

window.agregarPost = agregarPost;