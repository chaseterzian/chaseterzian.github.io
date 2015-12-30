$(document).ready(function() {

	// $('#landing-page').hide();
	$('#chase-terzian').hide();
	$('#the-source').hide();
	$('#landing-link-buttons').hide();
	$('#landing-site-buttons').hide();
	$('hr').hide();

	// $('.bg1').fadeIn(1000);
	$('#chase-terzian').fadeIn(1000);
	

	setTimeout(function() {
		$('#the-source').fadeIn(1000);
	},200);

	setTimeout(function() {
	$('#landing-link-buttons').fadeIn(1000);
	$('hr').fadeIn(3000);
	},400);

	setTimeout(function() {
	$('#landing-site-buttons').fadeIn(1000);
	},600); 

});