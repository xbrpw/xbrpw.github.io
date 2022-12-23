$(document).ready(function(){
		/* make side menu show up */
    $(".trigger").click(function(){
        $(".overlay, .menuWrap").fadeIn(180);
				$(".menu").animate({opacity: '1', left: '0px'}, 180);
    });
		
		/* make config menu show up */
		$(".settings").click(function(){
				$(".config").animate({opacity: '1', right: '0px'}, 180);
			/* hide others */
				$(".menuWrap").fadeOut(180);
				$(".menu").animate({opacity: '0', left: '-320px'}, 180);
    });
	
		// Show/Hide the other notification options
		$(".deskNotif").click(function(){
        $(".showSName, .showPreview, .playSounds").toggle();
    });
	
		/* close all overlay elements */
		$(".overlay").click(function () {
				$(".overlay, .menuWrap").fadeOut(180);
        $(".menu").animate({opacity: '0', left: '-320px'}, 180);
				$(".config").animate({opacity: '0', right: '-200vw'}, 180);
    });
		
		//This also hide everything, but when people press ESC
		$(document).keydown(function(e) {
			 if (e.keyCode == 27) {
				$(".overlay, .menuWrap").fadeOut(180);
        $(".menu").animate({opacity: '0', left: '-320px'}, 180);
				$(".config").animate({opacity: '0', right: '-200vw'}, 180);
			}
	});
	
	//Enable/Disable night mode
	$(".DarkThemeTrigger").click(function(){
		$("body").toggleClass("DarkTheme")
	}); 	

	/* small conversation menu */
	$(".otherOptions").click(function(){
		$(".moreMenu").slideToggle("fast");
	});
	
	/* clicking the search button from the conversation focus the search bar outside it, as on desktop */
	$( ".search" ).click(function() {
		$( ".searchChats" ).focus();
	});

	/* Show or Hide Emoji Panel */
	$(".emoji").click(function(){
		$(".emojiBar").fadeToggle(120);
  });
	
	/* if the user click the conversation or the type panel will also hide the emoji panel */
  $(".convHistory, .replyMessage").click(function(){
		$(".emojiBar").fadeOut(120);
  });
});