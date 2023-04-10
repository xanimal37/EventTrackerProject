window.addEventListener('load',function(e){
	init();
});

function init(){
	console.log("INIT");
	//add button event listeners
	document.getElementById("allAnimals").addEventListener('click',function(e){
		e.preventDefault();
		loadAllAnimals();
	});
	document.getElementById("addAnimal").addEventListener('click',function(e){
		e.preventDefault();
		loadSpeciesForForm();
	});

	//default to recents on home page
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

function loadAnimal(id){
	//XHR
	let xhr = new XMLHttpRequest();
	xhr.open('GET','api/animals/'+id,true);
	
	xhr.onreadystatechange = () => {
	  if(xhr.readyState === 4){
		  if(xhr.status === 200){
			   // * On success, if a response was received parse the animals data
  				//   and pass the animals object to displayAnimalList().
  				let jsonData =xhr.responseText;
  				let animal = JSON.parse(jsonData);	
  				displayAnimal(animal);
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
	//clear main
	document.getElementById('main').textContent='';
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
		aReleased = document.createElement('p');
		aReleased.textContent = animal.released;
		//append
		aDiv.appendChild(aName);
		aDiv.appendChild(aReason);
		aDiv.appendChild(aArrived);
		aDiv.appendChild(aReleased);
		//button for details
		let info = document.createElement('button');
		info.id = animal.id;
		info.textContent = 'more info';
		info.addEventListener('click',function(e){
			e.preventDefault();
			loadAnimal(e.target.id);
		});
		aDiv.appendChild(info);
		container.appendChild(aDiv);
	}
	//append to dom
	document.getElementById('main').appendChild(container);
}

function displayAnimal(animal){
	//clear main container
	document.getElementById('main').textContent='';

	let aDiv = document.createElement('div');
	aName = document.createElement('h4');
		aName.textContent=animal.nickname;
		aReason = document.createElement('p');
		aReason.textContent=animal.reason;
		aArrived = document.createElement('p');
		aArrived.textContent = animal.arrived;
		aReleased = document.createElement('p');
		aReleased.textContent = animal.released;
		//append
		aDiv.appendChild(aName);
		aDiv.appendChild(aReason);
		aDiv.appendChild(aArrived);
		aDiv.appendChild(aReleased);

		main.appendChild(aDiv);
}

function displayAdmissionForm(species){
	//clear main container
	document.getElementById('main').textContent='';
	//build form elements
	let form = document.createElement('form');
	form.name = 'admissionForm';
	//nickame
	let nickname = document.createElement('input');
	nickname.name = 'nickname'; // assign a name attribute
	nickname.type = 'text'; // assign a type attribute// create an input field
	let nicknameLabel = document.createElement('label');
	nicknameLabel.setAttribute("for",'nickname');
	nicknameLabel.textContent ='NickName (if any): ';
	//tag 
	let tag = document.createElement('input');
	tag.name = 'tag'; // assign a name attribute
	tag.type = 'text'; // assign a type attribute// create an input field
	let tagLabel = document.createElement('label');
	tagLabel.setAttribute("for",'tag');
	tagLabel.textContent ='Tag (if any): ';
	//reason
	let reason = document.createElement('input');
	reason.name = 'reason'; // assign a name attribute
	reason.type = 'text'; // assign a type attribute// create an input field
	let reasonLabel = document.createElement('label');
	reasonLabel.setAttribute("for",'reason');
	reasonLabel.textContent ='Reason: ';
	//note
	let note = document.createElement('input');
	note.name = 'note'; // assign a name attribute
	note.type = 'text'; // assign a type attribute// create an input field
	let noteLabel = document.createElement('label');
	noteLabel.setAttribute("for",'note');
	noteLabel.textContent ='Note: ';
	//lead level
	let bloodlead = document.createElement('input');
	bloodlead.name = 'bloodlead'; // assign a name attribute
	bloodlead.type = 'number'; // assign a type attribute// create an input field
	let bloodleadLabel = document.createElement('label');
	bloodleadLabel.setAttribute("for",'bloodlead');
	bloodleadLabel.textContent ='Blood Lead Level: ';

	//add basic information
	form.appendChild(nicknameLabel);
	form.appendChild(nickname);
	form.appendChild(tagLabel);
	form.appendChild(tag);
	form.appendChild(reasonLabel);
	form.appendChild(reason);
	form.appendChild(noteLabel);
	form.appendChild(note);
	form.appendChild(bloodleadLabel);
	form.appendChild(bloodlead);

	//species information
	let speciesLabel = document.createElement('label');
	speciesLabel.textContent='Species: ';
	let spec = document.createElement('select');
	spec.id = 'species';
	spec.name = 'species';
	//one option for each species
	form.appendChild(speciesLabel);
	form.appendChild(spec);
	
	
	for(s of species){
	 	let opt = document.createElement('option');
	 	opt.setAttribute('value',s.id);
	 	opt.textContent=s.name;
	 	spec.appendChild(opt);
	 }
 
 	// create a submit input
		let submit = document.createElement('input');
		submit.name = 'submit'; // assign a name attribute
		submit.type = 'submit'; // assign a type attribute
		submit.value = 'Admit Animal'; // assign a value attribute

		submit.addEventListener('click', function(e) { // Assign an event listener to the submit button variable

			e.preventDefault();
			AdmitAnimal();

			// clear the form data
			form.reset();
		});

		form.appendChild(submit);
 	document.getElementById('main').appendChild(form);
	
	
}

function loadSpeciesForForm(){
	//XHR
	let xhr = new XMLHttpRequest();
	xhr.open('GET','api/species',true);
	
	xhr.onreadystatechange = () => {
	  if(xhr.readyState === 4){
		  if(xhr.status === 200){
			   // * On success, if a response was received parse the animals data
  				//   and pass the animals object to displayAnimalList().
  				let jsonData =xhr.responseText;
  				let species = JSON.parse(jsonData);	
  				displayAdmissionForm(species);
		  }
		  else {
			   // * On failure, or if no response text was received, put " not found" 
  				//   in the  div.
  				console.log('fail');
		  }
	  }
  }
  xhr.send();

}

function AdmitAnimal(){
	let sid=admissionForm.species.value;
	console.log('SPECIES ID IS: '+sid);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/species/'+sid+'/animals', true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
  		if (xhr.readyState === 4 ) {
    		if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
      			let data = JSON.parse(xhr.responseText);
      			console.log(data);
    		}
    		else {
      		console.error("POST request failed.");
      		console.error(xhr.status + ': ' + xhr.responseText);
    		}
  		}
	};

	// JavaScript data (object)
	let animal = {
  		nickname: admissionForm.nickname.value,
  		tag: admissionForm.tag.value,
  		reason: admissionForm.reason.value,
  		note: admissionForm.note.value,
  		bloodlead: admissionForm.bloodlead.value,
	};

let jsonAnimal = JSON.stringify(animal); // Convert JS object to JSON string

// Pass JSON as request body
console.log(jsonAnimal);
xhr.send(jsonAnimal);
}






