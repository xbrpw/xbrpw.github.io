const list = document.querySelectorAll('.list');

 function activeLink() {
   list.forEach((item) =>
                item.classList.remove('active'));
   this.classList.add('active');
 }
        
list.forEach((item) =>
             item.addEventListener('click', activeLink));

        
var scrollEventHandler = function() {
  window.scroll(0, window.pageYOffset)
}

window.addEventListener("scroll", scrollEventHandler, false);