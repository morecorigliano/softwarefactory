var nav = document.getElementById("header");
var underServicios = document.getElementById("under-servicios");

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
    nav.classList.add("scroll");
    underServicios.classList.add("scroll-sv");
  } else{
    nav.classList.remove("scroll");
    underServicios.classList.remove("scroll-sv");
  }
};

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("fade");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 6000);
}