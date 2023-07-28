(function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".nav");

  burger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("active");

    if (document.body.classList.contains("active")) {
      document.body.classList.remove("active");
    } else {
      document.body.classList.toggle("no-scroll");
    }
  }
})();
