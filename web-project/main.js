document.addEventListener("DOMContentLoaded", () => {
  const learnMoreButtons = document.querySelectorAll(".learn-more");
  const modal = document.getElementById("modal");
  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const closeModalButton = modal.querySelector(".close");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");

  let currentIndex = 0;

  // Obtener datos de todas las tarjetas
  const cardsData = Array.from(learnMoreButtons).map(button => ({
      image: button.getAttribute("data-image"),
      title: button.getAttribute("data-title"),
      description: button.getAttribute("data-description"),
  }));

  // Actualizar contenido del modal
  const updateModalContent = (index) => {
      const { image, title, description } = cardsData[index];
      modalImage.src = image;
      modalTitle.textContent = title;
      modalDescription.textContent = description;
  };

  // Abrir modal
  const openModal = (index) => {
      currentIndex = index;
      updateModalContent(currentIndex);
      modal.style.display = "flex";
  };

  // Cerrar modal
  const closeModal = () => {
      modal.style.display = "none";
  };

  // Mostrar la siguiente tarjeta en el modal
  const showNext = () => {
      currentIndex = (currentIndex + 1) % cardsData.length;
      updateModalContent(currentIndex);
  };

  // Mostrar la tarjeta anterior en el modal
  const showPrev = () => {
      currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length;
      updateModalContent(currentIndex);
  };

  // Listeners para botones "Learn More"
  learnMoreButtons.forEach((button, index) => {
      button.addEventListener("click", () => openModal(index));
  });

  // Listener para cerrar modal
  closeModalButton.addEventListener("click", closeModal);

  // Listeners para navegación en el modal
  prevButton.addEventListener("click", showPrev);
  nextButton.addEventListener("click", showNext);

  // Navegación con teclado
  document.addEventListener("keydown", (event) => {
      if (modal.style.display === "flex") {
          if (event.key === "ArrowRight") showNext();
          if (event.key === "ArrowLeft") showPrev();
          if (event.key === "Escape") closeModal();
      }
  });
});