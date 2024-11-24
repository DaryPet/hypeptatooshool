@charset "UTF-8";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@font-face {
  font-family: "Mona Sans";
  src: url("../../fonts/Mona-Sans-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: "Mona Sans";
  src: url("../../fonts/Mona-Sans-SemiBold.ttf") format("truetype");
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: "Mona Sans";
  src: url("../../fonts/Mona-Sans-Bold.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: "Mona Sans";
  src: url("../../fonts/Mona-Sans-ExtraBold.ttf") format("truetype");
  font-weight: 800;
  font-style: normal;
}
h1, h2 {
  font-family: "Druk Cyr", sans-serif;
  color: #000000;
}

body {
  font-family: "Mona Sans", sans-serif;
  font-weight: 600;
  color: #000000;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 20px;
  background-color: #000000;
  color: #FFFFFF;
}
.header__logo img {
  width: 27.141px;
  height: 32.015px;
  flex-shrink: 0;
}
.header .menu {
  display: flex;
  align-items: center;
  gap: 9.74px;
}
.header .menu__text {
  color: #FFF;
  font-family: "Druk Cyr", sans-serif;
  font-size: 26.165px;
  font-weight: 700;
  line-height: 91.5%;
  letter-spacing: -0.523px;
  text-transform: uppercase;
}
.header .menu__dots {
  display: grid;
  /* Используем grid для построения квадрата */
  grid-template-columns: repeat(2, 6px);
  /* Два столбца */
  grid-template-rows: repeat(2, 6px);
  /* Две строки */
  gap: 9.97px;
}
.header .menu__dots__dot {
  width: 6.65px;
  height: 6.65px;
  background-color: #00D0D2;
  border-radius: 50%;
}

.hero {
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 51px 0 80px 20px;
  color: #FFFFFF;
  min-height: 100vh;
  background-image: url("../../images/background-mob.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: bottom;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  margin: 0 auto;
  /* Стрелки */
}
.hero__top {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.hero__top-vectors {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 51px;
}
.hero__top-text {
  width: 121.072px;
  color: #000000;
  text-align: center;
  font-family: "Mona Sans", sans-serif;
  font-size: 8.965px;
  font-style: normal;
  font-weight: 600;
  line-height: 111%;
  letter-spacing: -0.269px;
}
.hero__vector1 {
  width: 52.338px;
  height: 19.548px;
  flex-shrink: 0;
}
.hero__vector2 {
  width: 39.096px;
  height: 17.341px;
  flex-shrink: 0;
}
.hero__title1 {
  padding: 0 0 0 3px;
  color: #000000;
  width: 203px;
  font-family: "Druk Cyr", sans-serif;
  font-size: 62px;
  font-weight: 700;
  line-height: 99%;
  letter-spacing: -1.24px;
  text-transform: uppercase;
}
.hero__title2 {
  padding: 0 0 0 3px;
  color: #000000;
  width: 260px;
  font-family: "Druk Cyr", sans-serif;
  font-size: 62px;
  font-weight: 700;
  line-height: 99%;
  letter-spacing: -1.24px;
  text-transform: uppercase;
  margin-bottom: 51.86px;
}
.hero .join-course-container {
  margin-left: 3px;
  position: relative;
  display: inline-block;
  /* Ширина блока */
  /* Высота блока */
  cursor: pointer;
  width: 176px;
  height: 68px;
  flex-shrink: 0;
  box-sizing: content-box;
}
.hero .join-course__text {
  position: absolute;
  top: 38%;
  left: 15%;
  font-family: "Mona Sans", sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.42px;
  color: #000000;
  text-transform: uppercase;
}
.hero .join-course__arrow {
  position: absolute;
  width: 12px;
  /* Размер стрелки */
  height: 12px;
  /* Размер стрелки */
}
.hero .join-course__arrow--top-left {
  top: 0;
  left: 0;
}
.hero .join-course__arrow--top-right {
  top: 0;
  right: 0;
}
.hero .join-course__arrow--bottom-left {
  bottom: 0;
  left: 0;
}
.hero .join-course__arrow--bottom-right {
  bottom: 0;
  right: 0;
}
.hero .join-course__box {
  width: 66.38px;
  height: 66.38px;
  flex-shrink: 0;
}

/*# sourceMappingURL=main.c.map */
