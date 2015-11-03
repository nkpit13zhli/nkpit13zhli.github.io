$(document).on('click touchstart', '#menu-button', function(e){
	e.preventDefault();
	$('#menu-items').toggle(150);
});

$(document).on('click touchstart', function(e){
	e.preventDefault();
	var o = $(e.target);
	if( !$(o).is('#menu-button') && !$(o).is('#menu-items') )
	{
		$('#menu-items').hide(150);
	}
});