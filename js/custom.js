$(function() {

    $("#js_hide-btn").on("click", function(){
    	if ($(".header__top").css('top') == '0px') {
			$(".header__top").animate({top: "-=50"}, '300');
			$(".hide-btn__icon--open").css('transform', 'rotate(90deg)');
			
		} else {
			$(".header__top").animate({top: "+=50"}, '300');
			$(".hide-btn__icon--open").css('transform', 'rotate(0)');
			
		}
	});
});


