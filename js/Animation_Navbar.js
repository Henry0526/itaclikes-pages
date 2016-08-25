 $(document).ready(function() {
        
/* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: 0
		/*$('header').height()-$('#nav').height()*/
      }
});    

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })

/* smooth scrolling for scroll to top */
$('.scroll-top').click(function(){
  $('body').animate({scrollTop:0},1000);
})

/* smooth scrolling for nav sections */
	$('#nav .navbar-nav li>a').click(function(){
		var links = $(this).attr('href');
		var posi = $(links).offset().top;
		$('body').animate({scrollTop:posi},700);
	});






        
});