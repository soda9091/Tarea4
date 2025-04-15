document.addEventListener("DOMContentLoaded", () => {
  const learnMoreButtons = document.querySelectorAll(".learn-more");
  const modal = document.getElementById("modal");
  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const closeModal = document.querySelector(".modal-content .close");
  const exitButton = document.querySelector(".modal-exit");
  const prevButton = document.querySelector(".modal-content .prev");
  const nextButton = document.querySelector(".modal-content .next");

  let currentIndex = 0;

  const cardsData = Array.from(learnMoreButtons).map(button => ({
    image: button.getAttribute("data-image"),
    title: button.getAttribute("data-title"),
    description: button.getAttribute("data-description"),
  }));

  const updateModalContent = (index) => {
    const { image, title, description } = cardsData[index];
    modalImage.src = image;
    modalTitle.textContent = title;
    modalDescription.textContent = description;
  };

  learnMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentIndex = index;
      updateModalContent(currentIndex);
      modal.style.display = "flex"; // Muestra el modal
    });
  });

  // Navegar a la imagen anterior
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
    updateModalContent(currentIndex);
  });

  // Navegar a la siguiente imagen
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cardsData.length;
    updateModalContent(currentIndex);
  });

  // Cierra el modal al hacer clic en la "X"
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cierra el modal al hacer clic en el botón "Salir"
  exitButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cierra el modal al hacer clic fuera del contenido del modal
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});