document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-tema");

    if (boton) {
        boton.addEventListener("click", () => {
            document.body.classList.toggle("modo-claro");
            document.body.classList.toggle("modo-oscuro");

            if (document.body.classList.contains("modo-oscuro")) {
                boton.textContent = "Modo claro";
            } else {
                boton.textContent = "Modo oscuro";
            }
        });
    }
});