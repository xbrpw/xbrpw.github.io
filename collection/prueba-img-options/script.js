var bgfade = '#bgfadewrap'; // variable globale
function background_init() {
  $(bgfade).css({'height':$(window).height()+'px','width':$(window).width()+'px'}); // on donne au background les dimensions de la fenêtre
}
function background_anim() {
  var bg_H = $(bgfade).height();
  $(bgfade+' > div h1').first().css({'margin-top':(bg_H/4)+'px','opacity':'1','font-size':'600%'}).animate({'margin-top':'-'+(bg_H/2)+'px','opacity':'0','font-size':'1800%'}, 2500); // texte précedent
    $(bgfade+' > div').first().appendTo(bgfade).fadeOut(2000);
    $(bgfade+' > div').first().fadeIn(2000);
    $(bgfade+' > div h1').first().css({'margin-top':(bg_H*2/3)+'px','opacity':'0','font-size':'100%'}).animate({'margin-top':(bg_H/4)+'px','opacity':'1','font-size':'600%'}, 2500); // texte suivant
    setTimeout(background_anim, 8000); // 5 secondes
}
$(window).on('load', function(){
  $(bgfade+' > div').hide();
  background_init();
  background_anim();
});
$(window).on('resize', function(){
  background_init();
});