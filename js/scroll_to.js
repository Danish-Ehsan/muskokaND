$(function() {

	$('a[href^="#"]').on('click', function(event) {
    	var target = $(this.getAttribute('href'));

    	if( target.length ) {
      	  event.preventDefault();
      	  $navList.slideToggle();
		  $butLine.toggleClass('open');
      	  $('html, body').stop().animate({
       	     scrollTop: target.offset().top
        }, 600);
    }
});

});