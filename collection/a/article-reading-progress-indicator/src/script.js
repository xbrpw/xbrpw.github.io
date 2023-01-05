  $(function () {
      var progressPath = document.querySelector(".progress path");
      var pathLength = progressPath.getTotalLength();
      progressPath.style.transition = progressPath.style.WebkitTransition = "none";
      progressPath.style.strokeDasharray = pathLength + " " + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition =
        "stroke-dashoffset 300ms linear";
      var updateProgress = function () {
        // calculate values
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var percent = Math.round((scroll * 100) / height);
        var progress = pathLength - (scroll * pathLength) / height;
        // update dashOffset
        progressPath.style.strokeDashoffset = progress;
        // update progress count
        $(".percent").text(percent + "%");
      };
      updateProgress();
      $(window).scroll(updateProgress);
    });
