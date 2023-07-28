export const handleShowModalWindow = () => {
  const modalBtnElems = document.querySelectorAll("[data-modal-btn]");
  const modalWindowElems = document.querySelectorAll("[data-modal]");
  const body = document.body;

  modalWindowElems.forEach((modal) => {
    const modalClose = modal.querySelector(".modal__close");

    modalClose.addEventListener("click", hideModal);
  });

  modalBtnElems.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const getAttr = btn.getAttribute("data-modal-btn");
      const currentModal = document.querySelector(`[data-modal="${getAttr}"]`);

      hideModal();
      currentModal.classList.add("show");
    });
  });

  // modalClose.addEventListener("click", hideModal);

  function hideModal() {
    modalWindowElems.forEach((modal) => {
      modal.classList.remove("show");
    });

    disableScroll();
  }

  function disableScroll() {
    if (!body.classList.contains("no-scroll")) {
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
    }
  }
};
