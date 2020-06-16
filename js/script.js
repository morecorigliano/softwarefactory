var nav = document.getElementById("header");
var navToggle = document.getElementById("nav-toggle");
var navBg = document.getElementById("mobile-bg");
var navList = document.getElementById("nav-list");
var navListItem = document.getElementsByTagName("li");
var body = document.body;
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");

var mediaQueries = window.matchMedia("(max-width: 1024px)")
myFunction(mediaQueries)
mediaQueries.addListener(myFunction)


window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
    nav.classList.add("scroll");
  } else{
    nav.classList.remove("scroll");
  }
};

var navToggleClicks = 1

function myFunction(mediaQueries){ 
  
  if(mediaQueries.matches){

    navToggle.addEventListener("click", OpenClose);

    for (var i = 0; i < navListItem.length; i++) {
      navListItem[i].addEventListener('click', OpenClose);
    }

  }

}

function OpenClose(){
    navToggleClicks++
    if(navToggleClicks % 2 == 0){
        openNav();
    }else{
        closeNav();
    }
}

function openNav(){
    navBg.style.transform = "scale(1)";
    navList.style.transform = "translate(0, -50%)";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    lineOne.style.transform = "rotate(-45deg) scale(0.8)";
    lineTwo.style.opacity = "0";
    lineThree.style.transform = "rotate(45deg) scale(0.8) translate(0.1vw, 0.4vw)";
    lineThree.style.width = "8vw";
}

function closeNav(){
    body.style.height = "auto";
    body.style.overflow = "auto";
    navBg.style.transform = "scale(0)";
    navList.style.transform = "translate(150%, -50%)";
    lineOne.style.transform = "rotate(0) scale(1)";
    lineTwo.style.opacity = "1";
    lineThree.style.transform = "rotate(0) scale(1) translate(0, 0)";
    lineThree.style.width = "4vw";
}