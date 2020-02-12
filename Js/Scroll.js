//NavbarAnimation
  $(function() {
    $(document).scroll(function() {
      var $nav = $(".navbar");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });

      $("#togglenav").click(function() {
        if ($(document).scrollTop() <= $(".navbar").height())
          $(".navbar").toggleClass("scrolled");
      });