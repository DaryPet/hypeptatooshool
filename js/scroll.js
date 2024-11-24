document.addEventListener("DOMContentLoaded", () => {
  const linksToConsultation = document.querySelectorAll(
    'a[href="#consultation"]'
  );

  linksToConsultation.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetSection = document.querySelector("#consultation");
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
