(() => {
  const openBtnRef = document.querySelector("[data-menu-open]");
  const closeBtnRef = document.querySelector("[data-menu-close]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  openBtnRef.addEventListener("click", () => {
    const expanded =
      openBtnRef.getAttribute("aria-expanded") === "true" || false;

    // menuBtnRef.classList.toggle("is-open");

    openBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
  });

  closeBtnRef.addEventListener("click", () => {
    mobileMenuRef.classList.toggle("is-open");
  });
})();






// (() => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   const mobileMenuRef = document.querySelector("[data-menu]");
//   const body = document.querySelector("body");

//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//     body.classList.toggle("no-scroll");
//   });
// })();




