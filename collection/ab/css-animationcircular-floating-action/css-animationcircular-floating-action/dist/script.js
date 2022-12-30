var btn = document.querySelector('.button');
var buttonWrapper = document.querySelectorAll('.button-wrapper');

btn.addEventListener('click', function(){
  
  if(btn.classList.contains('animation')) {
    btn.classList.remove('animation');
  } else {
    btn.classList.add('animation');
  }
  
  for (i = 0; i < buttonWrapper.length; i++ ) {
    if(buttonWrapper[i].classList.contains('animation')){
      buttonWrapper[i].classList.remove('animation');   
    } else {
      buttonWrapper[i].classList.add('animation');
    }  
  }
  
});