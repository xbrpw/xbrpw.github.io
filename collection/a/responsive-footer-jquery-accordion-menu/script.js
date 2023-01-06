$(document).ready(function(){
	var accordionOpen = $('.first_depth p'),
			secondDepth = $('.second_depth');
	
	accordionOpen.on('click',function(){
			accordionOpen.closest('.first_depth').removeClass('on');
			$(this).closest('.first_depth').addClass('on');
			
	});
});