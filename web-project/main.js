document.addEventListener("DOMContentLoaded", () => {
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
    if (button.classList.contains("oval")) {
        alert("Contactanos or Ingresa button clicked!");
    } else if (button.classList.contains("learn-more")) {
        alert("Learn more about us!");
    } else {
        alert("Button clicked!");
    }
    });
});
});