$(function(){

  $(".btn-offer").click(function(){
    var elementClick = $(this).attr("href");
    var destination =$(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

  $('a.btn-call').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297,	function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
    $('#myModal').animate({opacity: 0}, 198, function(){
        $(this).css('display', 'none');
        $('#myOverlay').fadeOut(297);
      });
    });
  
    $("#hide").click(function(){
      $("p.about-owner_text").hide();
    });
    $("#show").click(function(){
      $("p.about-owner_text").show();
    });
});