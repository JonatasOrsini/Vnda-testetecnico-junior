// Este código encolhe a barra de navegação quando a página scrolla.
// Styles usados neste código podem ser encontrados em _animations.scss

const trigger = document.querySelector(".anim-trigger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".nav-logo");
const logosvg = document.querySelector(".nav-logo-svg");
const navicons = document.querySelectorAll(".nav-iconcontainer .-icon i");
const menu = document.querySelectorAll(".nav-menu .-item");

// navOptions é um offset em pixels
const navOptions = {
  rootMargin: "0px 0px 0px 0px",
};

// O IntersectionObserver verifica se a barra de navegação está colidindo com o trigger.
// O animation trigger(.anim-trigger) é uma div bem pequena escondida no topo da página.
// Ela é ativa assim que a barra de navegação se move.

const navObserver = new IntersectionObserver(function (entries, navObserver) {
  entries.forEach((entry) => {
    // Se a barra de navegação não está colidindo com o trigger
    if (!entry.isIntersecting) {
      // Encolhe a barra de navegação
      nav.classList.add("shrink-bar");
      // Encolhe o logo
      logo.classList.add("shrink-logo");
      // Troca a cor do logo para modo escuro
      logosvg.classList.add("changelogo-svgcolor");

      // Troca a cor do menu para modo escuro
      for (let i = 0; i < menu.length; i++) {
        menu[i].setAttribute("id", "menu-darkmode");
      }

      // Troca as cores dos ícones para modo escuro
      for (let i = 0; i < navicons.length; i++) {
        navicons[i].setAttribute("id", "icon-darkmode");
      }

      // Limpa as sobras de iterações anteriores
      if (nav.classList.contains("grow-bar")) {
        nav.classList.remove("grow-bar");
        logo.classList.remove("grow-logo");
        logosvg.classList.remove("revertlogo-svgcolor");
      }
    }
    // Se a barra de navegação está colidindo com o trigger
    else {
      // Cresce de volta a barra de navegação
      nav.classList.add("grow-bar");
      // Cresce de volta o logo
      logo.classList.add("grow-logo");
      // Reverte a cor do logo
      logosvg.classList.add("revertlogo-svgcolor");

      // Reverte a cor do menu
      for (let i = 0; i < menu.length; i++) {
        menu[i].removeAttribute("id", "menu-darkmode");
      }

      // Reverte as cores dos ícones
      for (let i = 0; i < navicons.length; i++) {
        navicons[i].removeAttribute("id", "icon-darkmode");
      }

      // Limpa as sobras de iterações anteriores
      if (nav.classList.contains("shrink-bar")) {
        nav.classList.remove("shrink-bar");
        logo.classList.remove("shrink-logo");
        logosvg.classList.remove("changelogo-svgcolor");
      }
    }
  });
}, navOptions);

navObserver.observe(trigger);

// Search icon expand

const searchiconlink = document.querySelector(".-search-link");
const inputbar = document.querySelector(".-inputbar");

// Clickando no ícone de pesquisa
searchiconlink.addEventListener("click", function () {

  // Se a barra de pesquisa estiver escondida
  if (inputbar.classList.contains("-inputbar-hidden")) {
    // Expande a barra de pesquisa
    inputbar.classList.add("-inputbar-expand");
    // Limpa as sobras de iterações anteriores
    inputbar.classList.remove("-inputbar-hidden");
  }

  // Se a barra de pesquisa estiver visivel
  else if (inputbar.classList.contains("-inputbar-expand")) {
    // Encolhe e esconde a barra de pesquisa
    inputbar.classList.add("-inputbar-hidden");
    // Limpa as sobras de iterações anteriores
    inputbar.classList.remove("-inputbar-expand");
  }
});

const usericonlink = document.querySelector(".-user-link");
const shopiconlink = document.querySelector(".-shop-link");
