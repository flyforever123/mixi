$(document).ready(function(){
	
	$('.tab-links li a').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tab-links li a').removeClass('current');
		$('.prod-tab-content').removeClass('current');
		$('.intro-new-tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})