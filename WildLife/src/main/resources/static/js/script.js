window.addEventListener('load',function(e){
	init();
});

function init(){
	console.log("INIT");
	loadRecentArrivals();
	loadRecentReleases();
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
  				displayAnimalList('all animals',animals);
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

function loadRecentArrivals(){
	//XHR
	let xhr = new XMLHttpRequest();
	xhr.open('GET','api/animals/arrivals',true);
	
	xhr.onreadystatechange = () => {
	  if(xhr.readyState === 4){
		  if(xhr.status === 200){
			   // * On success, if a response was received parse the animals data
  				//   and pass the animals object to displayAnimalList().
  				let jsonData =xhr.responseText;
  				let animals = JSON.parse(jsonData);	
  				console.log(animals);
  				displayAnimalList('arrivals',animals);
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

function loadRecentReleases(){
	//XHR
	let xhr = new XMLHttpRequest();
	xhr.open('GET','api/animals/releases',true);
	
	xhr.onreadystatechange = () => {
	  if(xhr.readyState === 4){
		  if(xhr.status === 200){
			   // * On success, if a response was received parse the animals data
  				//   and pass the animals object to displayAnimalList().
  				let jsonData =xhr.responseText;
  				let animals = JSON.parse(jsonData);	
  				console.log(animals);
  				displayAnimalList('releases',animals);
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

function displayAnimalList(label,animals){
	//display (dom manipulation)
	let container = document.createElement('div');
	let heading = document.createElement('h3');
	heading.textContent = label;
	container.appendChild(heading);
	//div for each animal
	for(animal of animals){
		aDiv = document.createElement('div');
		aName = document.createElement('h4');
		aName.textContent=animal.nickname;
		aReason = document.createElement('p');
		aReason.textContent=animal.reason;
		aArrived = document.createElement('p');
		aArrived.textContent = animal.arrived;
		//append
		aDiv.appendChild(aName);
		aDiv.appendChild(aReason);
		aDiv.appendChild(aArrived);
		container.appendChild(aDiv);
	}
	//append to dom
	document.getElementById('main').appendChild(container);
}