(function ($) {
  $(function () {


    $(window).on("load", function () {

      $('.js-glass-crash_ball').addClass('js-ag-end');
      setInterval(function () {
        $('.js-glass-crash_glass').show();
      }, 450);

    });


  });
})(jQuery);