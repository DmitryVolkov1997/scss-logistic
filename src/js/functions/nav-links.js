export const handleClickNavLinks = () => {
  const nav = document.querySelector(".nav");
  const navLinksElems = document.querySelectorAll(".nav__link");
  const burger = document.querySelector(".burger");

  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("nav__link")) {
      const navLink = e.target;

      navLinksElems.forEach((link) => {
        link.classList.remove("active");
      });

      navLink.classList.add("active");

      nav.classList.remove("active");
      burger.classList.remove("active");
    }
  });
};
