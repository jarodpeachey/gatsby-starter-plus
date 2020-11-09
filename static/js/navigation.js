(function () {
  // ELEMENTS
  const menu = document.querySelector(".menu");
  const mobileMenuToggle = document.querySelector(".mobile-menu__toggle");
  const nav = document.querySelector(".nav");

  // VARIABLES
  let open = false;

  // ADD EVENT LISTENER
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", toggleMobileMenu);
  }
  document.addEventListener("scroll", onScroll);

  function onScroll(e) {
    if (window.scrollY > 100) {
      nav.classList.add("scroll");
    } else {
      nav.classList.remove("scroll");
    }
  }

  // TOGGLE MENU FUNCTION
  function toggleMobileMenu() {
    if (open) {
      menu.classList.remove("open");
      mobileMenuToggle.classList.remove("open");
      open = false;
    } else {
      menu.classList.add("open");
      mobileMenuToggle.classList.add("open");
      open = true;
    }
  }
})();
