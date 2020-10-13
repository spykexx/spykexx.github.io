$(document).ready(function(){
    $(".fa-chevron-down").click(function(){
        $(".nav-links").toggleClass("nav-active");
        $("nav").toggleClass("nav-total-active");
        $(".fa-chevron-down").toggleClass("fa-rotate");
    });
    $(".nav-links li a").each(function () {
      if(window.location.href == this.href){
        $(this).closest("a").addClass("active");
      }
    });
  });
  
  $(document).scroll(function() {
    
    $(".nav-links").removeClass("nav-active");
    $("nav").removeClass("nav-total-active");
    $(".fa-chevron-down").removeClass("fa-rotate");
    if ($(document).scrollTop() >= 10) {
      // user scrolled 50 pixels or more;
      // do stuff      
    } 
  });

$('li').click(function() {
  var t = $(this).attr('id');
  window.alert(t);
  getID(t);
})



function getID(id) {
  var id = id;
  if ($('#description').is(':hidden')) {
    $('#description').show();
    $("body, html").animate({
      scrollTop: $('#description').offset().top
    }, 800);
  }else {
    $('#description').hide();
  }
  
}