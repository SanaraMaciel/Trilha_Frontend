// JavaScript Document
$(document).ready(function() {
//$(function(){};)   

$('form').submit(function(event) {
  if ($('input:first').val() == "javascript" ) {
    $('span').text( "Ok!" ).show().fadeOut(1000);
	window.open('http://static2.wikia.nocookie.net/__cb20081015211410/zelda/images/thumb/c/cf/Link_Wind_Waker_3.png/300px-Link_Wind_Waker_3.png','janela nova','width=300,height=200');
    return;
	
  }
 
  $('span').text( "invalido" ).show().fadeOut( 1000 );
  event.preventDefault();
});

});