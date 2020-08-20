var navToggle = document.getElementById("nav-toggle");
var navBg = document.getElementById("mobile-bg");
var navList = document.getElementById("nav-list");
var navListItem = document.getElementsByTagName("li");
var body = document.body;
var lineOne = document.getElementById("line-one");
var lineTwo = document.getElementById("line-two");
var lineThree = document.getElementById("line-three");
var inicio = document.getElementById("logo");

var navToggleClicks = 1;

var mediaQueries = window.matchMedia("(max-width: 1024px)");
myFunction(mediaQueries);
mediaQueries.addListener(myFunction);

function myFunction(mediaQueries){ 
  
  if(mediaQueries.matches){

    navToggle.addEventListener("click", OpenClose);

    navToggle.addEventListener("click", setLogo);

    for (var i = 0; i < navListItem.length; i++) {
      navListItem[i].addEventListener('click', OpenClose);
    }

  }

}

function setLogo(){
  inicio.addEventListener('click', OpenClose);
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

var white = document.getElementsByClassName("white");

for (var i = 0; i < white.length; i++) {
  white[i].addEventListener("mouseover", function(){
    this.classList.remove("white");
    this.children[0].style.transform = "scale(1.3)";
    this.children[1].style.fontWeight = "700";
  });
  white[i].addEventListener("mouseout", function(){
    this.classList.add("white");
    this.children[0].style.transform = "scale(1)";
    this.children[1].style.fontWeight = "300";
  });
}

var blue = document.getElementsByClassName("blue");

for (var i = 0; i < blue.length; i++) {
  blue[i].addEventListener("mouseover", function(){
    this.classList.remove("blue");
    this.children[0].style.transform = "scale(1.3)";
    this.children[1].style.fontWeight = "700";
  });
  blue[i].addEventListener("mouseout", function(){
    this.classList.add("blue");
    this.children[0].style.transform = "scale(1)";
    this.children[1].style.fontWeight = "300";
  });
}

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

var formInputs = document.getElementsByClassName("form");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].children[0].addEventListener("input", function(){
        if(this.value.length == 0){
            this.parentElement.children[1].classList.remove("filled"); 
        }else{
        this.parentElement.children[1].classList.add("filled");
        }
    });
}

var lngsFront = document.getElementById("lngs-front");
var lngsBack = document.getElementById("lngs-back");
var lngText= document.getElementsByClassName("lng-text");

for (var i = 0; i < white.length; i++) {
    white[i].addEventListener('click', function(){
        var className = this.classList[1];
        lngsFront.style.display = "none";
        lngsFront.style.position = "absolute";
        for (var b = 0; b < lngText.length; b++) {
            if(lngText[b].classList.contains(className)){
              lngText[b].style.position = "relative";
              lngText[b].style.display = "flex";
              lngText[b].addEventListener('click', function(){
                this.style.position = "absolute";
                this.style.display = "none";
                lngsFront.style.display = "grid";
                lngsFront.style.position = "relative";
              })
            }
        }
    });
}

for (var i = 0; i < blue.length; i++) {
  blue[i].addEventListener('click', function(){
      var className = this.classList[1];
      lngsBack.style.display = "none";
      lngsBack.style.position = "absolute";
      for (var b = 0; b < lngText.length; b++) {
          if(lngText[b].classList.contains(className)){
            lngText[b].style.position = "relative";
            lngText[b].style.display = "flex";
            lngText[b].addEventListener('click', function(){
              this.style.position = "absolute";
              this.style.display = "none";
              lngsBack.style.display = "grid";
              lngsBack.style.position = "relative";
            })
          }
      }
  });
}


var letter = document.getElementsByClassName("letters");
var logo = document.getElementById("logo-img");
var header = document.querySelector("header");

var mediaQueriesMax = window.matchMedia("(min-width: 1024px)");
myFunctionMax(mediaQueriesMax);
mediaQueriesMax.addListener(myFunction);

function myFunctionMax(mediaQueriesMax){ 
  
  if(mediaQueriesMax.matches){

    window.addEventListener('scroll', function(){
      "use strict";
      if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
        for (var b = 0; b < letter.length; b++) {
          letter[b].style.transform= "scale(0)";
        }
        setTimeout( function() {
          logo.setAttribute("viewBox","1500 0 900 824.3");
        }, 110);
        setTimeout( function() {
        logo.style.transform = "scale(1.8)";
        }, 100);
      } else{
        for (var b = 0; b < letter.length; b++) {
          letter[b].style.transform= "scale(1)";
        }
        setTimeout( function() {
        logo.setAttribute("viewBox","0 0 2693.1 824.3");
        logo.style.transform = "scale(1)";
      }, 100);
      }
    });
  }

}