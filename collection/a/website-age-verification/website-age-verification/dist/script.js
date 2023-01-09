/*
You'll probably want to drop a cookie so this doesn't pop up everytime. I'd reccomend this plugin:
https://github.com/js-cookie/js-cookie
*/

overAge = function () {
  $('#age-verify').addClass('hidden');
}

underAge = function () {
  $('#age-verify').addClass('under');
}

goBack = function () {
    window.history.back();
}