export const handleClickNavLinks = () => {
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".burger");

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      nav.classList.remove("active");
      burger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
};
