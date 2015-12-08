$(document).ready(function() {
	$("html").niceScroll({width:"8px"});
});

$(document).on('click touchstart', '#menu-button', function(e){
	e.preventDefault();
	$('#menu-items').toggle(150);
});

var flag = false;

$(document).on('click touchstart', function(e){
	if(!flag)
	{
		flag = true;
		setTimeout(function(){ flag = false; }, 100);

		var o = $(e.target);
		if($('#menu-button').css('display') != 'none' && !$(o).is('#menu-button') && !$(o).is('#menu-items') && !$.contains('#menu-items', o) )
		{
			$('#menu-items').hide(150);
		}
	}
});