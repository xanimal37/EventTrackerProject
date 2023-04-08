window.addEventListener('load',function(e){
	init();
});

function init(){
	console.log("INIT");
	loadAllAnimals();
}

function loadAllAnimals(){
	//XHR
	let xhr = new XMLHttpRequest();
	xhr.open('GET','api/animals',true);
	
	xhr.onreadystatechange = () => {
	  if(xhr.readyState === 4){
		  if(xhr.status === 200){
			   // * On success, if a response was received parse the animals data
  				//   and pass the animals object to displayAnimalList().
  				let jsonData =xhr.responseText;
  				let animals = JSON.parse(jsonData);	
  				console.log(animals);
  				displayAnimalList(animals);
		  }
		  else {
			   // * On failure, or if no response text was received, put "Film not found" 
  				//   in the filmData div.
  				console.log("fail");
		  }
	  }
  }
  xhr.send();
}

function displayAnimalList(animals){
	//display (dom manipulation)
	for(animal of animals){
		animalDiv = document.createElement('div');
		animalName = document.createElement('h4');
		animalName.textContent=animal.nickname;
		animalReason = document.createElement('p');
		animalReason.textContent=animal.reason;
		animalArrived = document.createElement('p');
		animalArrived.textContent = animal.stayBegan;
		//append
		animalDiv.appendChild(animalName);
		animalDiv.appendChild(animalReason);
		animalDiv.appendChild(animalArrived);
		//append to dom
		document.getElementById('main').appendChild(animalDiv);
	}
	
}