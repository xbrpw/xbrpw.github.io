// because of the timeout usedf in animations it causes results to get mixed up if you search too fast
// need to figure a way to clear the stack que on new search


// makeSearch is a function full of other functions that take the imput and displays them to page as li's
function makeSearch() {
  let textVal = $("input").val().trim();
  let webVal = textVal.replace(/ /g, "%20");

  let url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${webVal}&format=json&formatversion=2&limit=10&callback=?`;
  // makeTheCall makes ajax request then adds li's to page and randomly sets an animation to each

  let makeTheCall = function () {

    // r randomly switchs between left or right 
    function r() {
      let x = Math.round(Math.random());
      if (x === 0) {
        return 'fadeInLeft';
      } else {
        return 'fadeInRight';
      }
    }
    $.ajax({
      tpye: "GET",
      url: url,
      async: false,
      dataType: 'json',
      success: function (data, results) {
        let i = 0;
        // liLoop just adds some style by slowing down the loop and putting the li together
        function liLoop() {

          setInterval(function () {
            if (i < data[1].length) {
              i++;
              let aniClass = r();
              // had to add the if to remove the undefined li from showing
              if (data[1][i] !== undefined || data[2][i] !== undefined || data[3][i] !== undefined) {

                $('#there').append(`<li class="animated ${aniClass}"><a target="_blank" href = ${data[3][i]}${data[1][i]}</a><p id="results"><span id="resultsTitle">${data[1][i]}</span> : ${data[2][i]}</p></li>`);
              }
            }
          }, 300);
        }
        liLoop();
      },
      error: function () {
        $('#there').append(`<li><p>There seems to be an ERROR. Please try again later.</p></li>`);
      } });

  };
  // this clears anything that might be in there ... lol, get it.. 
  $('#there').html("");

  $('.wrapper').css('position', 'relative');
  // sort of Error handling and adds slight pause before calling the results. 
  if (textVal === "" || textVal === undefined) {
    $('#here').text(`Sorry, either the search was left empty or whatever you typed in was... Wow, Really!`);
  } else {
    $('#here').html("");
    $('#here').append(`<span id="textVal">` + textVal + `</span> : Here are a few things I found.`);
    setTimeout(makeTheCall(), 500);
  }
  // this clears the input box
  $('#searchBox').val('');
}
// randomWiki opens a new window in style to a random Wiki page
function randomWiki() {
  $(".container").addClass("animated").addClass("zoomOutDown");
  $("body").css("background-color", "#333");
  setTimeout(function () {
    $("body").css("background-color", "transparent");
    window.open("https://en.wikipedia.org/wiki/Special:Random");
    $(".container").removeClass("animated").removeClass("zoomOutDown");
  }, 900);
}
// listen for enterKey press
$('document').ready(function () {
  // sets the enterKey to start the call
  $('#searchBox').bind('enterKey', function (e) {
    makeSearch();
  });
  // Check for keycode that belongs to the enterKey KeyCode 13 is the Enter Key
  $('#searchBox').keyup(function (e) {
    if (e.keyCode == 13) {
      $(this).trigger("enterKey");
    }
  });
});