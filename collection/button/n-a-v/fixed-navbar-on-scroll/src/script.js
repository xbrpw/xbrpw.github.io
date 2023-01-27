const nav = document.querySelector("#navbar");
    const NavTop = nav.offsetTop;

    function fixnavbar(){
      if(window.scrollY >= NavTop){
        document.body.style.paddingTop = nav.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
      }else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove("fixed-nav");
      }
    }
    window.addEventListener("scroll", fixnavbar);