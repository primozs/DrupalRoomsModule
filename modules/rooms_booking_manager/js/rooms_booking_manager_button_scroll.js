(function ($) {
  $(document).ready(function () {
    if ($('.rooms-current-search__info').offset() != null) {
      var top = $('.rooms-current-search__info').offset().top - parseFloat($('.rooms-current-search__info').css('marginTop').replace(/auto/,0));
    }

    $(window).scroll(function () {
      // let's do something funky
    });
  });

  $(document).ready(function () {
    if ($('.rooms-current-search__info').offset() != null) {
      var top = $('.rooms-current-search__info').offset().top - parseFloat($('.rooms-current-search__info').css('marginTop').replace(/auto/, 0));
      $(window).scroll(function (event) {
        // what the y position of the scroll is
        var y = $(this).scrollTop();

        // whether that's below the form
        if (y >= top) {
          // if so, ad the fixed class
          $('#rooms_booking_button').addClass('fixed');
          $('.rooms-current-search__info').addClass('fixed');
        } else {
          // otherwise remove it
          $('#rooms_booking_button').removeClass('fixed');
          $('.rooms-current-search__info').removeClass('fixed');
        }
      });
    }
  });
})(jQuery);
