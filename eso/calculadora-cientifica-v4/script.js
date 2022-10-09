var isLastPressEqul = false
var isLastPressOps = false
var isLastPressNum = false
var isdec = false
var operated = false
var sign;
var isLastPressBracClose = false
var my_sign = false
var charCount = 0
 var number = document.getElementById("answer_box").innerHTML;
 var x =""


// code for all number to click
document.querySelectorAll('.num').forEach(function (element) {
        element.addEventListener('click', function () {
             if (answer_box.innerHTML == 0 ){
    answer_box.innerHTML = element.innerHTML}
         else  {
             answer_box.innerHTML += element.innerHTML;

    }
            my_sign =false;
            charCount++
            concat()
            
        })
    });
//   code for all the numbers to click
    document.querySelectorAll('.sign').forEach(function (operator) {
        operator.addEventListener('click', function () {
            if (my_sign == false){
            answer_box.innerHTML += operator.innerHTML
            my_sign = true;
            charCount++
            concat()
           } else{
                 
                return 
            }
        })
    });
    document.querySelectorAll('.signs').forEach(function (element) {
        element.addEventListener('click', function () {
        
            if (answer_box.innerHTML == 0 ){
    answer_box.innerHTML = element.innerHTML}
         else  {
             answer_box.innerHTML += element.innerHTML;

    }
            my_sign =false;
            charCount++
            concat()
           
        })
    });
    // code when clicking the equals sign to solve
    document.querySelector('.equal').addEventListener('click',function() {
    var display = document.querySelector('#answer_box').innerHTML;
    // console.log(display)
    charCount = 0
    display = display.replace(/×/g, '*').replace(/÷/g, '/').replace(/Mod/g, '%');
     dis =eval(display);
     document.getElementById("answer_box").innerHTML = dis;
     
     
    
});
// code for Del button
document.querySelector('.dele').addEventListener('click',function() {
      var dele =document.getElementById('answer_box').innerHTML;
   if (dele.length != 1) {
        dele = dele.substring(0, dele.length - 1)
        charCount--
        concat()

    } else {
        dele = '0'
    }
    console.log(charCount)
    if (charCount == 0) {
        dele = '0'
    }
    document.getElementById("answer_box").innerHTML= dele;
    }
);
// code for the CE and C button
  document.querySelectorAll('.delete').forEach(function (element1){
  element1.addEventListener('click',function() {
     me =  answer_box.innerHTML = 0;
     charCount--
     concat()
     document.getElementById("answer_box").innerHTML= me;
     });
  });

// square button function
  function square (){
      var square1 =document.getElementById('answer_box').innerHTML;
      square2= Math.sqrt(square1)
     console.log(square2)
      document.getElementById('answer_box').innerHTML=square2;

  }
  // squareroot button function
  function Squareroot(){ 
      var root =document.getElementById('answer_box').innerHTML;
      root2 = (root*root);
       console.log(root2)
      document.getElementById('answer_box').innerHTML=root2;
  }
  // plusminus  button function
  function plusminus(){
    var plus =document.getElementById('answer_box').innerHTML;
      plus1 = -1 * plus;
      console.log(plus1)
      document.getElementById('answer_box').innerHTML=plus1;
  }
  // sin button function
  function sin1(){
      var sine = document.getElementById('answer_box').innerHTML;
     var sineee = Math.sin(sine)
     console.log(sineee)
      document.getElementById('answer_box').innerHTML=sineee;
  }
  // cos button function
  function cos1(){
      var coset = document.getElementById('answer_box').innerHTML;
      cosee = Math.cos(coset)
    document.getElementById('answer_box').innerHTML=cosee;
  }
  // tan button function
  function tan1(){
      var tanni = document.getElementById('answer_box').innerHTML;
      tanie = Math.tan(tanni)
      
      document.getElementById('answer_box').innerHTML=tanie;
  }
  // pie button function
  function pie(){
   pieee =Math.PI
      document.getElementById('answer_box').innerHTML=pieee;
  }
  // power button function
  function power(){
    var base =document.getElementById('answer_box').innerHTML;
      root5 = (base*base*base);
      document.getElementById('answer_box').innerHTML=root5;

  }
  // raisepower button function
function raisepower(){ 
      var rai =document.getElementById('answer_box').innerHTML;
      raise = Math.pow(10,rai);
      console.log(raise)
      document.getElementById('answer_box').innerHTML=raise;
  }
  // Exponential button function
  function Exp (){
    var expp =document.getElementById('answer_box').innerHTML;
    expo = Math.exp(expp)
    document.getElementById('answer_box').innerHTML=expo;
  }
  // Log button function
  function loge (){
    var logee =document.getElementById('answer_box').innerHTML;
    lo = Math.log(logee)
    document.getElementById('answer_box').innerHTML=lo;
  }
// factorial button function
  function factor(number) {
  if (number < 0) 
        return -1;
  else if (number == 0) 
      return 1;
  else {
      return (number * factor(number - 1));
  }
  document.getElementById('answer_box').innerHTML =factor(nume);
}

console.log(factor(5));
  
function concat () {
    // When called on number press it changes the content of the clear button gron 'C' to 'CE'
    // document.getElementById('answer_box').innerHTML = size
    // When the number of characters in display exceeds 42, the fontsize decreses and returns a true
    if (charCount < 43) {
        if (charCount > 11) {
            
          answer_box.style.fontSize = 665 / charCount  + 'px';
        } else {
          answer_box.style.fontSize = '50px'
        }
        return true
    } else {
        return false
    }
}
function dot () {
    if (!isdec) {
        if (operated) {
        answer_box.innerHTML = '0.'
        charCount += 2
        operated = false    
    } else {
        if (!isNaN(answer_box.innerHTML[answer_box.innerHTML.length - 1])) {
            answer_box.innerHTML += '.'
            charCount++
        }
            isLastPressEqul = false
            isLastPressOps = false
            isLastPressNum = false
            isdec = true
            isLastPressBracClose = false
        }

    }
return

}