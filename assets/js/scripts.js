$(document).ready(function(){

    //carousel
    $('.new_slider').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
    });

    //ticker
    $('#js-news').ticker();

    //popup image
    $('a.btn-gallery').on('click', function(event) {
		event.preventDefault();
		
		var gallery = $(this).attr('href');
    
		$(gallery).magnificPopup({
      delegate: 'a',
			type:'image',
			gallery: {
				enabled: true
			}
		}).magnificPopup('open');
	});
     // Page Loader
     setTimeout(function () {
      $('.pre-loader').fadeOut();
  }, 1500);

});