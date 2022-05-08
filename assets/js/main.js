$(document).ready(function () {
  /* ======= sticky menu ======= */
  $(".show-sticky-menu").waypoint(function (direction) {
    if (direction == "down") {
      $(".transparent-header").addClass("sticky-menu");
    } else {
      $(".transparent-header").removeClass("sticky-menu");
    }
  });

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

  /* ====== nav check in select ====== */
  $(".nav-check-in-main-select").niceSelect();
  /* ====== check in section select ====== */
  $(".check-in-main-select").niceSelect();
  /* ====== gallery page hero section select ====== */
  $(".gallery-page-select").niceSelect();

  /* ====== nav date ====== */
  $(function () {
    $('input[name="nav-check-in-datepicker"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format("YYYY"), 10),
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        // alert("You are " + years + " years old!");
      }
    );
  });
  
  /* ====== check in date ====== */
  $(function () {
    $('input[name="check-in-datepicker"]').daterangepicker(
      {
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format("YYYY"), 10),
      },
      function (start, end, label) {
        var years = moment().diff(start, "years");
        // alert("You are " + years + " years old!");
      }
    );
  });

  // $(function () {
  //   $("#video-back").vidbacking({
  //     masked: true,
  //   });
  // });
});
