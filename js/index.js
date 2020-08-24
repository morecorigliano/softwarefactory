var nav = document.getElementById("header");
var underServicios = document.getElementById("under-servicios");

////// agregar background-color al nav al scrollear ////////

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
    nav.classList.add("scroll");
  } else{
    nav.classList.remove("scroll");
  }
};

////// efecto slider en textos de contacto ////////

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
  setTimeout(showSlides, 3000);
}