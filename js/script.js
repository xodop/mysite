"use strict"
 

function readyLoad () {

  const body = document.body;
  body.classList.remove("preload");

}


function mouse_handler(event) {

  if (event.type == 'mouseover') {
    
    event.target.classList.remove("icon-animation_mouseout")
    event.target.classList.add("icon-animation_mouseover")
  }
  if (event.type == 'mouseout') {
    event.target.classList.remove("icon-animation_mouseover")
    event.target.classList.add("icon-animation_mouseout")
  }

}


window.addEventListener("load", readyLoad);
anime.onmouseover = anime.onmouseout = mouse_handler;
