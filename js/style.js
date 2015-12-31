$(document).ready(function() {

	// $('#landing-page').hide();
	$('#chase-terzian').hide();
	$('#the-source').hide();
	$('#landing-link-buttons').hide();
	$('#landing-site-buttons').hide();
	$('hr').hide();
	// $('html').hide();
	$('.bg1').hide();
	$('#resume-button-landing').hide();


	

	$('.bg1').fadeIn(3000);
	$('#chase-terzian').fadeIn(3000);
	setTimeout(function() {
		$('#the-source').fadeIn(3000);
	},400);
	setTimeout(function() {
	$('#landing-link-buttons').fadeIn(3000);
	$('hr').fadeIn(3000);
	},800);
	setTimeout(function() {
	$('#landing-site-buttons').fadeIn(3000);
	},1200); 

});