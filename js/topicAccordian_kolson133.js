
$(function() {                                                                

    $('#accordion li').children('ul').hide();
    
  	$('#accordion li').click(function() {                                     
		
		var $nextUL = $(this).children("ul:first");                           
		
		var $visibleSiblings = $(this).siblings().children("ul:visible");     
		

		if ($visibleSiblings.is(":visible")) {                                    
			
            $visibleSiblings.slideUp('normal', function(){                                  
            $nextUL.slideDown('normal');                                         
            });  
			
		} else {
	   		$nextUL.slideToggle('normal');   
		}
  	});
});