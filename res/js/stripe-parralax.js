$(window).scroll(function()
{
	var scrollOffset = $(this).scrollTop();
	
	$(".js-stripe--bg0-parralax").css("background-position", "50% " + (((scrollOffset)-($(".js-stripe--bg0-parralax").offset().top))/10) + "px");
	$(".js-stripe--bg1-parralax").css("background-position", "50% " + (((scrollOffset)-($(".js-stripe--bg1-parralax").offset().top))/10) + "px");
	$(".js-stripe--bg2-parralax").css("background-position", "50% " + (((scrollOffset)-($(".js-stripe--bg2-parralax").offset().top))/10) + "px");
});