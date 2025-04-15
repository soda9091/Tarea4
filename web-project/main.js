document.addEventListener("DOMContentLoaded", () => {
  const learnMoreButtons = document.querySelectorAll(".learn-more");
  const modal = document.getElementById("modal");
  const modalImage = modal.querySelector(".modal-image");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDescription = modal.querySelector(".modal-description");
  const closeModal = document.querySelector(".modal-content .close");
  const exitButton = document.querySelector(".modal-exit");

  learnMoreButtons.forEach(button => {
    button.addEventListener("click", () => {
      const imageSrc = button.getAttribute("data-image");
      const title = button.getAttribute("data-title");
      const description = button.getAttribute("data-description");

      modalImage.src = imageSrc; // Update the modal image source
      modalTitle.textContent = title; // Update the modal title
      modalDescription.textContent = description; // Update the modal description
      modal.style.display = "flex"; // Show the modal
    });
  });

  // Close the modal when the "X" is clicked
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when the "Salir" button is clicked
  exitButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});