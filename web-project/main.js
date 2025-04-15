document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los botones con la clase "learn-more"
  const learnMoreButtons = document.querySelectorAll(".learn-more");

  // Obtiene el elemento del modal y sus elementos internos
  const modal = document.getElementById("modal"); // Modal principal
  const modalImage = modal.querySelector(".modal-image"); // Imagen dentro del modal
  const modalTitle = modal.querySelector(".modal-title"); // Título dentro del modal
  const modalDescription = modal.querySelector(".modal-description"); // Descripción dentro del modal
  const closeModalButton = modal.querySelector(".close"); // Botón para cerrar el modal
  const prevButton = modal.querySelector(".prev"); // Botón para ir a la imagen anterior
  const nextButton = modal.querySelector(".next"); // Botón para ir a la imagen siguiente

  let currentIndex = 0; // Índice de la tarjeta actualmente seleccionada

  // Obtener los datos de todas las tarjetas a partir de los botones "Learn More"
  const cardsData = Array.from(learnMoreButtons).map(button => ({
      image: button.getAttribute("data-image"), // Imagen asociada a la tarjeta
      title: button.getAttribute("data-title"), // Título de la tarjeta
      description: button.getAttribute("data-description"), // Descripción de la tarjeta
  }));

  // Función para actualizar el contenido del modal
  const updateModalContent = (index) => {
      const { image, title, description } = cardsData[index]; // Obtiene los datos de la tarjeta correspondiente
      modalImage.src = image; // Actualiza la imagen del modal
      modalTitle.textContent = title; // Actualiza el título del modal
      modalDescription.textContent = description; // Actualiza la descripción del modal
  };

  // Función para abrir el modal
  const openModal = (index) => {
      currentIndex = index; // Establece el índice actual
      updateModalContent(currentIndex); // Actualiza el contenido del modal con la tarjeta seleccionada
      modal.style.display = "flex"; // Muestra el modal
  };

  // Función para cerrar el modal
  const closeModal = () => {
      modal.style.display = "none"; // Oculta el modal
  };

  // Función para mostrar la siguiente tarjeta en el modal
  const showNext = () => {
      currentIndex = (currentIndex + 1) % cardsData.length; // Incrementa el índice y vuelve al inicio si alcanza el final
      updateModalContent(currentIndex); // Actualiza el contenido del modal
  };

  // Función para mostrar la tarjeta anterior en el modal
  const showPrev = () => {
      currentIndex = (currentIndex - 1 + cardsData.length) % cardsData.length; // Decrementa el índice y vuelve al final si alcanza el principio
      updateModalContent(currentIndex); // Actualiza el contenido del modal
  };

  // Agrega eventos "click" a cada botón "Learn More"
  learnMoreButtons.forEach((button, index) => {
      button.addEventListener("click", () => openModal(index)); // Abre el modal con el índice de la tarjeta correspondiente
  });

  // Agrega evento "click" al botón de cerrar modal
  closeModalButton.addEventListener("click", closeModal);

  // Agrega eventos "click" a los botones de navegación dentro del modal
  prevButton.addEventListener("click", showPrev); // Botón anterior
  nextButton.addEventListener("click", showNext); // Botón siguiente

  // Agrega eventos de teclado para navegar en el modal
  document.addEventListener("keydown", (event) => {
      if (modal.style.display === "flex") { // Solo si el modal está visible
          if (event.key === "ArrowRight") showNext(); // Flecha derecha para avanzar
          if (event.key === "ArrowLeft") showPrev(); // Flecha izquierda para retroceder
          if (event.key === "Escape") closeModal(); // Escape para cerrar el modal
      }
  });
});