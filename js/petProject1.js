window.onload = onLoad;

function check(input) {     ///this function is to limits the user to choose only an integer that is equal to 0 or greater.
   if (input.value < 0) {
     input.setCustomValidity('The number must be zero or greater.');
   } else {
     input.setCustomValidity('');
   }
 }


function onLoad() {
	var formHandle = document.forms.calculator;
	formHandle.onsubmit = procesform;    //this function describes what happens when the user clicks the "calculate" button - what elements are being processed. 
	
	
	
	
	function procesform(){
	
	
	var anEater = document.getElementById("numberOfPeople_Big_Eater");
	var averageEater = document.getElementById("numberOfPeople_Avg");
	var childEater = document.getElementById("numberOfPeople_child");
	var pizzaSizeSelection = document.getElementById("pizza_size");
	
	
	
	
	
	if (pizzaSizeSelection.value == "6") {                     ///if the user chooses the small pizza size (the entire calculation will be based on this and the average   
			anEater = anEater.value*6;							///  slices per person) what will be the output in a given number of people?					
			averageEater = averageEater.value*4;
			childEater = childEater.value*2;
			
			
	}
	if (pizzaSizeSelection.value == "8") {                         ///same as above, except pizza size changed to medium and  		
			anEater = anEater.value*4.5;							///  average slices per person are smaller than the small size pizza. 			
			averageEater = averageEater.value*3;
			childEater = childEater.value*1.5;
					
	}
	if (pizzaSizeSelection.value == "10")
	{	
			anEater = anEater.value*3;										///same logic here except for the pizza size (large size) and 
			averageEater = averageEater.value*2;							///average per person is smaller.
			childEater = childEater.value*1;
					
	}		
			
			console.log(anEater +  averageEater +  childEater);
			var total = Math.ceil(( anEater +  averageEater +  childEater)/pizzaSizeSelection.value);  //The logic that will calculate the number of pizza boxes that need to 
			console.log(total);																			//be ordered, the final number (if in decimal) will be rounded up to the closest integer.
	
	
			answer.innerHTML = total;                                                                             /// to replace HTML elements with these properties.
			size.innerHTML = pizzaSizeSelection.options[pizzaSizeSelection.options.selectedIndex].text + " pizza boxes.";
			document.getElementById("toDisplay").style.display = "block";
			return false;																					///as our page defined as "onsubmit" , we don't want the page
	}																										///to refresh every time we click the button	
																											///therefore "return false" stops this action.
	
	
	
	document.getElementById("toDisplay").style.display = "none";              ///This message will be displayed only after the user 
																				///clicks the calculate button.
	
	
		
}