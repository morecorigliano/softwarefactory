var nav = document.getElementById("header");
var underServicios = document.getElementById("under-servicios");

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
    nav.classList.add("scroll");
    underServicios.classList.remove("scroll-sv-join");
    underServicios.classList.add("scroll-sv");
  } else{
    nav.classList.remove("scroll");
    underServicios.classList.add("scroll-sv-join");
    underServicios.classList.remove("scroll-sv");
  }
};
