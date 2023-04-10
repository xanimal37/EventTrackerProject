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
	clearMain();
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
  				clearMain();
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
  				let filteredAnimals = [];
  				for(a of animals){
  					if(a.released!=null){
  						filteredAnimals.push(a);
  					}
  				}
  				displayAnimalList('releases',filteredAnimals);
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
	//display (dom manipulation)
	let container = document.createElement('div');
	container.classList.add('animals');

	let heading = document.createElement('h3');
	heading.textContent = label;
	container.appendChild(heading);
	//div for each animal
	for(animal of animals){
		aDiv = document.createElement('div');
		aDiv.classList.add('animal');
		aName = document.createElement('h4');
		aName.textContent=animal.nickname;
		aSpecies = document.createElement('p');
		aSpecies.textContent='species: '+animal.species.name;
		aReason = document.createElement('p');
		aReason.textContent='reason admitted: ' + animal.reason;
		aArrived = document.createElement('p');
		aArrived.textContent = 'arrived: ' + animal.arrived;
		let aReleased;
		if(animal.released!=null){
			aReleased = document.createElement('p');
			aReleased.textContent = 'released: '+ animal.released;
		}
		//append
		aDiv.appendChild(aName);
		aDiv.appendChild(aSpecies);
		aDiv.appendChild(aReason);
		aDiv.appendChild(aArrived);
		if(animal.released!=null){
		aDiv.appendChild(aReleased);
	}
		//button for details
		let info = document.createElement('button');
		info.id = animal.id;
		info.classList.add('btn');
		info.classList.add('btn-dark');
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
		let animalDiv = document.createElement('div');
		animalDiv.classList.add('animal');
		let form = document.createElement('form');
		form.name = 'animalForm';
		//form
		
		//nickame
		let nickname = document.createElement('input');
		nickname.name = 'nickname'; // assign a name attribute
		nickname.type = 'text'; // assign a type attribute// create an input field
		nickname.value = animal.nickname;
		let nicknameLabel = document.createElement('label');
		nicknameLabel.setAttribute("for",'nickname');
		nicknameLabel.textContent ='NickName (if any): ';
		//tag 
		let tag = document.createElement('input');
		tag.name = 'tag'; // assign a name attribute
		tag.type = 'text'; // assign a type attribute// create an input field
		tag.value = animal.tag;
		let tagLabel = document.createElement('label');
		tagLabel.setAttribute("for",'tag');
		tagLabel.textContent ='Tag (if any): ';
		//reason
		let reason = document.createElement('input');
		reason.name = 'reason'; // assign a name attribute
		reason.type = 'text'; // assign a type attribute// create an input field
		reason.value= animal.reason;
		let reasonLabel = document.createElement('label');
		reasonLabel.setAttribute("for",'reason');
		reasonLabel.textContent ='Reason: ';
		//note
		let note = document.createElement('input');
		note.name = 'note'; // assign a name attribute
		note.type = 'text'; // assign a type attribute// create an input field
		note.value = animal.note;
		let noteLabel = document.createElement('label');
		noteLabel.setAttribute("for",'note');
		noteLabel.textContent ='Note: ';
		//lead level --might want to track this?
		let bloodlead = document.createElement('input');
		bloodlead.name = 'bloodlead'; // assign a name attribute
		bloodlead.type = 'number'; // assign a type attribute// create an input field
		bloodlead.value = animal.bloodLead;
		let bloodleadLabel = document.createElement('label');
		bloodleadLabel.setAttribute("for",'bloodlead');
		bloodleadLabel.textContent ='Blood Lead Level: ';
		//arrived 
		aArrived = document.createElement('p');
		aArrived.textContent = 'Arrived: '+ animal.arrived;
		//released
		let aReleased;
		let released;
		let releasedLabel;
		if(animal.released!=null){
			aReleased = document.createElement('p');
			aReleased.textContent = 'Released: '+ animal.released;
		}
		else {
			released = document.createElement('input');
			released.type = 'radio';
			released.name = 'isReleased';
			released.id = 'isReleased';
			released.value = "Released";
			//lable
			releasedLabel = document.createElement('label');
			releasedLabel.setAttribute('for','isReleased');
			releasedLabel.textContent='Released: ';
		}

		// create a submit input
		let submit = document.createElement('input');
		submit.id = animal.id;
		submit.name = 'submit'; // assign a name attribute
		submit.type = 'submit'; // assign a type attribute
		submit.value = 'Update Animal'; // assign a value attribute
		submit.classList.add('btn');
		submit.classList.add('btn-dark');

		submit.addEventListener('click', function(e) { // Assign an event listener to the submit button variable

			e.preventDefault();
			UpdateAnimal(e.target.id);

		});

		//create a delete button
		let deleteBtn = document.createElement('input');
		deleteBtn.id = animal.id;
		deleteBtn.name = 'delete'; // assign a name attribute
		deleteBtn.type = 'submit'; // assign a type attribute
		deleteBtn.value = 'Delete Animal'; // assign a value attribute
		deleteBtn.classList.add('btn');
		deleteBtn.classList.add('btn-dark');


		deleteBtn.addEventListener('click', function(e) { // Assign an event listener to the submit button variable

			e.preventDefault();
			deleteAnimal(e.target.id);

		});

		//build form
		form.appendChild(nicknameLabel);
		form.appendChild(nickname);
		form.appendChild(document.createElement('br'));
		form.appendChild(document.createElement('br'));
		form.appendChild(tagLabel);
		form.appendChild(tag);
		form.appendChild(document.createElement('br'));
		form.appendChild(document.createElement('br'));
		form.appendChild(reasonLabel);
		form.appendChild(reason);
		form.appendChild(document.createElement('br'));
		form.appendChild(document.createElement('br'));
		form.appendChild(noteLabel);
		form.appendChild(note);
		form.appendChild(document.createElement('br'));
		form.appendChild(document.createElement('br'));
		form.appendChild(bloodleadLabel);
		form.appendChild(bloodlead);
		form.appendChild(document.createElement('br'));
		form.appendChild(document.createElement('br'));
		form.appendChild(aArrived);
		
		if(animal.released==null){
			form.appendChild(releasedLabel);
			form.appendChild(released);
			}
		
		else {
			form.appendChild(aReleased);
		}

		form.appendChild(submit);
		form.appendChild(deleteBtn);
		animalDiv.appendChild(form);
		document.getElementById('main').appendChild(animalDiv);
		
		//species information box
		let speciesDiv = document.createElement('div');
		speciesDiv.id='speciesDiv';

		let speciesh3 = document.createElement('h3');
		speciesh3.textContent = 'species';

		let img;
		//image from species
		if(animal.species.imageURL!=null){
			img = document.createElement("img");
			img.src = animal.species.imageURL;
		}

		let sName = document.createElement('p');
		sName.textContent = animal.species.name;

		let sScientificName = document.createElement('p');
		sScientificName.textContent = animal.species.scientificName;

		let sDescription = document.createElement('p');
		sDescription.textContent = animal.species.description;

		speciesDiv.appendChild(speciesh3);
		if(img!=null){
			speciesDiv.appendChild(img);
		}

		speciesStatus = document.createElement('p');
		speciesStatus.classList.add(animal.species.conservationStatus.statusCode);
		speciesStatus.textContent = animal.species.conservationStatus.status;

		speciesStatusDesc = document.createElement('p');
		speciesStatusDesc.textContent = animal.species.conservationStatus.description;

		speciesDiv.appendChild(sName);
		speciesDiv.appendChild(sScientificName);
		speciesDiv.appendChild(sDescription);
		speciesDiv.appendChild(speciesStatus);
		speciesDiv.appendChild(speciesStatusDesc);

		document.getElementById('main').appendChild(speciesDiv);


}

