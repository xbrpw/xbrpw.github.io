$('.post-wrapper').click(function(){
	$('.post-inner', this).toggleClass('open').children('.text').slideToggle(500);
});

$('.open-all').click(function(){
	$('.post-inner').addClass('open').children('.text').slideDown(500);;
});

$('.close-all').click(function(){
	$('.post-inner').removeClass('open').children('.text').slideUp(500);;
});