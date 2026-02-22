const btnMenu = document.getElementById("btn-menu");
const menu = document.querySelector(".mega-menu");

btnMenu.addEventListener("click", (e) => {
    e.preventDefault(); // Evita que el enlace intente saltar antes de tiempo
    e.stopPropagation();

    // Verificamos si el menú ya está abierto
    if (menu.classList.contains("active")) {
        // Si está abierto, lo redirigimos a la página general de cepillos
        window.location.href = "/pages/productos.html";
    } else {
        // Si está cerrado, solo lo abrimos
        menu.classList.toggle("active");
    }
});

// Cierra el menú si haces clic afuera
window.addEventListener("click", () => {
    menu.classList.remove("active");
});