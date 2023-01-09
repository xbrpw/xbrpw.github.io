$("#menu-icn").click(function(e) {
 $(this).toggleClass("open");
 $('.wDSX5e').toggleClass("EaDnbd");
});
$('.brand-search').click(function () {
    $('.search').toggleClass('expanded');
    $('.search').focus();
});
/*$(document).mouseup(function(e) {
 var container = $('.wDSX5e');
 if (!container.is(e.target) && container.has(e.target).length === 0) {
  container.hide();
 }
});*/