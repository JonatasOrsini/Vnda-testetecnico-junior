const swiper=new Swiper(".swiper-container",{slidesPerView:1,centeredSlides:!0,spaceBetween:0,grabCursor:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),trigger=document.querySelector(".anim-trigger"),nav=document.querySelector("nav"),logo=document.querySelector(".nav-logo"),logosvg=document.querySelector(".nav-logo-svg"),navicons=document.querySelectorAll(".nav-iconcontainer .-icon i"),menu=document.querySelectorAll(".nav-menu .-item"),navOptions={rootMargin:"0px 0px 0px 0px"},navObserver=new IntersectionObserver((function(e,o){e.forEach((e=>{if(e.isIntersecting){nav.classList.add("grow-bar"),logo.classList.add("grow-logo"),logosvg.classList.add("revertlogo-svgcolor");for(let e=0;e<menu.length;e++)menu[e].removeAttribute("id","menu-darkmode");for(let e=0;e<navicons.length;e++)navicons[e].removeAttribute("id","icon-darkmode");nav.classList.contains("shrink-bar")&&(nav.classList.remove("shrink-bar"),logo.classList.remove("shrink-logo"),logosvg.classList.remove("changelogo-svgcolor"))}else{nav.classList.add("shrink-bar"),logo.classList.add("shrink-logo"),logosvg.classList.add("changelogo-svgcolor");for(let e=0;e<menu.length;e++)menu[e].setAttribute("id","menu-darkmode");for(let e=0;e<navicons.length;e++)navicons[e].setAttribute("id","icon-darkmode");nav.classList.contains("grow-bar")&&(nav.classList.remove("grow-bar"),logo.classList.remove("grow-logo"),logosvg.classList.remove("revertlogo-svgcolor"))}}))}),navOptions);navObserver.observe(trigger);
//# sourceMappingURL=all.js.map
