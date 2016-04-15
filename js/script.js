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

  /*
  START Slider
  */
  var lastSlide = 0;
  var currentSlide = 0;
  var slides = 0;
  var duration = 800;

  function scrollSlide(action)
  {
    if(action === 'left' && currentSlide > 0)
    {
      currentSlide--;
    }
    else if(action === 'right'  && currentSlide < slides - 1)
    {
      currentSlide++;
    }
    
    if(currentSlide === 0)
    {
        $('#arrowLeft').hide();
    }
    else
    {
        $('#arrowLeft').show();
    }
    if(currentSlide === slides - 1)
    {
        $('#arrowRight').hide();
    }
    else
    {
        $('#arrowRight').show();
    }
    
    if(currentSlide !== lastSlide || action === 'update')
    {
      var dur = action === 'update' ? 0 : duration;
      
      var w = $('.slides-wrapper');
      var width = w.outerWidth() + 5;
      var totWidth = width * currentSlide;
      w.animate({scrollLeft: totWidth}, dur);
      lastSlide = currentSlide;
    }
  }

  $(document).on("click touchstart","#arrowLeft",function(e) {
    e.preventDefault();
    scrollSlide('left');
  });

  $(document).on("click touchstart","#arrowRight",function(e) {
    e.preventDefault();
    scrollSlide('right');
  });

  $( document ).ready(function() {
    slides = $('#slider > .slides-wrapper').children('.slide').length;
    if(slides > 0)
    {
      scrollSlide('update');
    }
  });

  $( window ).resize(function() {
    scrollSlide('update');
  });
  /*
  END Slider
  */
