document.addEventListener("DOMContentLoaded", function () {
  const ulHTML = `
        <ul class="pick-path__features">
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon1-white.svg" alt="icon one" class="pick-path__list-logo">
                <h3 class="pick-path__list-text">Starter kit for tattoo artists</h3>
            </div>
                <p class="pick-path__list-decription">Everything you need to start your tattoo journey, all in one kit</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon2.svg" alt="icon two">
                <h3 class="pick-path__list-text">Mastering tattoo design software</h3>
                </div>
                <p class="pick-path__list-decription">Master Procreate to bring your tattoo ideas to life with precision and creativity</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon3.svg" alt="icon three" class="pick-path__list-logo">
                <h3 class="pick-path__list-text">Creating unique designs</h3>
                </div>
                <p class="pick-path__list-decription">Develop your own signature style and stand out in the tattoo world</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon4.svg" alt="icon four" class="pick-path__list-logo">
                <h3 class="pick-path__list-text">Ink selection and mixing guidance</h3>
                </div>
                <p class="pick-path__list-decription">Master the techniques of selecting and blending inks for flawless, vibrant tattoos</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon5.svg" alt="icon five" class="pick-path__features--icon">
                <h3 class="pick-path__list-text">Tattoo machine setup and tuning</h3>
                </div>
                <p class="pick-path__list-decription">Gain the knowledge to ensure your equipment works smoothly and efficiently</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon2.svg" alt="icon six">
                <h3 class="pick-path__list-text">Tattoo placement and composition</h3>
                </div>
                <p class="pick-path__list-decription">Explore the art of positioning and arranging your designs for a balanced and visually appealing composition</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon4.svg" alt="icon seven">
                <h3 class="pick-path__list-text">4 in-person practice sessions</h3>
                </div>
                <p class="pick-path__list-decription">Hone your skills with hands-on experience under expert guidance</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon8.svg" alt="icon eight">
                <h3 class="pick-path__list-text">Certificate upon course completion</h3>
                </div>
                <p class="pick-path__list-decription">Official recognition of your progress and readiness to take on clients</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon9.svg" alt="icon nine">
                <h3 class="pick-path__list-text">Assistance with portfolio creation</h3>
                </div>
                <p class="pick-path__list-decription">Build a portfolio that showcases your talents and attracts potential customers</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon10.svg" alt="icon ten">
                <h3 class="pick-path__list-text">Marketing secrets for tattoo artists</h3>
                </div>
                <p class="pick-path__list-decription">Learn strategies to effectively promote yourself and grow your clientele</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon10.svg" alt="icon eleven" class="pick-path__icon">
                <h3 class="pick-path__list-text">A great time well spent</h3>
                </div>
                <p class="pick-path__list-decription">Enjoy a fulfilling learning experience in a creative and motivating environment with the talented artists from our studio</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon12.svg" alt="icon twelve" class="pick-path__icon">
                <h3 class="pick-path__list-text">Detailed feedback from professionals</h3>
                </div>
                <p class="pick-path__list-decription">Receive tailored advice to help you improve your technique and artistry</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon13.svg" alt="icon thirteen" class="pick-path__icon">
                <h3 class="pick-path__list-text">Opportunity to join our team</h3>
                </div>
                <p class="pick-path__list-decription">Exceptional graduates may have the chance to collaborate with us on future projects</p>
            </li>
            <li class="pick-path__feature">
            <div class="pick-path__features--head">
                <img src="./images/list-icon13.svg" alt="icon fourteen" class="pick-path__icon">
                <h3 class="pick-path__list-text">2 days of personal mentorship from Demus</h3>
                </div>
                <p class="pick-path__list-decription">After the course, you’ll have a private session to work on your own client with Demus, who will guide you and answer any questions.</p>
            </li>
        </ul>
    `;

  const listContainers = document.querySelectorAll(
    ".pick-path__list-container"
  );

  listContainers.forEach((container) => {
    container.insertAdjacentHTML("beforeend", ulHTML);
  });
});
