// Este código encolhe a barra de navegação quando a página scrolla.
// Styles usados neste código podem ser encontrados em _animations.scss

const trigger = document.querySelector(".anim-trigger");
const nav = document.querySelector("nav");
const logo = document.querySelector(".nav-logo");
const logosvg = document.querySelector(".nav-logo-svg");
const inputbarcolor = document.querySelector(".-inputbar");
const navicons = document.querySelectorAll(".-icon-link > .-icon");
const hamburgericon = document.querySelectorAll(".hamburger-menu-rows");
const menu = document.querySelectorAll(".nav-menu .-item");
const mobileicons = document.querySelectorAll(".mobile-button > .-icon");

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
      // Troca a cor do outline da barra de pesquisa para modo escuro
      inputbarcolor.setAttribute("id", "inputbar-darkmode");

      // Troca a cor do menu para modo escuro
      for (let i = 0; i < menu.length; i++) {
        menu[i].setAttribute("id", "menu-darkmode");
      }

      // Troca as cores dos ícones para modo escuro
      for (let i = 0; i < navicons.length; i++) {
        navicons[i].setAttribute("id", "icon-darkmode");
      }

      // Troca a cor do hamburger para modo escuro
      for (let i = 0; i < hamburgericon.length; i++) {
        hamburgericon[i].setAttribute("id", "hamburger-darkmode");
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
      // Reverte a cor do outline da barra de pesquisa
      inputbarcolor.removeAttribute("id", "inputbar-darkmode");

      // Reverte a cor do menu
      for (let i = 0; i < menu.length; i++) {
        menu[i].removeAttribute("id", "menu-darkmode");
      }

      // Reverte as cores dos ícones
      for (let i = 0; i < navicons.length; i++) {
        navicons[i].removeAttribute("id", "icon-darkmode");
      }

      // Reverte a cor do hamburger para modo escuro
      for (let i = 0; i < hamburgericon.length; i++) {
        hamburgericon[i].removeAttribute("id", "hamburger-darkmode");
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

// Alterna a cor do logo da nav para active color
let darklogo = null;

logosvg.onmouseenter = function () {
  logosvg.setAttribute("id", "activelogo-svgcolor");

  if (logosvg.classList.contains("revertlogo-svgcolor")) {
    darklogo = true;
    logosvg.classList.remove("revertlogo-svgcolor");
  } else if (logosvg.classList.contains("changelogo-svgcolor")) {
    darklogo = false;
    logosvg.classList.remove("changelogo-svgcolor");
  }
};

logosvg.onmouseleave = function () {
  if (darklogo == true) {
    logosvg.classList.add("revertlogo-svgcolor");
    darklogo = null;
  } else if (darklogo == false) {
    logosvg.classList.add("changelogo-svgcolor");
    darklogo = null;
  }
  logosvg.removeAttribute("id", "activelogo-svgcolor");
};

// Alterna a cor do logo do footer para active color
const logosvgft = document.querySelector(".footer-logo-svg");

logosvgft.onmouseenter = function () {
  logosvgft.setAttribute("id", "activelogo-svgcolor");
};

logosvgft.onmouseleave = function () {
  logosvgft.removeAttribute("id", "activelogo-svgcolor");
};

// Altera a cor das 3 spans do ícone hamburger em hover
const hamburgerlink = document.querySelector(".-hamburger-link");

hamburgerlink.addEventListener("mouseenter", function () {
  for (let i = 0; i < hamburgericon.length; i++) {
    hamburgericon[i].setAttribute("id", "hamburger-hover");
  }
});

hamburgerlink.addEventListener("mouseleave", function () {
  for (let i = 0; i < hamburgericon.length; i++) {
    if (navicons[1].hasAttribute("id", "icon-darkmode")) {
      hamburgericon[i].setAttribute("id", "hamburger-darkmode");
    } else {
      hamburgericon[i].removeAttribute("id", "hamburger-hover");
    }
  }
});

// Hover dos icones de mobile ipads

// Mobile menu spawn -codeStart
// This code is responsible for: spawning the mobile menu by touching the hamburger menu icon. And, after spawned, the code destroys the mobile menu by touching the background.

const mobilemenubackground = document.querySelector(".mobile-menu-background");
const mobilemenucontainer = document.querySelector(".mobile-menu-container");
const hamburgerwrapper = document.querySelector(".hamburger-wrapper");
const hamburgermenuwrapper = document.querySelector(".mobile-menu-wrapper");

hamburgerwrapper.addEventListener("touchstart", function () {
  if (hamburgermenuwrapper.hasAttribute("id", "shrink-mobile-wrapper")) {
    hamburgermenuwrapper.removeAttribute("id", "shrink-mobile-wrapper");
    hamburgermenuwrapper.setAttribute("id", "expand-mobile-wrapper");
  }
  mobilemenubackground.setAttribute("id", "menu-appear");
  mobilemenucontainer.setAttribute("id", "menu-appear");
});

hamburgerwrapper.addEventListener("click", function () {
  mobilemenubackground.setAttribute("id", "menu-appear");
  mobilemenucontainer.setAttribute("id", "menu-appear");

  if (hamburgermenuwrapper.hasAttribute("id", "shrink-mobile-wrapper")) {
    hamburgermenuwrapper.removeAttribute("id", "shrink-mobile-wrapper");
    hamburgermenuwrapper.setAttribute("id", "expand-mobile-wrapper");
  }
});

mobilemenubackground.addEventListener("touchstart", function () {
  mobilemenubackground.removeAttribute("id", "menu-appear");
  mobilemenubackground.setAttribute("id", "menu-disappear");

  mobilemenucontainer.removeAttribute("id", "menu-appear");
  mobilemenucontainer.setAttribute("id", "menu-disappear");

  hamburgermenuwrapper.removeAttribute("id", "expand-mobile-wrapper");
  hamburgermenuwrapper.setAttribute("id", "shrink-mobile-wrapper");
});

mobilemenubackground.addEventListener("click", function () {
  mobilemenubackground.removeAttribute("id", "menu-appear");
  mobilemenubackground.setAttribute("id", "menu-disappear");

  mobilemenucontainer.removeAttribute("id", "menu-appear");
  mobilemenucontainer.setAttribute("id", "menu-disappear");

  hamburgermenuwrapper.removeAttribute("id", "expand-mobile-wrapper");
  hamburgermenuwrapper.setAttribute("id", "shrink-mobile-wrapper");
});

// Mobile menu spawn -codeEnd

//
//
//
//

// Expande e revela a barra de navegação ao clickar no ícone .-search-link
// Helper classes em: _animations.scss

const searchiconlink = document.querySelector(".-search-link");
const inputbar = document.querySelector(".-inputbar");

const usericonlink = document.querySelector(".-user-link");
const usercontext = document.querySelector(".-usercontext");

const shopiconlink = document.querySelector(".-shop-link");
const shopcontext = document.querySelector(".-shopcontext");

const overlayicons = document.querySelector(".overlay-active-icons");

const overlaysearchtip = document.querySelector(".-searchtip");
const overlayusertip = document.querySelector(".-usertip");
const overlayshoptip = document.querySelector(".-shoptip");

let searchopen = false;
let useropen = false;
let shopopen = false;

// Clickando no ícone de pesquisa
searchiconlink.addEventListener("click", function () {
  if (useropen == true) {
    //Esconde User context
    usercontext.removeAttribute("id", "revealoverlay");

    // Revela a ponta do container
    overlayusertip.removeAttribute("id", "revealoverlay");
    overlayicons.classList.remove("change-overlay-height");

    useropen = false;

    // Expande e revela a barra de pesquisa
    inputbar.classList.add("-inputbar-expand");
    // Limpa as sobras de iterações anteriores
    if (inputbar.classList.contains("-inputbar-hidden")) {
      inputbar.classList.remove("-inputbar-hidden");
    }

    overlaysearchtip.setAttribute("id", "revealoverlay");

    searchopen = true;
  } else if (shopopen == true) {
    //Esconde User context
    shopcontext.removeAttribute("id", "revealoverlay");
    overlayicons.classList.remove("change-overlay-rightcorner");

    // Revela a ponta do container
    overlayshoptip.removeAttribute("id", "revealoverlay");
    overlayicons.classList.remove("change-overlay-height");

    shopopen = false;

    // Expande e revela a barra de pesquisa
    inputbar.classList.add("-inputbar-expand");
    // Limpa as sobras de iterações anteriores
    if (inputbar.classList.contains("-inputbar-hidden")) {
      inputbar.classList.remove("-inputbar-hidden");
    }

    overlaysearchtip.setAttribute("id", "revealoverlay");

    searchopen = true;
  } else if (useropen == false && shopopen == false) {
    if (inputbar.classList.contains("-inputbar-expand")) {
      inputbar.classList.remove("-inputbar-expand");
      inputbar.classList.add("-inputbar-hidden");

      overlayicons.removeAttribute("id", "revealoverlay");

      // Revela a ponta do container
      overlaysearchtip.removeAttribute("id", "revealoverlay");
      searchopen = false;
    } else {
      inputbar.classList.add("-inputbar-expand");

      overlayicons.setAttribute("id", "revealoverlay");

      // Revela a ponta do container
      overlaysearchtip.setAttribute("id", "revealoverlay");
      searchopen = true;
    }
  }
});

// Clickando no icone usuario
usericonlink.addEventListener("click", function () {
  if (searchopen == true) {
    // Expande e revela a barra de pesquisa
    inputbar.classList.add("-inputbar-hidden");
    inputbar.classList.remove("-inputbar-expand");

    // Revela a ponta do container
    overlaysearchtip.removeAttribute("id", "revealoverlay");

    searchopen = false;

    overlayusertip.setAttribute("id", "revealoverlay");
    usercontext.setAttribute("id", "revealoverlay");
    overlayicons.classList.add("change-overlay-height");

    useropen = true;
  } else if (shopopen == true) {
    //Esconde User context
    shopcontext.removeAttribute("id", "revealoverlay");
    overlayicons.classList.remove("change-overlay-rightcorner");

    // Revela a ponta do container
    overlayshoptip.removeAttribute("id", "revealoverlay");

    shopopen = false;

    overlayusertip.setAttribute("id", "revealoverlay");
    usercontext.setAttribute("id", "revealoverlay");

    useropen = true;
  } else if (searchopen == false && shopopen == false) {
    if (usercontext.hasAttribute("id", "revealoverlay")) {
      usercontext.removeAttribute("id", "revealoverlay");

      overlayicons.removeAttribute("id", "revealoverlay");
      overlayicons.classList.remove("change-overlay-height");

      // Revela a ponta do container
      overlayusertip.removeAttribute("id", "revealoverlay");
      useropen = false;
    } else {
      usercontext.setAttribute("id", "revealoverlay");

      overlayicons.setAttribute("id", "revealoverlay");
      overlayicons.classList.add("change-overlay-height");

      // Revela a ponta do container
      overlayusertip.setAttribute("id", "revealoverlay");
      useropen = true;
    }
  }
});

// Clickando no icone shop
shopiconlink.addEventListener("click", function () {
  if (searchopen == true) {
    // Expande e revela a barra de pesquisa
    inputbar.classList.add("-inputbar-hidden");
    inputbar.classList.remove("-inputbar-expand");

    // Revela a ponta do container
    overlaysearchtip.removeAttribute("id", "revealoverlay");

    searchopen = false;

    overlayshoptip.setAttribute("id", "revealoverlay");
    shopcontext.setAttribute("id", "revealoverlay");
    overlayicons.classList.add("change-overlay-rightcorner");
    overlayicons.classList.add("change-overlay-height");

    shopopen = true;
  } else if (useropen == true) {
    //Esconde User context
    usercontext.removeAttribute("id", "revealoverlay");

    // Revela a ponta do container
    overlayusertip.removeAttribute("id", "revealoverlay");

    useropen = false;

    overlayshoptip.setAttribute("id", "revealoverlay");
    overlayicons.classList.add("change-overlay-rightcorner");
    shopcontext.setAttribute("id", "revealoverlay");

    shopopen = true;
  } else if (searchopen == false && useropen == false) {
    if (shopcontext.hasAttribute("id", "revealoverlay")) {
      shopcontext.removeAttribute("id", "revealoverlay");

      overlayicons.removeAttribute("id", "revealoverlay");
      overlayicons.classList.remove("change-overlay-rightcorner");
      overlayicons.classList.remove("change-overlay-height");

      // Revela a ponta do container
      overlayshoptip.removeAttribute("id", "revealoverlay");
      shopopen = false;
    } else {
      shopcontext.setAttribute("id", "revealoverlay");

      overlayicons.classList.add("change-overlay-rightcorner");
      overlayicons.setAttribute("id", "revealoverlay");
      overlayicons.classList.add("change-overlay-height");

      // Revela a ponta do container
      overlayshoptip.setAttribute("id", "revealoverlay");
      shopopen = true;
    }
  }
});

//
//

// Gallery hover
const galleryimgs = document.querySelectorAll(".-gallery-img");

for (let i = 0; i < galleryimgs.length; i++) {
  galleryimgs[i].onmouseenter = function () {
    galleryimgs[i].classList.add("gallery-hover-in");
  };
  galleryimgs[i].onmouseleave = function () {
    galleryimgs[i].classList.remove("gallery-hover-in");
  };
}

// Mouseover para o submenu do Instagram no footer
// Texto e ícone mudam de cor juntos

const instagramfootertext = document.querySelector(".-insta-text-footer");
const instagramfootericon = document.querySelector(".fa-instagram");

instagramfootertext.addEventListener("mouseenter", function () {
  instagramfootertext.setAttribute("id", "active-footer");
  instagramfootericon.setAttribute("id", "active-footer");
});

instagramfootertext.addEventListener("mouseleave", function () {
  instagramfootertext.removeAttribute("id", "active-footer");
  instagramfootericon.removeAttribute("id", "active-footer");
});

instagramfootericon.addEventListener("mouseenter", function () {
  instagramfootertext.setAttribute("id", "active-footer");
  instagramfootericon.setAttribute("id", "active-footer");
});

instagramfootericon.addEventListener("mouseleave", function () {
  instagramfootertext.removeAttribute("id", "active-footer");
  instagramfootericon.removeAttribute("id", "active-footer");
});

// Mouseover para o submenu do Facebook no footer
// Texto e ícone mudam de cor juntos

const facebookfootertext = document.querySelector(".-face-text-footer");
const facebookfootericon = document.querySelector(".fa-facebook");

facebookfootertext.addEventListener("mouseenter", function () {
  facebookfootertext.setAttribute("id", "active-footer");
  facebookfootericon.setAttribute("id", "active-footer");
});

facebookfootertext.addEventListener("mouseleave", function () {
  facebookfootertext.removeAttribute("id", "active-footer");
  facebookfootericon.removeAttribute("id", "active-footer");
});

facebookfootericon.addEventListener("mouseenter", function () {
  facebookfootertext.setAttribute("id", "active-footer");
  facebookfootericon.setAttribute("id", "active-footer");
});

facebookfootericon.addEventListener("mouseleave", function () {
  facebookfootertext.removeAttribute("id", "active-footer");
  facebookfootericon.removeAttribute("id", "active-footer");
});

// barra de navegação subemenus icones
// const usericonlink = document.querySelector(".-user-link");
// const shopiconlink = document.querySelector(".-shop-link");

//

// // Scroll snapping
const mainarticle1 = document.querySelector(".main-article1");
const mainarticle2 = document.querySelector(".main-article2");
const mainarticle3 = document.querySelector(".main-article3");
const gallerysnapflag = document.querySelector(".section-gallery-circles");
const footersnapflag = document.querySelector(".footer");

let preventautoscroll1 = false;
let preventautoscroll2 = false;
let preventautoscroll3 = false;
let snapthirdarticle = true;

// Flag galeria
gallerysnapflag.addEventListener("mouseenter", function mouseout() {
  // Retoma a funcionalidade de snapping do artigo 1
  preventautoscroll1 = false;
});

// Só funciona uma vez até que o cursor passe pelo artigo2 ou pelo footer
mainarticle1.addEventListener("mouseleave", function () {
  if (!preventautoscroll1) {
    mainarticle1.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    mainarticle1.scrollTop -= 200;
    preventautoscroll1 = true;
    preventautoscroll2 = false;
  }
});

mainarticle2.addEventListener("mouseenter", function () {
  if (!preventautoscroll2) {
    mainarticle2.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    preventautoscroll1 = false;
    preventautoscroll2 = true;
    preventautoscroll3 = false;
    snapthirdarticle = true;
  }
});

mainarticle3.addEventListener("mouseenter", function () {
  if (!preventautoscroll3) {
    mainarticle3.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    preventautoscroll2 = false;
    preventautoscroll3 = true;
  }
});

// Footer
footersnapflag.addEventListener("mouseenter", function () {
  // Reverte a funcionalidade de snapping do artigo 3
  preventautoscroll3 = false;
  snapthirdarticle = true;
});

mainarticle3.addEventListener("scroll", function () {
  if (snapthirdarticle) {
    mainarticle3.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    snapthirdarticle = false;
  }
});

const searchbutton = document.querySelector(".search-button");
const userbutton = document.querySelector(".user-button");
const shopbutton = document.querySelector(".shop-button");

const searchcontextmobile = document.querySelector(
  ".section-active-button > .overlay-active-icons > .-searchcontext"
);
const usercontextmobile = document.querySelector(
  ".section-active-button > .overlay-active-icons > .-usercontext"
);
const shopcontextmobile = document.querySelector(
  ".section-active-button > .overlay-active-icons > .-shopcontext"
);

const sectionactivebutton = document.querySelector(".section-active-button");
const overlayactiveicons = document.querySelector(".overlay-active-icons");

let searchbuttonopen = false;
let userbuttonopen = false;
let shopbuttonopen = false;

searchbutton.addEventListener("click", function () {
  // Se o botao nao estiver ativo

  if (shopbuttonopen == true) {
    shopbutton.removeAttribute("id", "hamburger-hover");
    searchbutton.setAttribute("id", "hamburger-hover");

    shopcontextmobile.removeAttribute("id", "menu-appear");
    searchcontextmobile.setAttribute("id", "menu-appear");

    shopbuttonopen = false;
    searchbuttonopen = true;
  } else if (userbuttonopen == true) {
    userbutton.removeAttribute("id", "hamburger-hover");
    searchbutton.setAttribute("id", "hamburger-hover");

    usercontextmobile.removeAttribute("id", "menu-appear");
    searchcontextmobile.setAttribute("id", "menu-appear");

    userbuttonopen = false;
    searchbuttonopen = true;
  } else {
    if (!searchbutton.hasAttribute("id", "hamburger-hover")) {
      // icon coloring
      searchbutton.setAttribute("id", "hamburger-hover");
      userbutton.removeAttribute("id", "hamburger-hover");
      shopbutton.removeAttribute("id", "hamburger-hover");

      // spawna o wraper do contexto
      sectionactivebutton.removeAttribute("id", "menu-disappear-context");
      sectionactivebutton.setAttribute("id", "menu-appear-context");

      // spawna a sessao contexto
      overlayactiveicons.removeAttribute("id", "menu-disappear");
      overlayactiveicons.setAttribute("id", "menu-appear");

      // remove os outros contextos
      usercontextmobile.removeAttribute("id", "menu-appear");
      shopcontextmobile.removeAttribute("id", "menu-appear");

      // adiciona o contextos
      searchcontextmobile.setAttribute("id", "menu-appear");
    }

    // Se o botao estiver ativo
    else {
      // remove cor do botao
      searchbutton.removeAttribute("id", "hamburger-hover");

      // esconde o wrapper dos contextos
      sectionactivebutton.removeAttribute("id", "menu-appear-context");
      sectionactivebutton.setAttribute("id", "menu-disappear-context");

      // esconde os container contextos
      overlayactiveicons.setAttribute("id", "menu-disappear");
      overlayactiveicons.removeAttribute("id", "menu-appear");

      searchcontextmobile.removeAttribute("id", "menu-appear");
    }
  }
});

userbutton.addEventListener("click", function () {
  // Se o botao nao estiver ativo

  if (shopbuttonopen == true) {
    shopbutton.removeAttribute("id", "hamburger-hover");
    userbutton.setAttribute("id", "hamburger-hover");

    shopcontextmobile.removeAttribute("id", "menu-appear");
    usercontextmobile.setAttribute("id", "menu-appear");

    shopbuttonopen = false;
    userbuttonopen = true;
  } else if (searchbuttonopen == true) {
    searchbutton.removeAttribute("id", "hamburger-hover");
    userbutton.setAttribute("id", "hamburger-hover");

    searchcontextmobile.removeAttribute("id", "menu-appear");
    usercontextmobile.setAttribute("id", "menu-appear");

    searchbuttonopen = false;
    userbuttonopen = true;
  } else {
    if (!userbutton.hasAttribute("id", "hamburger-hover")) {
      // icon coloring
      userbutton.setAttribute("id", "hamburger-hover");
      searchbutton.removeAttribute("id", "hamburger-hover");
      shopbutton.removeAttribute("id", "hamburger-hover");

      // spawna o wraper do contexto
      sectionactivebutton.removeAttribute("id", "menu-disappear-context");
      sectionactivebutton.setAttribute("id", "menu-appear-context");

      // spawna a sessao contexto
      overlayactiveicons.removeAttribute("id", "menu-disappear");
      overlayactiveicons.setAttribute("id", "menu-appear");

      // remove os outros contextos
      searchcontextmobile.removeAttribute("id", "menu-appear");
      shopcontextmobile.removeAttribute("id", "menu-appear");

      // adiciona o contextos
      usercontextmobile.setAttribute("id", "menu-appear");
    }

    // Se o botao estiver ativo
    else {
      // remove cor do botao
      userbutton.removeAttribute("id", "hamburger-hover");

      // esconde o wrapper dos contextos
      sectionactivebutton.removeAttribute("id", "menu-appear-context");
      sectionactivebutton.setAttribute("id", "menu-disappear-context");

      // esconde os container contextos
      overlayactiveicons.setAttribute("id", "menu-disappear");
      overlayactiveicons.removeAttribute("id", "menu-appear");

      usercontextmobile.removeAttribute("id", "menu-appear");
    }
  }
});

shopbutton.addEventListener("click", function () {
  // Se o botao nao estiver ativo

  if (userbuttonopen == true) {
    userbutton.removeAttribute("id", "hamburger-hover");
    shopbutton.setAttribute("id", "hamburger-hover");

    usercontextmobile.removeAttribute("id", "menu-appear");
    shopcontextmobile.setAttribute("id", "menu-appear");

    userbuttonopen = false;
    shopbuttonopen = true;
  } else if (searchbuttonopen == true) {
    searchbutton.removeAttribute("id", "hamburger-hover");
    shopbutton.setAttribute("id", "hamburger-hover");

    searchcontextmobile.removeAttribute("id", "menu-appear");
    shopcontextmobile.setAttribute("id", "menu-appear");

    searchbuttonopen = false;
    shopbuttonopen = true;
  } else {
    if (!shopbutton.hasAttribute("id", "hamburger-hover")) {
      // icon coloring
      shopbutton.setAttribute("id", "hamburger-hover");
      searchbutton.removeAttribute("id", "hamburger-hover");
      userbutton.removeAttribute("id", "hamburger-hover");

      // spawna o wraper do contexto
      sectionactivebutton.removeAttribute("id", "menu-disappear-context");
      sectionactivebutton.setAttribute("id", "menu-appear-context");

      // spawna a sessao contexto
      overlayactiveicons.removeAttribute("id", "menu-disappear");
      overlayactiveicons.setAttribute("id", "menu-appear");

      // remove os outros contextos
      searchcontextmobile.removeAttribute("id", "menu-appear");
      usercontextmobile.removeAttribute("id", "menu-appear");

      // adiciona o contextos
      shopcontextmobile.setAttribute("id", "menu-appear");
    }

    // Se o botao estiver ativo
    else {
      // remove cor do botao
      shopbutton.removeAttribute("id", "hamburger-hover");

      // esconde o wrapper dos contextos
      sectionactivebutton.removeAttribute("id", "menu-appear-context");
      sectionactivebutton.setAttribute("id", "menu-disappear-context");

      // esconde os container contextos
      overlayactiveicons.setAttribute("id", "menu-disappear");
      overlayactiveicons.removeAttribute("id", "menu-appear");

      shopcontextmobile.removeAttribute("id", "menu-appear");
    }
  }
});