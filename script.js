// JavaScript para aplicar clase "scrolled" al hacer scroll
window.addEventListener("scroll", function() {
    const tituloLogo = document.getElementById("Titulo-logo");
    if (window.scrollY > 50) {
        tituloLogo.classList.add("scrolled");
    } else {
        tituloLogo.classList.remove("scrolled");
    }
});
