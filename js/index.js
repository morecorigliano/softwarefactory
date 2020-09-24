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

////// agregar background-color al nav al scrollear ////////

var nav = document.getElementById("header");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
    nav.classList.add("scroll");
  } else{
    nav.classList.remove("scroll");
  }
};

//////// slider clientes ////////

var carrousel = document.getElementById("img-wrp");
var back = document.getElementById("back");
var next = document.getElementById("next");



next.addEventListener("click", function(){
    carrousel.style.transform = "translateX(-7.8rem)";
});

back.addEventListener("click", function(){
  carrousel.style.transform = "translateX(0)";
});

//////// efecto hover metodologia ////////

var dark = document.getElementsByClassName("dark");

for (var i = 0; i < dark.length; i++) {
  dark[i].addEventListener("mouseover", function(){
    this.classList.remove("dark");
    this.style.transform = "scale(1.3)";
  });
  dark[i].addEventListener("mouseout", function(){
    this.classList.add("dark");
    this.style.transform = "scale(1)";
  });
}