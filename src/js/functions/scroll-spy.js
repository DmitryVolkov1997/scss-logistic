export function scrollSpy() {
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  const sectionsElems = document.querySelectorAll("[data-scrollspy]");
  const navLinksElems = document.querySelectorAll(".nav__link");
  const headerH = document.querySelector(".header").offsetHeight;

  smoothLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      let href = link.getAttribute("href").substring(1);
      const scrollTarget = document.getElementById(href);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 50;
      window.scrollBy({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    sectionsElems.forEach((section) => {
      const sectionId = section.getAttribute("id");
      const sectionOffset = section.offsetTop;
      const navLink = document.querySelector(`[href='#${sectionId}']`);

      if (scrollTop >= sectionOffset - headerH) {
        if (navLink) {
          navLinksElems.forEach((link) => {
            link.classList.remove("active");
          });

          navLink.classList.add("active");
        }
      }

      if (scrollTop == 0) {
        navLinksElems.forEach((link) => {
          link.classList.remove("active");
        });
      }
    });
  });
}
