+function ($) {
  'use strict';
	$('.tabs').each(function(i){
		var active = $('.tab.active', this).index();
		$('.tab-con').hide();
		$('.tab-con:eq('+active+')', $('.tabs-container')[i]).show();
		$('.tab', this).click(function(){
			var data_open = $(this).data('open'),
				tabs = $('.tabs')[i],
				tab_cont = $('.tabs-container')[i];
			$('.tab', tabs).removeClass('active');
			$(this).addClass('active');
			$('.tab-con', tab_cont).slideUp();
			$(data_open).slideDown();
		});
	});
}(jQuery);