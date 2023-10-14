$(function(){

	$.scrollIt({topOffset:-90});


	$(".open-menu").click(function () {
		
		$("body").addClass("overflowH");
		$(".menu").fadeIn();
		
	});
	

	$(".closeX,.BgClose,.menu .menuContent .menuRes li a").click(function () {
		
		$("body").removeClass("overflowH");
		$(".menu").fadeOut();
		
	});

	
	$(window).scroll(function () {
		
		if($(this).scrollTop() > 200) {
			
			
			$(".header").addClass("navbar-fixed-top");
			
			
		} else {
			
			$(".header").removeClass("navbar-fixed-top");
		}
		
	});
	
	
	
	
});
