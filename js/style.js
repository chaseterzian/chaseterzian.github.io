$(document).ready(function() {

	// $('#landing-page').hide();
	$('#chase-terzian').hide();
	$('#the-source').hide();
	$('#landing-link-buttons').hide();
	$('#landing-site-buttons').hide();
	$('hr').hide();

	// $('.bg1').fadeIn(1000);
	$('#chase-terzian').fadeIn(2000);
	

	setTimeout(function() {
		$('#the-source').fadeIn(2000);
	},200);

	setTimeout(function() {
	$('#landing-link-buttons').fadeIn(2000);
	$('hr').fadeIn(3000);
	},400);

	setTimeout(function() {
	$('#landing-site-buttons').fadeIn(2000);
	},600); 

});