const usuarios = [
    {
        usuario: "admin",
        password: "1234",
        nombre: "Administrador"
    },
    {
        usuario: "moy",
        password: "1234",
        nombre: "Moisés"
    },
    {
        usuario: "equipo",
        password: "1234",
        nombre: "Equipo"
    }
];

function login() {
    const inputUser = document.getElementById("user");
    const inputPass = document.getElementById("pass");
    const error = document.getElementById("error");

    const usuario = inputUser.value.trim();
    const password = inputPass.value.trim();

    if (usuario === "" || password === "") {
        error.textContent = "Completa todos los campos.";
        error.style.color = "red";
        return;
    }

    const usuarioEncontrado = usuarios.find((item) => {
        return item.usuario === usuario && item.password === password;
    });

    if (usuarioEncontrado) {
        error.textContent = "Inicio de sesión correcto.";
        error.style.color = "green";

        localStorage.setItem("usuarioActual", JSON.stringify(usuarioEncontrado));

        setTimeout(() => {
            window.location.href = "perfil.html";
        }, 800);
    } else {
        error.textContent = "Usuario o contraseña incorrectos.";
        error.style.color = "red";
    }
}