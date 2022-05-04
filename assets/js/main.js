(function ($) {
  "use strict";
  /* ======= sticky menu ======= */
  // var windows = $(window);
  // var sticky = $(".header-sticky");
  // windows.on("scroll", function () {
  //   var scroll = windows.scrollTop();
  //   if (scroll < 250) {
  //     sticky.removeClass("stick");
  //   } else {
  //     sticky.addClass("stick");
  //   }
  // });

  $(function() {
    $('input[name="check-in-datepicker"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 1901,
      maxYear: parseInt(moment().format('YYYY'),10)
    }, function(start, end, label) {
      var years = moment().diff(start, 'years');
      // alert("You are " + years + " years old!");
    });
  });

  $(".languege-select").niceSelect();

  /* ====== mobile menu open, hide ====== */
  $(".menu-open-btn").click(function () {
    $(".mobile-menu-wrapper").addClass("navBar open-menu");
  });
  $(".menu-close-btn").click(function () {
    $(".mobile-menu-wrapper").removeClass("navBar open-menu");
  });

  /* ====== newsletter ====== */
  $(".newsletter-title").click(function () {
    $(".newsletter-form-wrapper").show();
    $(".newsletter-title").hide();
  });
  $(".newsletter-close-btn").click(function () {
    $(".newsletter-form-wrapper").hide();
    $(".newsletter-title").show();
  });

  // $(function () {
  //   $("#video-back").vidbacking({
  //     masked: true,
  //   });
  // });
})(jQuery);
