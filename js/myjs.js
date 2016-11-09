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
    	$('#main-image').attr('src', url).css("width", "555px");
	});
//To TOP LINK default 
		$('#top-page').hide();
        $('#top-page').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1100);
            return false;
        });


        //Hover PopUP background
        $(".drop-hover").mouseenter(function(event) {
        	event.preventDefault();
        	$(".add-pop").addClass("fixed-pop");
        });

        $(".drop-hover").mouseleave(function(event) {
        	event.preventDefault();
        	$(".add-pop").removeClass("fixed-pop");
        });
});
  //When distance from top = 250px fade button in/out
        $(window).scroll(function(){
            if ($(this).scrollTop() > 250) {
                $('#top-page').fadeIn(300);
            } else {
                $('#top-page').fadeOut(300);
            }
        });
$(document).hover(function () {
    $(".drop-caret").hide();
});
	//Sticky Header
	$(window).scroll(function() {

	if ($(this).scrollTop() > 230 && $(this).width() > 992){  
	    $('.main-navigation .navbar').addClass("sticky");
	    $('.logo-main-sticky>img').addClass("sticky-logo");
	    $(".logo-main-sticky").css({"display":"block", "width":"100%"});
	  }
	  else{
	    $('.main-navigation .navbar').removeClass("sticky");
	    $('.logo-main-sticky>img').removeClass("sticky-logo");
	  	$(".logo-main-sticky").css("display","none");
	  }
	});

