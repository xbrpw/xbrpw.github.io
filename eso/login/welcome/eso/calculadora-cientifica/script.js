var buttons = document.querySelectorAll('.button'); 

function addVisor(valor)
{
	calculadora.visor.value += valor;
}

function getVisor(){
	return calculadora.visor.value;
}

function clearVisor(){
	calculadora.visor.value = "";
}

for(var i = 0; i < buttons.length; i++){

	if(buttons[i].textContent == "C")
	{
		buttons[i].addEventListener("click", function(){
			clearVisor();
		});
	}
	
	else if(buttons[i].textContent == "CE")
	{
		buttons[i].addEventListener("click", function(){
			valor = getVisor().slice(0, -1);
			calculadora.visor.value = valor;
		});		
	}
	
	else if(buttons[i].textContent == "=")
	{
		buttons[i].addEventListener("click", function(){
			calculadora.visor.value = eval(getVisor());
		});			
	}
	
	else
	{
		buttons[i].addEventListener("click", function(){
			addVisor(this.textContent);
		});
	}
	
}