function displayAdmissionForm(species){
	//clear main container
	document.getElementById('main').textContent='';
	//build form elements
	let container = document.createElement('div');
	container.classList.add('animal');
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
	form.appendChild(document.createElement('br'));
	form.appendChild(document.createElement('br'));
	form.appendChild(tagLabel);
	form.appendChild(tag);
	form.appendChild(document.createElement('br'));
	form.appendChild(document.createElement('br'));
	form.appendChild(reasonLabel);
	form.appendChild(reason);
	form.appendChild(document.createElement('br'));
	form.appendChild(document.createElement('br'));
	form.appendChild(noteLabel);
	form.appendChild(note);
	form.appendChild(document.createElement('br'));
	form.appendChild(document.createElement('br'));
	form.appendChild(bloodleadLabel);
	form.appendChild(bloodlead);
	form.appendChild(document.createElement('br'));
	form.appendChild(document.createElement('br'));

	//species information
	let speciesLabel = document.createElement('label');
	speciesLabel.textContent='Species: ';
	let spec = document.createElement('select');
	spec.id = 'species';
	spec.name = 'species';
	//one option for each species
	form.appendChild(speciesLabel);
	form.appendChild(spec);
	form.appendChild(document.createElement('br'));

	
	
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
		submit.classList.add('btn');
		submit.classList.add('btn-dark');

		submit.addEventListener('click', function(e) { // Assign an event listener to the submit button variable

			e.preventDefault();
			AdmitAnimal();

			// clear the form data
			form.reset();
		});

		form.appendChild(document.createElement('br'));
		form.appendChild(submit);

		container.appendChild(form);
 		document.getElementById('main').appendChild(container);
	
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
  		bloodLead: admissionForm.bloodlead.value,
	};

