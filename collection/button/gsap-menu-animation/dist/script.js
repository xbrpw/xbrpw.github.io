const menus = document.querySelectorAll(".menu");
menus.forEach(function (menu) {
  const allLinks = menu.querySelectorAll(".link");
  const slider = menu.querySelector(".slider");
  const focus = slider.querySelector(".focus");

  //   remove previous active classes
  const removeActiveClass = () => {
    allLinks.forEach(function (item) {
      item.classList.remove("active");
    });
  };

  const addActiveState = (activeElement) => {
    // removeActiveClass();
    const icon = activeElement.querySelector(".icon");
    const sliderPos = activeElement.offsetLeft + icon.offsetWidth * 0.75;
    gsap
      .timeline()
      .to(focus, {
        height: 0,
        duration: 0.2,
        ease: Power4.easeIn,
        onComplete: removeActiveClass
      })
      .to(slider, {
        css: { width: icon.offsetWidth, left: sliderPos },
        duration: 0.2,
        ease: Power4.easeInOut
      })
      .to(focus, {
        height: activeElement.offsetHeight * 1.4,
        duration: 0.2,
        ease: Power4.easeOut,
        onComplete: () => activeElement.classList.add("active")
      })
      .play();
  };

  allLinks.forEach((link) =>
    link.addEventListener("click", () => {
      addActiveState(link);
    })
  );
});