//Remove filter in Safri
if ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {console.log('Its Safari remove evileye');
  $("circle").removeClass("evileye");
  }
  

//Change eyes on slider input
let slider = document.getElementById("range");
slider.oninput = function() {
    let valu = slider.value;

     let scal = (0.02 * valu + 1) *0.5;
     let rot = -0.006 * valu ;
     let lock = valu * 0.5 + 20;

document.getElementById("eyes").style.transform = "scale(" + scal + ")";
document.getElementById("pill").style.transform = "scaleX(" + rot + ")";
document.getElementById("pill1").style.transform = "scaleX(" + rot + ")";
document.getElementById("ee").style.filter = "brightness(" + lock + "%)";
document.getElementById("ee1").style.filter = "brightness(" + lock + "%)";
}