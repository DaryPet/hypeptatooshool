document.addEventListener("DOMContentLoaded", function () {
  const buttonTemplate = (text, dataAction) => `
   <div class="button-wrapper">
    <div class="button-main-container button-main-container--modal">
      <div class="button-course-container" data-action="${dataAction}">
       <div class="button-course__background" ></div>
        <p class="button-course__text button-course__text--modal" data-action="${dataAction}">${text}</p>
        <img
          src="/images/angle2.svg"
          alt="Top Left Arrow"
          class="button-course__arrow button-course__arrow--top-left button-course__arrow--modal"
        />
        <img
          src="/images/angle3.svg"
          alt="Top Right Arrow"
          class="button-course__arrow button-course__arrow--top-right button-course__arrow--modal"
        />
        <img
          src="images/angle1.svg"
          alt="Bottom Left Arrow"
          class="button-course__arrow button-course__arrow--bottom-left button-course__arrow--modal"
        />
        <img
          src="images/angle4.svg"
          alt="Bottom Right Arrow"
          class="button-course__arrow button-course__arrow--bottom-right button-course__arrow--modal"
        />
      </div>
      <div class="button-course-box button-course-box--modal" data-action="${dataAction}">
        <div class="button-course-box__background button-course-box__background--modal"></div>
        <a href="#${dataAction}" class="button-course-box__link">
          <img
            src="images/arrow-white.svg"
            alt="Arrow"
            class="button-course-box__arrow button-course-box__arrow--modal"
          />
        </a>
      </div>
    </div>
    </div>
   
  `;
  const consultationContainers = document.querySelectorAll(
    ".consultation-button-container"
  );
  const proceedContainers = document.querySelectorAll(
    ".proceed-button-container"
  );
  const sendEmailContainers = document.querySelectorAll(
    ".send-email-button-container"
  );

  consultationContainers.forEach((container) => {
    container.insertAdjacentHTML(
      "beforeend",
      buttonTemplate("CONSULTATION", "consultation")
    );
  });

  proceedContainers.forEach((container) => {
    container.insertAdjacentHTML(
      "beforeend",
      buttonTemplate("CHOOSE AND PROCEED", "proceed")
    );
  });

  sendEmailContainers.forEach((container) => {
    container.insertAdjacentHTML(
      "beforeend",
      buttonTemplate("CONSULTATION", "send-email")
    );
  });
});
