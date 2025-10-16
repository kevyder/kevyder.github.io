document.addEventListener("DOMContentLoaded", () => {
  const mobileButton = document.querySelector(".mobile-button");
  const menuOptions = document.querySelector(".container-options");
  const linesButton = document.querySelector(".lines-button");

  mobileButton.addEventListener("click", () => {
    menuOptions.classList.toggle("active");
    linesButton.classList.toggle("close-lines");

    // Prevent scrolling when menu is open
    document.body.style.overflow = menuOptions.classList.contains("active") ? "hidden" : "";
  });

  // Close menu when clicking on a link
  document.querySelectorAll(".container-options .option a").forEach(link => {
    link.addEventListener("click", () => {
      menuOptions.classList.remove("active");
      linesButton.classList.remove("close-lines");
      document.body.style.overflow = "";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".mobile-button") &&
      !event.target.closest(".container-options") &&
      menuOptions.classList.contains("active")) {
      menuOptions.classList.remove("active");
      linesButton.classList.remove("close-lines");
      document.body.style.overflow = "";
    }
  });
});