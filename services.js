

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
    $('#descriptionMobile1').hide();
    $('#descriptionMobile2').hide();
    $('#descriptionMobile3').hide();
    $('#descriptionMobile4').hide();
    $('#description').hide();
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

  $(window).resize(function() {
    if ($(window).width() < 767) {
      $('#description').hide();
   }
   else {
    $('#descriptionMobile1').hide();
    $('#descriptionMobile2').hide();
    $('#descriptionMobile3').hide();
    $('#descriptionMobile4').hide();
   }    
  });
$('li').click(function() {
  var t = $(this).attr('id');
  //window.alert(t);
  getSize(t);
  
})

function getSize(id) {
  if ($(window).width() < 767) {
    descr = "Mobile";
    getIDMobile(id);
 }
 else {
    descr = "Desktop";
    getIDDesktop(id);
 }
}

function getIDDesktop(id) {
  var id = id;
  var desc = $('#description');
  
  if (desc.is(':hidden')) {
    desc.show();
    $("body, html").animate({
      scrollTop: desc.offset().top
    }, 800);
  }else {
    desc.hide();
  }
  
}

function getIDMobile(id){
  var id = id;
  
  if(id.indexOf("c1") >= 0){
    var desc = $('#descriptionMobile1');
    $('#descriptionMobile2').hide();
    $('#descriptionMobile3').hide();
    $('#descriptionMobile4').hide();
  }
  if(id.indexOf("c2") >= 0){
    var desc = $('#descriptionMobile2');
    $('#descriptionMobile1').hide();
    $('#descriptionMobile3').hide();
    $('#descriptionMobile4').hide();
  }
  if(id.indexOf("c3") >= 0){
    var desc = $('#descriptionMobile3');
    $('#descriptionMobile1').hide();
    $('#descriptionMobile2').hide();
    $('#descriptionMobile4').hide();
  }
  if(id.indexOf("c4") >= 0){
    var desc = $('#descriptionMobile4');
    $('#descriptionMobile1').hide();
    $('#descriptionMobile2').hide();
    $('#descriptionMobile3').hide();
  }
  
  if (desc.is(':hidden')) {
    desc.text(getText(id)); 
    desc.show();
    // $("body, html").animate({
    //   scrollTop: desc.offset().top
    // }, 800);
  }else {
    desc.hide();
  }
}

function getText(id) {
  if(id === "c1l1"){
    return "True";
  }
}