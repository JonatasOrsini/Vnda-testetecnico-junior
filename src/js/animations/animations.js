// This code shrink the navigation bar on scroll
const trigger = document.querySelector(".anim-trigger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".nav-logo");
const logosvg = document.querySelector(".nav-logo-svg");
const navicons = document.querySelectorAll(".nav-iconcontainer .-icon i");
const menu = document.querySelectorAll(".nav-menu .-item");

const navOptions = {
  rootMargin: "0px 0px 0px 0px",
};

const navObserver = new IntersectionObserver(function (entries, navObserver) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      nav.classList.add("shrink-bar");
      logo.classList.add("shrink-logo");
      logosvg.classList.add("changelogo-svgcolor");

      // Changing menu color for dark backgrounds.
      for (let i = 0; i < menu.length; i++) {
        menu[i].setAttribute("id", "menu-darkmode");
      }

      // Changing the color for the icons for dark backgrounds.
      for (let i = 0; i < navicons.length; i++) {
        navicons[i].setAttribute("id", "icon-darkmode");
      }

      if (nav.classList.contains("grow-bar")) {
        nav.classList.remove("grow-bar");
        logo.classList.remove("grow-logo");
        logosvg.classList.remove("revertlogo-svgcolor");
      }
    } else {
      nav.classList.add("grow-bar");
      logo.classList.add("grow-logo");
      logosvg.classList.add("revertlogo-svgcolor");

      // Changing back the menu color.
      for (let i = 0; i < menu.length; i++) {
        menu[i].removeAttribute("id", "menu-darkmode");
      }

      // Changing back the color for the icons.
      for (let i = 0; i < navicons.length; i++) {
        navicons[i].removeAttribute("id", "icon-darkmode");
      }

      if (nav.classList.contains("shrink-bar")) {
        nav.classList.remove("shrink-bar");
        logo.classList.remove("shrink-logo");
        logosvg.classList.remove("changelogo-svgcolor");
      }
    }
  });
}, navOptions);

navObserver.observe(trigger);
