$(document).on('click touchstart', '#menu-button', function(){
	$('#menu-items').toggle(150);
});

$(document).on('click touchstart', function(e){
	var o = $(e.target);
	if( !$(o).is('#menu-button') && !$(o).is('#menu-items') )
	{
		$('#menu-items').hide(150);
	}
});