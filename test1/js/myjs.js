// Author:Daniel Neshkoski

$(document).ready(function(){
	$(".drop-hover").hover(function(e){
		$('.drop-caret').toggle();
	});
	$(".dropdown-menu-large").hover(function(e){
		$('.drop-caret').show();
	});
	// On scroll down Main Menu Mobile
	if($(window).width() < 768){
	 $(window).scroll(function() {
        // if ($(document).scrollTop() > 100) {
        //     $('.main-navigation .navbar-header').css({'background':"white", "width": "100%"});
        // }
        // else {
        //     $('.main-navigation .navbar-header').css({"background":"white", "width": "100%"});
        // }
    });
	}
	//Product Image replace
	$('.show-product img').hover(function() {
    	var url = $(this).attr('src');
    	$('#main-image').attr('src', url).css("width", "355px");
	});
});

$(document).hover(function () {
    $(".drop-caret").hide();
});


