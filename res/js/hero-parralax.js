$(window).scroll(function()
{
	heroParralax();
});

 $(document).ready(function() 
 {
	heroParralax();
 });

function heroParralax()
{
	var scrollOffset = $(this).scrollTop();
	
	$(".hero__header").css("transform", "translateY(" + scrollOffset /5 + "px)");
	$(".hero--md").css("background-position", "50% " + ((scrollOffset /3)-20) + "px");
	$(".hero--md").css("filter", "grayscale(" + (scrollOffset/5) + "%)");
	$(".hero--md").css("-webkit-filter", "grayscale(" + (scrollOffset/5) + "%)");
}