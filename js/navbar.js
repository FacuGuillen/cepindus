const btnMenu = document.getElementById("btn-menu");
const menu = document.querySelector(".mega-menu");

btnMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active"); 
});

// Cierra el menú si haces clic afuera
window.addEventListener("click", () => {
    menu.classList.remove("active");
});