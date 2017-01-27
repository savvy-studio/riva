$(document).scroll(function () {
    //Show element after user scrolls 800px
    var y = $(this).scrollTop();
    if (y > 300) {
        $('.text').fadeIn(1500);
    }
});
