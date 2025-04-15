document.addEventListener("DOMContentLoaded", () => {
const learnMoreButtons = document.querySelectorAll(".learn-more");
const modal = document.getElementById("modal");
const modalImage = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalDescription = modal.querySelector(".modal-description");
const closeModal = document.querySelector(".modal-content .close");
const prevButton = document.querySelector(".modal-content .prev");
const nextButton = document.querySelector(".modal-content .next");

  let currentIndex = 0; // Índice actual de la imagen

const cardsData = Array.from(learnMoreButtons).map(button => ({
    image: button.getAttribute("data-image"), // Ruta de la imagen
    title: button.getAttribute("data-title"), // Título de la tarjeta
    description: button.getAttribute("data-description"), // Descripción completa
}));

const updateModalContent = (index) => {
    const { image, title, description } = cardsData[index];
    modalImage.src = image; // Actualiza la imagen del modal
    modalTitle.textContent = title; // Actualiza el título del modal
    modalDescription.textContent = description; // Actualiza la descripción del modal
};

learnMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentIndex = index; // Actualiza el índice actual
      updateModalContent(currentIndex); // Actualiza el contenido del modal
      modal.style.display = "flex"; // Muestra el modal
    });
});

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length; // Navega a la imagen anterior
    updateModalContent(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cardsData.length; // Navega a la siguiente imagen
    updateModalContent(currentIndex);
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none"; // Cierra el modal
});
});