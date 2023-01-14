'use strict';

(function($) {

    /*-Preloader-*/
    $(window).on('load', function() {
        $(".loader").fadeOut();
        $("#sharonPreloader").delay(200).fadeOut("slow");
    });

})(jQuery);