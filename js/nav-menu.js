document.addEventListener("DOMContentLoaded", () => {
  const modalToggles = document.querySelectorAll("[data-modal-target]");
  const modalCloseButtons = document.querySelectorAll("[data-modal-close]");

  function openModal(targetId) {
    const modalElement = document.getElementById(targetId);
    if (modalElement) {
      modalElement.style.right = "0";
    }
  }

  function closeModal(modalElement) {
    if (modalElement) {
      modalElement.style.right = "-100%";
    }
  }

  modalToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const targetId = toggle.getAttribute("data-modal-target");
      openModal(targetId);
    });
  });

  modalCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalElement =
        button.closest(".modal") || button.closest(".nav-menu");
      closeModal(modalElement);
    });
  });

  const linksToConsultation = document.querySelectorAll(
    "[data-target='pick-path']"
  );
  linksToConsultation.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const modalElement = link.closest(".modal") || link.closest(".nav-menu");
      closeModal(modalElement);
      document
        .getElementById("pick-path")
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  const navLinks = document.querySelectorAll(".nav-menu__list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetHref = link.getAttribute("href");

      if (targetHref && targetHref.startsWith("#")) {
        const targetElement = document.querySelector(targetHref);
        if (targetElement) {
          const modalElement =
            link.closest(".modal") || link.closest(".nav-menu");
          closeModal(modalElement);
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});
