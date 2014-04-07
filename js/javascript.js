$(document).ready(function() {
  	$( ".banner, .especialies" ).fadeIn( 2500 );
});


$( "a" ).click(function() {
  	$( ".banner" ).hide( 1000 );
});


$(".servicesmenu, .midiamenu, .contactmenu").click(function() {
    $( ".adtexts" ).animate({
    left: 1771,
  }, 400 );
    $( ".adtexts" ).hide( 1000 );
});

$(".home").click(function() {
    $( ".adtexts" ).animate({
    left: 0,
  }, 400 );
    $( ".adtexts" ).show( 1000 );
});

$(".home").click(function() {
    $( ".services, .midia, .contact" ).fadeOut( 2500 );
});





$(window).load(function() {
	$('.loading').fadeOut();
});