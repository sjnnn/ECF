
/* JS CONNEXION */

$(function(){
  console.log(window.location.href);
  switch(window.location.pathname.split("/").pop()){
  
  case "connexion.html": const btnco = document.getElementById("btnco");
  btnco.addEventListener("click", function () {
      
      window.location="jury.html";
  })
  break;
  }

  console.log(window.location.href);
  switch(window.location.pathname.split("/").pop()){
  
  case "connexion.html": const btnco1 = document.getElementById("btnco1");
  btnco1.addEventListener("click", function () {
      
      window.location="auteur.html";
  })
  break;
  }
  
  })

/* JS inscription*/

$(function(){
console.log(window.location.href);
switch(window.location.pathname.split("/").pop()){

case "inscription.html": const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    
    window.location="message.html";
})
break;
}

})

/* JS Auteur */
$(function(){
  console.log(window.location.href);
  switch(window.location.pathname.split("/").pop()){
  
  case "auteur.html": const btn = document.getElementById("btn");
  btn.addEventListener("click", function () {
      
      window.location="message1.html";
  })
  break;
  }
  
  })

/* JS jury */



  function openNav() {
    document.getElementById("myNav").style.width = "350px";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0";
  }

/*------------------------------------------*/


//#region variables histo.html
// On récupère le modal
var modal1 = document.getElementById("Modal1");

// On récupère le bouton qui va ouvrir le modal
var btn1 = document.getElementById("btn1");

// On recupere l'élément span qui va fermer le modal
var span1 = document.getElementsByClassName("close1")[0];

var modal2 = document.getElementById("Modal2");
var btn2 = document.getElementById("btn2");
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById("Modal3");
var btn3 = document.getElementById("btn3");
var span3 = document.getElementsByClassName("close3")[0];

var modal4 = document.getElementById("Modal4");
var btn4 = document.getElementById("btn4");
var span4 = document.getElementsByClassName("close4")[0];

var modal5 = document.getElementById("Modal5");
var btn5 = document.getElementById("btn5");
var span5 = document.getElementsByClassName("close5")[0];

var modal6 = document.getElementById("Modal6");
var btn6 = document.getElementById("btn6");
var span6 = document.getElementsByClassName("close6")[0];

var modal7 = document.getElementById("Modal7");
var btn7 = document.getElementById("btn7");
var span7 = document.getElementsByClassName("close7")[0];

var modal8 = document.getElementById("Modal8");
var btn8 = document.getElementById("btn8");
var span8 = document.getElementsByClassName("close8")[0];
//#endregion
// Quand l'utilisateur clique sur le bouton ça ouvre le modal
btn1.onclick = function() {
    modal1.style.display = "block";
  }
  
  // Quand l'utilisateur clique sur le span ca ferme le modal
  span1.onclick = function() {
    modal1.style.display = "none";
  }
  
  // Quand l'utilisateur clique n'importe où en dehors du modal, ça le ferme
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  modal2.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}


btn3.onclick = function() {
    modal3.style.display = "block";
  }
  
  span3.onclick = function() {
    modal3.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
  }



  btn4.onclick = function() {
    modal4.style.display = "block";
  }
  
  span4.onclick = function() {
    modal4.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  }


  btn5.onclick = function() {
    modal5.style.display = "block";
  }
  
  span5.onclick = function() {
    modal5.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal5) {
      modal5.style.display = "none";
    }
  }



  btn6.onclick = function() {
    modal6.style.display = "block";
  }
  
  span6.onclick = function() {
    modal6.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal6) {
      modal6.style.display = "none";
    }
  }



  btn7.onclick = function() {
    modal7.style.display = "block";
  }
  
  span7.onclick = function() {
    modal7.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal7) {
      modal7.style.display = "none";
    }
  }



  btn8.onclick = function() {
    modal8.style.display = "block";
  }
  
  span8.onclick = function() {
    modal8.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal8) {
      modal8.style.display = "none";
    }
  }