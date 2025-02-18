console.log("hola, esto es una prueba de que todo va bien :3");

// Elementos
const modal = document.querySelector(".modal");
const openModal = document.querySelector(".btn_open_modal");
const closeModal = document.querySelector(".close");

// Abrir pop-up
openModal.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
});

// Cerrar pop-up
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Cerrar al hacer clic fuera del pop-up
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});