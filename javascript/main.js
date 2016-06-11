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
/* attempt at smooth scrolling. couldn't get to work in time
$('.listnav a').click(function(){

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 400);
    return false;

  });
});
*/
   
	