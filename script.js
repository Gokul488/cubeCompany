const accordionButtons = document.querySelectorAll(".accordion-btn");

accordionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const icon = button.querySelector(".icon");

    // Toggle active state
    item.classList.toggle("active");

    // Change icon
    icon.textContent = item.classList.contains("active") ? "−" : "+";
  });
});