let jsonAnimal = JSON.stringify(animal); // Convert JS object to JSON string

// Pass JSON as request body
console.log(jsonAnimal);
xhr.send(jsonAnimal);
}

//********************************* UPDATE
function UpdateAnimal(id){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/animals/'+id, true);
	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
  		if (xhr.readyState === 4 ) {
    		if ( xhr.status == 200 || xhr.status == 201 ) { // Ok or Created
      			let jsonData =xhr.responseText;
  				let result = document.createElement('div');
  				let text = document.createElement('p');
  				text.textContent = "Animal successfully updated!";

  				clearMain();
  				result.appendChild(text);
  				document.getElementById('main').appendChild(result);
    		}
    		else {
      		console.error("POST request failed.");
      		console.error(xhr.status + ': ' + xhr.responseText);
    		}
  		}
	};

	//check for release
	let timestamp=null
	if(document.getElementById('isReleased')!=null && document.getElementById('isReleased').checked){
		let dateString = (new Date()).toLocaleDateString('fr-CA');
		let timeString = (new Date()).toLocaleTimeString();
		timeString = timeString.slice(0, -3);
		if(timeString.length<8){
			timeString='0'+timeString;
		}
		timestamp=dateString+'T'+timeString;
		console.log(timestamp);
	}

	// JavaScript data (object)
	let animal = {
  		nickname: animalForm.nickname.value,
  		tag: animalForm.tag.value,
  		reason: animalForm.reason.value,
  		note: animalForm.note.value,
  		bloodLead: animalForm.bloodlead.value,
  		released: timestamp
	};

let jsonAnimal = JSON.stringify(animal); // Convert JS object to JSON string

// Pass JSON as request body
console.log(jsonAnimal);
xhr.send(jsonAnimal);
}

function deleteAnimal(id){
	//XHR
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE','api/animals/'+id,true);
	
	xhr.onreadystatechange = () => {
	  if(xhr.readyState === 4){
		  if(xhr.status === 204){
  				let jsonData =xhr.responseText;
  				let result = document.createElement('div');
  				let text = document.createElement('p');
  				text.textContent = "Animal successfully deleted";

  				clearMain();
  				result.appendChild(text);
  				document.getElementById('main').appendChild(result);
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

function clearMain(){
	document.getElementById('main').textContent='';
}








