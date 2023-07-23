export const fixHeaderPosition = () => {
  const intro = document.getElementById("intro");
  let introHeight = intro.offsetHeight;
  const header = document.querySelector(".header");
  let headerHeight = header.offsetHeight;

  handleScroll();

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  function handleScroll() {
    introHeight = intro.offsetHeight;
    headerHeight = header.offsetHeight;
    const scrollTop = window.scrollY.toFixed();

    if (scrollTop >= introHeight - headerHeight) {
      header.classList.add("header--dark");
    } else {
      header.classList.remove("header--dark");
    }
  }
};
