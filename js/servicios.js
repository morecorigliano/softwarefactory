////// agregar background-color al nav al scrollear ////////

var mediaQuerieServ = window.matchMedia("(min-width: 1025px)");
myFunctionServ(mediaQuerieServ);
mediaQuerieServ.addListener(myFunctionServ);

function myFunctionServ(mediaQuerieServ){ 
  
  if(mediaQuerieServ.matches){
    
    var nav = document.getElementById("header");

    window.onscroll = function() {
      "use strict";
      if (document.body.scrollTop >= 180 || document.documentElement.scrollTop >= 180) {
        nav.classList.add("scroll");
        nav.classList.remove("servicios-scroll")
      } else{
        nav.classList.remove("scroll");
        nav.classList.add("servicios-scroll")
      }
    };

  }
}

var mediaQueriesServMax = window.matchMedia("(max-width: 1024px)");
myFunctionServMax(mediaQueriesServMax);
mediaQueriesServMax.addListener(myFunctionServMax);

function myFunctionServMax(mediaQueriesServMax){ 
  if(mediaQueriesServMax.matches){
    nav.classList.remove("servicios-scroll");
    nav.classList.add("scroll");
  }
}