$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  var e1 = document.querySelector('label[for="username"] li:nth-child(1)');
  localStorage.setItem('value_li', e1.innerHTML);
})


// === BUTTON RADIO ==
$('input[name="civilite"]').change(function(){
        console.log($(this).val());
    });

//== BUTTON RADIO NODELIST ==
	var c = document.identite.civilite,
      ci = document.querySelectorAll("input[name='civilite']"),
    	civ = document.getElementsByName('civilite');
        
 	Array.from(c).forEach(addEvent);
 
function addEvent(element) {
  element.addEventListener('click', function(){
  	document.identite.append(this.value);
  });
}

//====== VALIDATION FORM ==========//
function ValidationForm() {
	this.invalidities = [];

}

ValidationForm.prototype = {
	addInvalidity: function(m) {
		this.invalidities.push(m);
	},

	getInvalidities: function() {
		return this.invalidities.join('. \n');
	},

	checkValidity: function(i) {
    var e1 = document.querySelector('label[for="username"] li:nth-child(1)');


    if (i.value) {
      e1.innerHTML = i.value;
    } else {          
      e1.innerHTML = localStorage.getItem('value_li');          
    }


    if (i.value.length < 3) {
      this.addInvalidity('This input needs to be at least 3 characters long');								
      e1.classList.add('invalid');
      e1.classList.remove('valid');

    } else {
      e1.classList.add('valid');
      e1.classList.remove('invalid');

    }


    var e2 = document.querySelector('label[for="username"] li:nth-child(2)');

    if (i.value) {
      if (i.value.match(/[^a-zA-Z0-9 -]/g)) {
        this.addInvalidity('Only letters and numbers are allowed');
        e2.classList.remove('valid');
        e2.classList.add('invalid');


      } else {
        e2.classList.remove('invalid');
        e2.classList.add('valid');

      }

    } else {
      e2.classList.add('invalid');
    }


  }
		
};

var uInput = document.getElementById('username');

	uInput.ValidationForm = new ValidationForm();

	uInput.addEventListener('keyup', function() {
		uInput.ValidationForm.checkValidity(this);

	});