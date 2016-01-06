$(function() {  
	$('a').click(function(e) {        
		var ahref = $(this).attr('href');
		if(ahref.indexOf('http') == -1 ) {
			ga('send', 'event', 'inner_link', 'click', ahref);
		} else { 
			ga('send', 'event', 'outer_link', 'click', ahref);
		}
	});
});
