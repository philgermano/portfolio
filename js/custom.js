
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets 
       
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: 'images/paisley-back.png' },
            { src: 'images/background.png' },
            { src: 'images/paisley-dos.png' }
        ],
        timer: false,
        transition: [ 'zoomIn', ],
        animation: ['kenburns']
    });
  });

//project tiny slide
let slider = tns({
  container: '.my-slider',
  "center": true,
  "loop": false,
  autoplay: false,
  "mouseDrag": true,
  "swipeAngle": false,
  "autoHeight": true,
  "responsive": {
    "350": {
      "items": 1,
      "controls": true,
      "edgePadding": 30
    },
    "500": {
      "items": 2
    }
  },
});

let slider2 = document.querySelectorAll('.slider2').forEach(slider => {
  tns({
    container: slider,
    "center": true,
    "loop": true,
    autoplay: true,
    nav: false,
    "mouseDrag": true,
    viewportMax:20,
    autoplayButtonOutput: false,
    "items": 1,
    controls:false,
  });
});
    

    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });


  
//Modals for projects
// Get the modal
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");

// Get the button that opens the modal
var modalButton = document.getElementsByClassName("modal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
modalButton[0].onclick = function() {
  modal1.style.display = "block";
}
modalButton[1].onclick = function() {
  modal2.style.display = "block";
}
modalButton[2].onclick = function() {
  modal3.style.display = "block";
}
modalButton[3].onclick = function() {
  modal4.style.display = "block";
}
modalButton[4].onclick = function() {
  modal5.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span[0].onclick = ()=>{
  modal1.style.display = "none";
}
span[1].onclick = ()=>{
  modal2.style.display = "none";
}
span[2].onclick = ()=>{
  modal3.style.display = "none";
}
span[3].onclick = ()=>{
  modal4.style.display = "none";
}
span[4].onclick = ()=>{
  modal5.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  else if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}