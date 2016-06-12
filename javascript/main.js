//interactive form
$(function(){

 $('.infosubmit').on('submit', function(event) {

     event.preventDefault();
     if ($('input[type="email"]').val().length !== 0 ) {
        alert('Thank you for subscribing!');
     }
     else
     {
        alert('Please enter a valid email address.');
     }

  });


/*slide plug*/

$('.bxslider').bxSlider({
    controls: false,
     slideMargin: 0,
    slideWidth: 0,
    auto: true,
    infiniteLoop: true,
    minslides: 1,
    maxSlides: 4
    
    });
});

// $('.listnav a').click(function(){

//     $('html, body').animate({
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 400);
//     return false;

//   });

// $('a[href^="#"]').on('click',function (e) {
//         e.preventDefault();

//         var $target = $(this.hash);

//         $('html, body').stop().animate(
//         {
//             'scrollTop': $target.offset().top - ($('header').height())
//         },
//         900, 'swing');
//     });


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1300);
        return false;
      }
    }
  });
});

   
	