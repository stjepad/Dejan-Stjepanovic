(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".sidenav").style.display = "block";
    } else {
      document.querySelector(".sidenav").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }




})(jQuery); // End of use strict

for (let i = 1; i < 100; i++) {
  const cn = [i]
 if(i % 5 === 0 && i % 3 === 0 ) {console.log("FizzBuzz")}

 else if (i % 5 === 0) {console.log("Fizz")}

 else if (i % 3 === 0) {console.log("Buzz")}

 else if (cn){console.log(cn)}
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementsByClassName("mainView").style.right = "0";
//   } else {
//     document.getElementsByClassName("mainView").style.right = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }


