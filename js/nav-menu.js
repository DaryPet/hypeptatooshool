document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu");
  const navMenu = document.getElementById("nav-menu");
  const menuClose = document.getElementById("menu-close");

  const linksToConsultation = document.querySelectorAll(
    '[data-target="consultation"]'
  );

  function openMenu() {
    navMenu.style.right = "0";
  }

  function closeMenu() {
    navMenu.style.right = "-100%";
  }

  function goToConsultation(event) {
    event.preventDefault();
    closeMenu();
    document
      .getElementById("consultation")
      .scrollIntoView({ behavior: "smooth" });
  }

  menuToggle.addEventListener("click", openMenu);

  menuClose.addEventListener("click", closeMenu);

  linksToConsultation.forEach((link) => {
    link.addEventListener("click", goToConsultation);
  });
});
