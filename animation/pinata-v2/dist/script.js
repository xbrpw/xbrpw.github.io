var pinata = $("#pinata");

$('.pinata-container').click(function(e){
  var pinataTop = (($('#pinata-body').offset().top) - e.pageY + 83),    
      pinataLeft = (($('#pinata-body').offset().left) - e.pageX + 83);

  // eye roll
  $(this).bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
     $(this).removeClass('animate-eye');
  }).addClass('animate-eye');
  
  // move
  $('#pinata').css({
      'animation': 'none',
      'transform': 'rotate(5deg)',
      'transform-origin': '0% 50%',
      'transition': '0.3s ease all'
  });
});
// var $pinata = $('#pinata-body'),
//     pinataLeft,
//     pinataTop,
//     tween = TweenMax.from('#pinata', 3, {
//       y: -50,
//       ease: Elastic.easeOut
//     }),
//     tl = new TimelineMax({repeat: -1}),
//     tweenEye = TweenMax.to('.pinata-eye', 10, {
//       rotation: 720,
//       transformOrigin: '90% 55%',
//       ease: Elastic.easeOut,
//       paused: true
//     });

// tl.to('#pinata', 0.5, {
//     transformOrigin: 'center top',
//     rotation: 3,
//     repeat: 1,
//     yoyo: true,
//     ease: Sine.easeOut
//   })
//   .to('#pinata', 0.5, {
//     transformOrigin: 'center top',
//     rotation: -3,
//     repeat: 1,
//     yoyo: true,
//     ease: Sine.easeOut
//   })
  

// // Pushing
// $('.pinata-container').click(function(e){
//   tl.pause();
//   function restartswing(){
//     tl.restart() ? tweenEye.restart() : tl.restart();
//   }
//   tweenEye.restart() ? tweenEye.play() : tweenEye.restart();

//   var pinataTop = (($pinata.offset().top) - e.pageY + 83),
//       pinataLeft = (($pinata.offset().left) - e.pageX + 83),
//       tlswing = TweenMax.to('#pinata', 0.5, {
//         rotation: (pinataTop - pinataLeft)/3,
//         repeat: 1,
//         yoyo: true,
//         ease: Circ.easeOut,
//         paused: true,
//         onComplete: restartswing
//       });
  
//   tlswing.play();
  
// });

// // Falling

// // Exploding