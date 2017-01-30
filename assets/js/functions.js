$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.text').fadeIn(1500);
        $('section').removeClass("height");
    }
});
  $(function() {

    $('section.mobile-nav').on("click", function(evento){
      $('.section.mobile-nav-click').css( 'display', 'none' );
    });

    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });


    setTimeout(function() {
      $("section.video").fadeOut(2000);
    }, 7000);

  });
