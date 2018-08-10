// Look for .hamburger
  var hamburger = document.querySelector(".soccer-ball");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });

$(document).ready(function(){
    //init scroll magic
    var controller = new ScrollMagic.Controller();
    
        //build a scene
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#stop-grow',
        triggerHook: 0 , 
        triggerOffset: 0
    })
    
    
        .setClassToggle('.soccer-ball ', 'end-grow')
    .addTo(controller);   
    
    });