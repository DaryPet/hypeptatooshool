document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    const button = event.target.closest("[data-action]");
    if (button) {
      const action = button.dataset.action;
      if (action === "proceed") {
        openModal("proceed-modal");
      } else if (action === "consultation") {
        openModal("consultation-modal");
      }
    }
  });

  function openModal(targetId) {
    const modalElement = document.getElementById(targetId);
    if (modalElement) {
      modalElement.style.display = "block";
    }
  }

  document.body.addEventListener("click", function (event) {
    if (event.target.matches("[data-modal-close]")) {
      const modalElement = event.target.closest(".modal");
      closeModal(modalElement);
    }
  });

  window.addEventListener("click", function (event) {
    const openModals = document.querySelectorAll(".modal[style*='block']");
    openModals.forEach((modal) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  function closeModal(modal) {
    if (modal) {
      modal.style.display = "none";
    }
  }
});
