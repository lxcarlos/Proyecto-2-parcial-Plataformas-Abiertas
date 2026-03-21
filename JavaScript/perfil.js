const botonTema = document.getElementById("btn-tema");

if (botonTema) {
  botonTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-claro");
    document.body.classList.toggle("modo-oscuro");
  });
}